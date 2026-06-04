function readBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1_000_000) {
        reject(new Error("Request body too large"));
        request.destroy();
      }
    });
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
    request.on("error", reject);
  });
}

module.exports = async function handler(request, response) {
  if (request.method !== "POST") {
    response.statusCode = 405;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  try {
    const payload = await readBody(request);
    const gmailReady = Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_REDIRECT_URI);
    const instagramReady = Boolean(process.env.INSTAGRAM_CLIENT_ID && process.env.INSTAGRAM_REDIRECT_URI);
    const shopmyReady = Boolean(process.env.SHOPMY_HOME_URL || payload.shopmyHome);

    const steps = [
      ["ShopMy", shopmyReady
        ? "ShopMy connection is ready. Use it as the source of affiliate URLs before publishing a look."
        : "Add SHOPMY_HOME_URL or open ShopMy login to begin affiliate link collection."],
      ["Gmail", gmailReady
        ? "Gmail OAuth is configured. The next backend job can read retailer emails and sale alerts."
        : "Gmail needs Google OAuth environment variables before it can read inbox data."],
      ["Instagram", instagramReady
        ? "Instagram OAuth is configured. The workflow can attach profile/media data to outfit planning."
        : `Manual profile mode is active for ${payload.instagramProfile || "@comeshopwithb"}.`],
      ["Custom", payload.hasCustomKey
        ? "Custom integration key exists in the browser session and can be sent to custom jobs."
        : "Custom key slot is empty. Add a local key or production secret when the external tool is chosen."],
      ["Sunday Drop", `${payload.lookCount || 0} looks and ${payload.productSlots || 0} product slots are ready to route into affiliate links and tracking label ${payload.trackingLabel || "sunday-open-shop"}.`],
    ];

    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({
      ok: true,
      mode: "orchestrated",
      steps,
    }));
  } catch (error) {
    response.statusCode = 400;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ error: error.message }));
  }
};

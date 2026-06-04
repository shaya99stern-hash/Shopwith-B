function hasValue(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function oauthUrl(baseUrl, clientId, redirectUri, scope) {
  if (!hasValue(clientId) || !hasValue(redirectUri)) return "";
  const url = new URL(baseUrl);
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("scope", scope);
  return url.toString();
}

module.exports = function handler(request, response) {
  if (request.method !== "GET") {
    response.statusCode = 405;
    response.setHeader("Content-Type", "application/json");
    response.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const shopmyHome = process.env.SHOPMY_HOME_URL || "https://shopmy.us/login";
  const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
  const googleRedirectUri = process.env.GOOGLE_REDIRECT_URI || "";
  const instagramClientId = process.env.INSTAGRAM_CLIENT_ID || "";
  const instagramRedirectUri = process.env.INSTAGRAM_REDIRECT_URI || "";
  const customIntegrationName = process.env.CUSTOM_INTEGRATION_NAME || "Custom key";

  const gmailUrl = oauthUrl(
    "https://accounts.google.com/o/oauth2/v2/auth",
    googleClientId,
    googleRedirectUri,
    "https://www.googleapis.com/auth/gmail.readonly"
  );
  const instagramUrl = oauthUrl(
    "https://api.instagram.com/oauth/authorize",
    instagramClientId,
    instagramRedirectUri,
    "instagram_business_basic"
  );

  response.setHeader("Content-Type", "application/json");
  response.end(JSON.stringify({
    shopmy: {
      name: "ShopMy",
      status: "ready",
      detail: "Open ShopMy, sign in, then use generated affiliate URLs inside product slots.",
      connectUrl: shopmyHome,
    },
    gmail: {
      name: "Gmail",
      status: gmailUrl ? "connect ready" : "needs OAuth env",
      detail: gmailUrl
        ? "Google OAuth is configured from Vercel environment variables."
        : "Add GOOGLE_CLIENT_ID and GOOGLE_REDIRECT_URI in Vercel to enable one-click Gmail connect.",
      connectUrl: gmailUrl || "https://accounts.google.com/",
    },
    instagram: {
      name: "Instagram",
      status: instagramUrl ? "connect ready" : "manual profile",
      detail: instagramUrl
        ? "Instagram OAuth is configured from Vercel environment variables."
        : "Manual profile connection is active. Add Instagram OAuth env values to enable API connect.",
      connectUrl: instagramUrl || "https://www.instagram.com/comeshopwithb/",
    },
    custom: {
      name: customIntegrationName,
      status: "local key slot",
      detail: "Use the app form for a local browser key. Production secrets should be set in Vercel env vars.",
      connectUrl: "#integrations",
    },
  }));
};

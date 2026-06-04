const STORAGE_KEY = "shop-with-b-v1";

const preferredBrands = ["H&M", "Zara", "Mango"];
const storeTargets = {
  zaraEmbroidery: "https://www.zara.com/us/en/woman-dresses-embroidered-l2185.html",
  mangoMidiSkirts: "https://shop.mango.com/us/en/c/women/skirts/midi_3a5d9d44",
  mangoKnitSkirts: "https://shop.mango.com/us/en/c/women/skirts/knitwear_0ec0198e",
  zaraGirlsFloral: "https://www.zara.com/us/en/kids-girl-dresses-floral-l8142.html",
  zaraGirlsMaryJanes: "https://www.zara.com/us/en/kids-girl-shoes-maryjane-l5105.html",
  hmGirls: "https://www2.hm.com/content/hmonline/en_us/kids/girls/clothing.html",
  hmBlueCardigan: "https://www2.hm.com/en_us/productpage.1309413001.html",
  zaraBabyKnit: "https://www.zara.com/us/en/kids-newborn-knitwear-l495.html",
  zaraBabyCardigan: "https://www.zara.com/us/en/baby-knit-cardigan-p44615549.html",
  zaraBabyPointelle: "https://www.zara.com/us/en/pointelle-knit-romper-p05536568.html",
  hmBabyHoodies: "https://www2.hm.com/en_us/productpage.1174358001.html",
  hmBabyKnitwear: "https://www2.hm.com/en_us/baby/newborn/clothing/sweaters-cardigans.html",
  hmBoysPants: "https://www2.hm.com/en_us/kids/boys/clothing/pants.html",
  hmBoysPolo: "https://www2.hm.com/en_us/productpage.1247893007.html",
  hmBoysSweatshirts: "https://www2.hm.com/en_us/productpage.0873041010.html",
  hmBoysLoafers: "https://www2.hm.com/en_us/productpage.1216232002.html",
  zaraBoysJoggers: "https://www.zara.com/us/en/kids-boy-trousers-joggers-l284.html",
  zaraBoysKnitwear: "https://www.zara.com/us/en/kids-boy-knitwear-l223.html",
  zaraMensTies: "https://www.zara.com/us/en/man-accessories-ties-bows-l560.html",
  zaraMensDressShoes: "https://www.zara.com/us/en/man-shoes-shoes-l796.html?v1=1429447",
  hmHome: "https://www2.hm.com/en_us/home.html",
  zaraHome: "https://www.zarahome.com/us/",
};

const looks = [
  {
    title: "Shavuos Mom Ivory",
    category: "Mom",
    tag: "Shavuos",
    caption: "Ivory, powder blue, and pearls. A holiday look that feels soft, covered, and intentional.",
    products: [
      ["Dress", "Zara embroidered midi dress layered with a cream knit shell for coverage", "affiliate-url-needed", "Zara", storeTargets.zaraEmbroidery],
      ["Layer", "H&M powder-blue embroidered-detail knit cardigan", "affiliate-url-needed", "H&M", storeTargets.hmBlueCardigan],
      ["Shoes", "Zara ivory closed ballet flats or Mary Jane flats", "affiliate-url-needed", "Zara", storeTargets.zaraGirlsMaryJanes],
      ["Jewelry", "Simple pearl studs, no watch styling", "affiliate-url-needed", "H&M"],
    ],
  },
  {
    title: "Family Look Blue",
    category: "Family",
    tag: "Family look",
    caption: "The point is coordination, not matching: mom, girl, and boy in one calm blue/cream palette.",
    products: [
      ["Mom", "Mango A-line or fine-knit midi skirt with soft blue button blouse", "affiliate-url-needed", "Mango", storeTargets.mangoMidiSkirts],
      ["Girl", "Zara Kids floral poplin dress with H&M cardigan", "affiliate-url-needed", "Zara Kids / H&M Kids", storeTargets.zaraGirlsFloral],
      ["Boy", "H&M navy fine-knit polo with H&M twill chinos", "affiliate-url-needed", "H&M Kids", storeTargets.hmBoysPolo],
      ["Shoes", "Closed Mary Janes for girl, loafers or sneakers for boy", "affiliate-url-needed", "Zara Kids / H&M Kids", storeTargets.hmBoysLoafers],
    ],
  },
  {
    title: "Outfit Prep Girl",
    category: "Girls",
    tag: "Outfit prep",
    caption: "The outfit-prep idea: a little girl can feel involved, and the morning gets easier.",
    products: [
      ["Dress", "Zara Kids floral print dress", "affiliate-url-needed", "Zara Kids", storeTargets.zaraGirlsFloral],
      ["Layer", "H&M cotton cardigan in natural white/flowers or soft pink", "affiliate-url-needed", "H&M Kids", storeTargets.hmGirls],
      ["Shoes", "Zara closed Mary Jane flats", "affiliate-url-needed", "Zara Kids", storeTargets.zaraGirlsMaryJanes],
      ["Hair", "Small matching bow or headband, same color family", "affiliate-url-needed", "H&M Kids", storeTargets.hmGirls],
    ],
  },
  {
    title: "SS26 Brown + Blue",
    category: "Mom",
    tag: "SS 26",
    caption: "A more specific palette: denim blue, chocolate, taupe, structured but not loud.",
    products: [
      ["Skirt", "Mango denim or knit midi skirt, blue family", "affiliate-url-needed", "Mango", storeTargets.mangoMidiSkirts],
      ["Top", "Mango chocolate fine-knit top with sleeves", "affiliate-url-needed", "Mango", storeTargets.mangoKnitSkirts],
      ["Shoes", "Taupe or brown closed ballet flats", "affiliate-url-needed", "Mango / Zara", storeTargets.mangoMidiSkirts],
      ["Bag", "Structured brown everyday tote", "affiliate-url-needed", "Mango", storeTargets.mangoMidiSkirts],
    ],
  },
  {
    title: "Kids Sets",
    category: "Kids",
    tag: "Kids sets",
    caption: "Brother-sister sets that feel pulled together without being costume-like.",
    products: [
      ["Boy", "Zara Kids knit or rugby-style top with H&M chinos", "affiliate-url-needed", "Zara Kids / H&M Kids", storeTargets.zaraBoysKnitwear],
      ["Girl", "Zara Kids floral dress or skirt set with H&M cardigan", "affiliate-url-needed", "Zara Kids / H&M Kids", storeTargets.zaraGirlsFloral],
      ["Shoes", "Zara Mary Janes for her, H&M loafers or sneakers for him", "affiliate-url-needed", "Zara Kids / H&M Kids", storeTargets.zaraGirlsMaryJanes],
      ["Color", "Blue, cream, and soft brown palette", "affiliate-url-needed", "Brand direction"],
    ],
  },
  {
    title: "Kids Shoes Edit",
    category: "Kids",
    tag: "Kids shoes",
    caption: "The useful post: the shoes moms actually need to buy for multiple kids.",
    products: [
      ["Sneakers", "H&M/Zara durable closed kids sneakers", "affiliate-url-needed", "H&M Kids / Zara Kids", storeTargets.zaraBoysJoggers],
      ["Mary Jane", "Zara floral-detail or gingham Mary Janes", "affiliate-url-needed", "Zara Kids", storeTargets.zaraGirlsMaryJanes],
      ["Loafers", "H&M boys loafers", "affiliate-url-needed", "H&M Kids", storeTargets.hmBoysLoafers],
      ["Flats", "Zara girls closed ballet flats", "affiliate-url-needed", "Zara Kids", storeTargets.zaraGirlsMaryJanes],
    ],
  },
  {
    title: "Rompers + Babies",
    category: "Baby",
    tag: "Rompers",
    caption: "Baby outfits are content because moms are already shopping for them.",
    products: [
      ["Girl", "Zara pointelle knit romper in beige-pink", "affiliate-url-needed", "Zara Baby", storeTargets.zaraBabyPointelle],
      ["Boy", "Zara newborn striped/pointelle knit romper", "affiliate-url-needed", "Zara Baby", storeTargets.zaraBabyKnit],
      ["Layer", "Zara baby knit cardigan in ecru", "affiliate-url-needed", "Zara Baby", storeTargets.zaraBabyCardigan],
      ["Softs", "H&M newborn socks, bonnet, and soft blanket", "affiliate-url-needed", "H&M Baby", storeTargets.hmBabyKnitwear],
    ],
  },
  {
    title: "Boys Durable Sports",
    category: "Boys",
    tag: "Sports",
    caption: "Durable, practical, closed sneakers, and clothes that can survive boys being boys.",
    products: [
      ["Top", "H&M boys embroidered-detail half-zip sweatshirt or performance tee", "affiliate-url-needed", "H&M Kids", storeTargets.hmBoysSweatshirts],
      ["Pants", "Zara label cargo jogger pants or H&M cotton twill joggers", "affiliate-url-needed", "Zara Kids / H&M Kids", storeTargets.zaraBoysJoggers],
      ["Layer", "H&M boys zip hoodie, navy/gray/green", "affiliate-url-needed", "H&M Kids", storeTargets.hmBoysSweatshirts],
      ["Shoes", "Closed supportive sneakers, dark color", "affiliate-url-needed", "Zara Kids / H&M Kids", storeTargets.hmBoysPants],
    ],
  },
  {
    title: "Husband Weekday",
    category: "Husband",
    tag: "Men",
    caption: "A practical husband edit: sweater, shirt, chinos, loafers.",
    products: [
      ["Sweater", "Mango Man fine-gauge sweater", "affiliate-url-needed", "Mango Man"],
      ["Shirt", "Mango/Zara Man button-down shirt", "affiliate-url-needed", "Mango Man / Zara Man"],
      ["Pants", "Mango Man chinos, not skinny", "affiliate-url-needed", "Mango Man"],
      ["Shoes", "Zara Man closed leather loafers", "affiliate-url-needed", "Zara Man", storeTargets.zaraMensDressShoes],
    ],
  },
  {
    title: "Husband Shabbos",
    category: "Husband",
    tag: "Men",
    caption: "The tie/jacket/shoe recommendation lane belongs in the app too.",
    products: [
      ["Jacket", "Mango or Zara Man navy blazer", "affiliate-url-needed", "Mango Man / Zara Man"],
      ["Shirt", "White dress shirt, clean collar", "affiliate-url-needed", "Mango Man / H&M"],
      ["Tie", "Zara Man muted tie, navy/brown/soft pattern", "affiliate-url-needed", "Zara Man", storeTargets.zaraMensTies],
      ["Shoes", "Zara Man black dress shoes", "affiliate-url-needed", "Zara Man", storeTargets.zaraMensDressShoes],
    ],
  },
  {
    title: "Modest Swim",
    category: "Swim",
    tag: "Swim",
    caption: "Swim belongs because it is a real Orthodox mom shopping problem.",
    products: [
      ["Top", "Covered swim tunic or rashguard", "affiliate-url-needed", "H&M / Zara"],
      ["Bottom", "Swim leggings", "affiliate-url-needed", "H&M"],
      ["Shoes", "Closed water shoes", "affiliate-url-needed", "H&M Kids / Zara Kids"],
      ["Sun", "Sun hat and towel", "affiliate-url-needed", "H&M"],
    ],
  },
  {
    title: "Shavuos Tablescape",
    category: "Home",
    tag: "Tablescape",
    caption: "The account already crosses into holiday tables. This should be a shopping edit lane.",
    products: [
      ["Florals", "White florals or stems", "affiliate-url-needed", "H&M Home / Zara Home", storeTargets.hmHome],
      ["Napkins", "Pale blue napkins", "affiliate-url-needed", "H&M Home / Zara Home", storeTargets.zaraHome],
      ["Dishes", "Simple white dishes", "affiliate-url-needed", "H&M Home / Zara Home", storeTargets.zaraHome],
      ["Candles", "Taper candles", "affiliate-url-needed", "H&M Home / Zara Home", storeTargets.hmHome],
    ],
  },
];

const tasks = [
  ["done", "Load house rules", "Apply modest rules: covered, spring palette, no belts, no open-toe shoes."],
  ["running", "Find products", "Search ShopMy/catalog sources for matching real products."],
  ["pending", "Generate affiliate links", "Replace draft product URLs with creator ShopMy affiliate URLs."],
  ["pending", "Build Sunday drop", "Create shoppable cards, captions, and tracking labels."],
  ["pending", "Track performance", "Read clicks, sales, and high-performing categories."],
];

const sources = [
  ["ShopMy catalog", "Queued", "Search product names, commissions, and availability."],
  ["H&M", "Priority", "Mom basics, kids sets, baby basics, boys sports, H&M Home."],
  ["Zara", "Priority", "More styled pieces, kids shoes, family looks, Zara Home."],
  ["Mango", "Priority", "Polished mom looks, husband picks, elevated basics."],
  ["Instagram references", "Loaded", "Use Bassi's highlights: Swim, Shavuos, Family look, Rompers, SS26, Outfit inspo, Kids sets, Kids shoes, Tablescape."],
  ["Kids retailers", "Queued", "Girls dresses, kids sets, kids shoes, boys sportswear, baby rompers."],
  ["Men's picks", "Queued", "Shoes, ties, sweaters, jackets."],
  ["Holiday home", "Queued", "Shavuos and Sukkos table edits that fit the feed."],
];

const tracking = [
  ["Clicks", "0", "Waiting for affiliate links"],
  ["Saved looks", "12", "Seeded for Sunday"],
  ["Best category", "TBD", "Needs live ShopMy data"],
  ["Next decision", "Family look", "Likely strongest brand-fit lane"],
];

const defaultState = {
  config: {
    creatorHandle: "",
    trackingLabel: "sunday-open-shop",
    shopmyHome: "https://shopmy.us/login",
    instagramProfile: "https://www.instagram.com/comeshopwithb/",
    customIntegrationKey: "",
  },
  currentFilter: "All",
  pipelineIndex: 1,
  integrations: {},
  workflow: [],
};

let state = loadState();

function loadState() {
  try {
    return { ...defaultState, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return structuredClone(defaultState);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

async function fetchIntegrationStatus() {
  try {
    const response = await fetch("./api/integrations");
    if (!response.ok) throw new Error(`Integration status ${response.status}`);
    state.integrations = await response.json();
  } catch {
    state.integrations = {
      shopmy: {
        name: "ShopMy",
        status: state.config.shopmyHome ? "ready" : "needs setup",
        detail: "Opens ShopMy sign-in and stores affiliate links in the app.",
        connectUrl: state.config.shopmyHome || "https://shopmy.us/login",
      },
      gmail: {
        name: "Gmail",
        status: "needs OAuth app",
        detail: "Gmail connection is scaffolded. Google OAuth credentials belong in Vercel environment variables.",
        connectUrl: "https://accounts.google.com/",
      },
      instagram: {
        name: "Instagram",
        status: "ready",
        detail: "Profile connection is ready for manual linking. API auth can be enabled with Instagram app credentials.",
        connectUrl: state.config.instagramProfile || "https://www.instagram.com/comeshopwithb/",
      },
      custom: {
        name: "Custom key",
        status: state.config.customIntegrationKey ? "saved locally" : "empty",
        detail: "A private key can be saved to this browser for quick testing without committing it to GitHub.",
        connectUrl: "#integrations",
      },
    };
  }
}

async function runIntegrationWorkflow() {
  const payload = {
    creatorHandle: state.config.creatorHandle,
    trackingLabel: state.config.trackingLabel,
    shopmyHome: state.config.shopmyHome,
    instagramProfile: state.config.instagramProfile,
    hasCustomKey: Boolean(state.config.customIntegrationKey),
    lookCount: looks.length,
    productSlots: looks.reduce((sum, look) => sum + look.products.length, 0),
  };

  try {
    const response = await fetch("./api/workflow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) throw new Error(`Workflow status ${response.status}`);
    const result = await response.json();
    state.workflow = result.steps || [];
  } catch {
    state.workflow = [
      ["ShopMy", "Open creator dashboard and collect affiliate links for product slots."],
      ["Gmail", "Watch brand/retailer emails for sale alerts and product availability."],
      ["Instagram", "Use @comeshopwithb profile themes to pick the Sunday drop lane."],
      ["Custom", state.config.customIntegrationKey ? "Local key is saved for browser testing." : "Paste a local key or add production env secrets on Vercel."],
      ["Output", `${looks.length} looks and ${payload.productSlots} product slots are ready for affiliate completion.`],
    ];
  }

  saveState();
  renderWorkflow();
}

function affiliateHref(raw, storeUrl) {
  return raw === "affiliate-url-needed" ? storeUrl || "https://shopmy.us/login" : raw;
}

function renderFilters() {
  const filters = ["All", ...new Set(looks.map((look) => look.category)), "Sports", "Shabbos"];
  const holder = document.querySelector("#filters");
  holder.innerHTML = "";

  filters.forEach((filter) => {
    const button = document.createElement("button");
    button.className = `filter${state.currentFilter === filter ? " active" : ""}`;
    button.textContent = filter;
    button.addEventListener("click", () => {
      state.currentFilter = filter;
      saveState();
      renderFilters();
      renderLooks();
    });
    holder.appendChild(button);
  });
}

function renderLooks() {
  const grid = document.querySelector("#lookGrid");
  const template = document.querySelector("#lookTemplate");
  grid.innerHTML = "";

  looks
    .filter((look) => {
      if (state.currentFilter === "All") return true;
      return look.category === state.currentFilter || look.tag === state.currentFilter;
    })
    .forEach((look) => {
      const node = template.content.firstElementChild.cloneNode(true);
      node.querySelector("h3").textContent = look.title;
      node.querySelector(".pill").textContent = look.tag;
      node.querySelector(".caption").textContent = look.caption;

      const image = node.querySelector(".look-image");
      image.style.backgroundPosition = imagePosition(looks.indexOf(look));

      const hotspotLayer = node.querySelector(".hotspot-layer");
      const products = node.querySelector(".products");

      look.products.forEach(([type, name, url, brandHint, storeUrl]) => {
        const row = document.createElement("a");
        row.className = "product-row";
        row.href = affiliateHref(url, storeUrl);
        row.target = "_blank";
        row.rel = "noreferrer";
        row.innerHTML = `<span class="type">${type}</span><span class="name">${name}<small>${brandHint || preferredBrands.join(" / ")}</small></span><span class="status">${url === "affiliate-url-needed" ? "Store target" : "Affiliate"}</span>`;
        products.appendChild(row);

        const hotspot = document.createElement("a");
        hotspot.className = "hotspot";
        hotspot.href = affiliateHref(url, storeUrl);
        hotspot.target = "_blank";
        hotspot.rel = "noreferrer";
        hotspot.textContent = type;
        hotspotLayer.appendChild(hotspot);
      });

      grid.appendChild(node);
    });
}

function imagePosition(index) {
  const positions = [
    "0% 0%", "33.333% 0%", "66.666% 0%", "100% 0%",
    "0% 50%", "33.333% 50%", "66.666% 50%", "100% 50%",
    "0% 100%", "33.333% 100%", "66.666% 100%", "100% 100%",
  ];
  return positions[index] || "0% 0%";
}

function renderTasks() {
  const holder = document.querySelector("#taskList");
  holder.innerHTML = "";

  tasks.forEach(([status, title, description], index) => {
    const derivedStatus = index < state.pipelineIndex ? "done" : index === state.pipelineIndex ? "running" : status === "done" ? "done" : "pending";
    const task = document.createElement("article");
    task.className = `task ${derivedStatus}`;
    task.innerHTML = `<span class="dot"></span><div><strong>${title}</strong><p class="caption">${description}</p></div><span class="status">${derivedStatus}</span>`;
    holder.appendChild(task);
  });
}

function renderSources() {
  const holder = document.querySelector("#sourceList");
  holder.innerHTML = sources
    .map(([name, status, description]) => `<article class="source"><strong>${name}</strong><p class="caption">${description}</p><span class="status">${status}</span></article>`)
    .join("");
}

function renderTracking() {
  document.querySelector("#trackingGrid").innerHTML = tracking
    .map(([label, value, note]) => `<article class="track-card"><span class="caption">${label}</span><h3>${value}</h3><p class="caption">${note}</p></article>`)
    .join("");
}

function renderIntegrations() {
  const holder = document.querySelector("#integrationGrid");
  const integrations = state.integrations || {};
  holder.innerHTML = Object.entries(integrations)
    .map(([key, integration]) => {
      const status = integration.status || "pending";
      const url = integration.connectUrl || "#integrations";
      const target = url.startsWith("http") ? ' target="_blank" rel="noreferrer"' : "";
      return `<article class="integration-card">
        <header>
          <strong>${integration.name || key}</strong>
          <span class="status">${status}</span>
        </header>
        <p class="caption">${integration.detail || ""}</p>
        <div class="integration-actions">
          <a class="ghost link-button" href="${url}"${target}>Connect</a>
        </div>
      </article>`;
    })
    .join("");
}

function renderWorkflow() {
  const holder = document.querySelector("#workflowLog");
  holder.innerHTML = (state.workflow || [])
    .map(([label, note]) => `<article class="workflow-step"><strong>${label}</strong><span class="caption">${note}</span></article>`)
    .join("");
}

function hydrateConfig() {
  document.querySelector("#creatorHandle").value = state.config.creatorHandle || "";
  document.querySelector("#trackingLabel").value = state.config.trackingLabel || "";
  document.querySelector("#shopmyHome").value = state.config.shopmyHome || "";
  document.querySelector("#instagramProfile").value = state.config.instagramProfile || "";
  document.querySelector("#customIntegrationKey").value = state.config.customIntegrationKey || "";
}

function updateMetrics() {
  document.querySelector("#metricLooks").textContent = looks.length;
  document.querySelector("#metricSlots").textContent = looks.reduce((sum, look) => sum + look.products.length, 0);
  document.querySelector("#metricAffiliate").textContent = looks.some((look) => look.products.some((product) => product[2] === "affiliate-url-needed")) ? "Draft" : "Live";
}

document.querySelector("#runPipeline").addEventListener("click", () => {
  state.pipelineIndex = Math.min(tasks.length - 1, state.pipelineIndex + 1);
  saveState();
  renderTasks();
});

document.querySelector("#addSource").addEventListener("click", () => {
  sources.push(["Manual source", "New", "Add a store/category/product target for future scraping."]);
  renderSources();
});

document.querySelector("#configForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.config.creatorHandle = document.querySelector("#creatorHandle").value.trim();
  state.config.trackingLabel = document.querySelector("#trackingLabel").value.trim();
  saveState();
});

document.querySelector("#integrationForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.config.shopmyHome = document.querySelector("#shopmyHome").value.trim();
  state.config.instagramProfile = document.querySelector("#instagramProfile").value.trim();
  state.config.customIntegrationKey = document.querySelector("#customIntegrationKey").value.trim();
  saveState();
  fetchIntegrationStatus().then(() => {
    renderIntegrations();
    hydrateConfig();
  });
});

document.querySelector("#refreshIntegrations").addEventListener("click", () => {
  fetchIntegrationStatus().then(renderIntegrations);
});

document.querySelector("#runIntegrationWorkflow").addEventListener("click", runIntegrationWorkflow);

document.querySelector("#exportData").addEventListener("click", () => {
  const payload = JSON.stringify({ state, looks, tasks, sources, tracking }, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "shop-with-b-export.json";
  a.click();
  URL.revokeObjectURL(url);
});

async function init() {
  renderFilters();
  renderLooks();
  renderTasks();
  renderSources();
  renderTracking();
  hydrateConfig();
  updateMetrics();
  await fetchIntegrationStatus();
  renderIntegrations();
  renderWorkflow();
}

init();

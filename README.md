# Shop with B

First-version affiliate studio for `@comeshopwithb` style modest Orthodox family shopping content.

## What This Version Does

- Shows a modest family shopping lookbook based on Bassi's public Instagram themes:
  - Swim
  - Shavuos inspo
  - Family look
  - Rompers
  - SS 26
  - Outfit inspo
  - Kids sets
  - Kids shoes
  - Sukkos table
  - Tablescape
- Keeps outfit rules aligned with the audience:
  - modest women's looks only
  - no women's shorts or pants
  - no open-toe shoes
  - no belts
  - no visible elastic-waist styling
  - spring palette colors
  - practical kids and family shopping categories
- Lets each visible outfit have clickable product slots.
- Starts product sourcing with common brands: H&M, Zara, and Mango.
- Tracks a first-pass task pipeline:
  - load house rules
  - find products
  - generate affiliate links
  - build Sunday drop
  - track performance
- Stores local creator handle and default tracking label in browser localStorage.
- Exports JSON for later migration into a backend.
- Adds an integration center for ShopMy, Gmail, Instagram, and a custom key.
- Runs a backend-backed integration workflow through `api/workflow.js`.
- Includes native iOS SwiftUI source in `ios/` for the app build track.

## How To Open

Double-click `index.html`, or open it from the browser:

```text
C:\Users\shaya\OneDrive\Desktop\jacks house\shop-with-b\index.html
```

## GitHub Setup

This repo is ready for GitHub Pages.

1. Create a GitHub repo, for example `Shopwith-B`.
2. Push this folder to the repo.
3. In GitHub, go to `Settings -> Pages`.
4. Set the source to `GitHub Actions`.
5. Push to `main`; the workflow in `.github/workflows/pages.yml` deploys the PWA.

Expected Pages URL format:

```text
https://<your-github-username>.github.io/Shopwith-B/
```

## PWA

The app includes:

- `manifest.webmanifest`
- `sw.js`
- `pwa.js`
- `assets/icon.svg`
- `.nojekyll`
- GitHub Pages deploy workflow

Install behavior requires serving over `https`, so it will install properly from GitHub Pages or another HTTPS host. Opening `index.html` directly works for local viewing, but service-worker install behavior is browser-dependent on local files.

## ShopMy Login And Affiliate Links

Do not hard-code a ShopMy password in this repo.

For v1:

1. Open ShopMy from the app.
2. Sign in directly in the browser.
3. Generate/copy your ShopMy affiliate links.
4. Replace each `affiliate-url-needed` product slot when we add the edit flow.

For deployment:

- Use environment variables for private credentials and tokens.
- Use a secure database or encrypted secret store for persisted connection state.
- Store affiliate links and tracking labels in database rows, not source files.

## Integrations

The app has Vercel API routes for integration status and workflow orchestration:

- `api/integrations.js`
- `api/workflow.js`

Production OAuth credentials should be added as Vercel environment variables:

- `SHOPMY_HOME_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_REDIRECT_URI`
- `INSTAGRAM_CLIENT_ID`
- `INSTAGRAM_REDIRECT_URI`
- `CUSTOM_INTEGRATION_NAME`

The browser app also supports a local custom key field for quick testing.

## Native iOS

Native iOS source lives in `ios/ShopWithB`.

The iOS app opens the production Shop with B app and gives native quick access to ShopMy, Gmail, and Instagram. Building for TestFlight or App Store requires Xcode on macOS and an Apple Developer account.

## Next Build Steps

- Add product-slot editor UI with separate fields for store URL and ShopMy affiliate URL.
- Add ShopMy import flow for affiliate URLs.
- Add Instagram reference ingestion for your modest outfit style.
- Add scraper jobs for approved retailers/categories.
- Add click/sales tracking views by look, product type, audience, and drop.
- Add integrations for email/SMS/Pinterest/Instagram campaign planning.

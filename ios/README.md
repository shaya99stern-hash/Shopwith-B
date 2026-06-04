# Shop with B iOS

Native iOS source scaffold for the Shop with B app.

This folder is for the real iOS build track. The current Windows/Vercel workflow can deploy the web/PWA version, but App Store or TestFlight builds require Xcode on macOS and an Apple Developer account.

## Native App Behavior

- Opens the production Shop with B app.
- Keeps the integration center as the home workflow.
- Uses iOS Safari handoff for ShopMy, Gmail, and Instagram sign-in.
- Can be extended with `ASWebAuthenticationSession` once provider OAuth credentials are approved.

Production URL:

```text
https://shop-with-b.vercel.app
```

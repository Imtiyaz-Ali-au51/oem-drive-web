## Root cause (most likely)

What you are seeing on mobile is almost certainly **not** a CSS bug — it's the preview URL. The link you currently have is the Lovable **editor preview** (`id-preview--…lovable.app`). That URL requires a Lovable login. On your desktop you're already signed in, so it loads the real app with all styles. On your phone you are not signed in, so the host serves a stripped login/fallback page — which looks exactly like "plain black-and-white text with little styling."

Secondary risk (only relevant if the phone is genuinely old): the design system uses modern CSS — `oklch()` colors, `color-mix()`, `@theme inline`. These need iOS Safari 15.4+ / Chrome 111+ (2022+). On an older phone, the layout renders but colors fall back to black/white. This matches your description too, so it's worth hardening regardless.

## Plan

### 1. Get a real, public URL (fixes the login-gated preview)
- Publish the project so it gets a permanent `…lovable.app` URL that does **not** require login.
- Or, for a one-off share with the client, generate a Share Preview link (public for 7 days).
- Confirm by opening that URL on the phone in a private/incognito tab — it should render fully styled.

### 2. Verify the deployed CSS actually loads on mobile
- Open the published URL on phone, long-press → "Request desktop site" should not be needed.
- On Android Chrome: `chrome://inspect` from a laptop, inspect the phone tab, check:
  - Network: `styles.css` returns 200, correct `text/css` MIME, no mixed content.
  - Console: no parse errors.
- On iOS Safari: Settings → Safari → Advanced → Web Inspector, then inspect from a Mac (or just check the page visually — if step 1 fixed it, we're done).

### 3. Harden CSS for older mobile browsers (defensive)
To remove the second risk entirely, add safe color fallbacks so the site still looks branded on browsers without `oklch()` support:

- In `src/styles.css`, for every token defined with `oklch(...)`, add an `sRGB` fallback `#hex` declaration immediately before it. Browsers that don't understand `oklch` will use the hex; modern browsers will override with `oklch`.
- Replace `color-mix(in oklab, …)` inside shadow tokens with pre-computed `rgba()` equivalents (kept side-by-side, modern value last).
- Keep `@theme inline` (required by Tailwind v4) but ensure each mapped variable resolves to a value any browser can parse.

Example shape (illustrative):

```text
--brand: #0B1E3F;                 /* fallback */
--brand: oklch(0.26 0.06 260);    /* modern */
--shadow-card: 0 4px 14px -6px rgba(11,30,63,0.20);
--shadow-card: 0 4px 14px -6px color-mix(in oklab, var(--brand) 20%, transparent);
```

### 4. Add a viewport sanity check
- Confirm `<meta name="viewport" content="width=device-width, initial-scale=1">` is present in `__root.tsx` (it is — verifying again so font sizes don't render at desktop scale on phones).
- Add `-webkit-text-size-adjust: 100%` to `body` to stop iOS Safari from auto-inflating text in some orientations.

### 5. Validate
- After publishing, open the published URL on:
  - Android Chrome (incognito)
  - iOS Safari (private tab)
- Confirm: navy header, amber "Call Now" button, footer in deep navy, hero gradient visible.

## What I will NOT change
- No content, copy, layout, routing, or component structure changes.
- No business logic.
- This is a CSS-loading / CSS-compatibility fix and a publishing step only.

## Technical notes
- Files touched: `src/styles.css` only (token fallbacks + `-webkit-text-size-adjust`).
- No new dependencies.
- Publishing is a single action and produces a stable URL you can give the client.

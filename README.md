# Resource Hub - Webflow Integration Guide (Webflow-ready)

- **Component:** SimplyPMG.pro Resource Hub
- **Version:** v1.2 (split / Webflow-ready build)
- **Owner:** Josh Epstein (PMG)
- **Status:** Ready for hand-off

---

## What's in this package

| File | Purpose | Goes where |
|---|---|---|
| `webflow-embed-snippet.html` | ~700-char snippet (markup + 2 tags) | Paste into a Webflow **Embed** element |
| `resource-hub.css` | All styles, scoped to the component | **Host it** (see Step 2) |
| `resource-hub.js` | Data + interaction logic | **Host it** (see Step 2) |
| `preview.html` | Local sanity check of the split | Open from this folder in any browser |
| `README.md` | This file | - |

---

## Why this build is split (read first)

The earlier single-file `embed.html` was **~52,000 characters**. Webflow's **Embed element caps at 10,000 characters**, and the page-level custom-code fields cap at ~20,000 - so the monolithic file could not be pasted in. It also used global selectors (`*`, `body`, `.hero`, `.logo`) that would have bled into the rest of the site.

This build fixes both:

- The big payload (data + logic + CSS) moves to **two hosted files** you reference by URL.
- The on-page snippet is tiny (~700 chars), so it drops into a Webflow Embed element with room to spare.
- **Every CSS rule is scoped under `#resource-hub-component`** - nothing leaks into the surrounding Webflow page.

---

## Step 1 - Sanity-check locally (2 min)

Open `preview.html` directly in a browser (double-click it). You should see the full Resource Hub render between grey "header/footer" stand-in bars, with working category tabs, sub-accordions, search, and deep links (`preview.html#documents/borrower-forms`). The stand-in bars confirm the component does **not** restyle the rest of the page.

---

## Step 2 - Host the two files

`resource-hub.css` and `resource-hub.js` need a public URL. Pick whichever fits your stack:

- **Option A - Your own web host / CDN.** Upload both files to any HTTPS location PMG controls (e.g. `assets.pmgloans.com/resource-hub/`). Cleanest for production.
- **Option B - GitHub + jsDelivr (free, fast).** Commit both files to a public repo; reference via `https://cdn.jsdelivr.net/gh/USER/REPO@main/resource-hub.js`. Good if there's no asset host handy.
- **Option C - Webflow Asset upload.** Newer Webflow sites allow `.js`/`.css` in the Asset Manager. If yours does, upload both and copy the asset URLs. (If Webflow rejects the file type, use Option A or B.)

> Note on caching: hosts/CDNs cache aggressively. When you update content later, either version the filename (`resource-hub.v2.js`) or purge the CDN cache so brokers see the change.

---

## Step 3 - Drop the snippet into Webflow

1. On the Resource Hub page, add an **Embed** element where the component should appear (inside your normal page layout, below the hero).
2. Paste the entire contents of `webflow-embed-snippet.html`.
3. Replace **both** `HOSTED_BASE_URL` placeholders with the folder URL from Step 2 (e.g. `https://cdn.jsdelivr.net/gh/USER/REPO@main`). Do not include the filename - the snippet already appends `/resource-hub.css` and `/resource-hub.js`.
4. Save, then **Publish** (the Embed renders blank in the Designer canvas - that's expected; it only runs on the published/preview site).

That's the whole drop-in. No CMS work required for this path.

---

## Updating content later (this path)

Content lives in the `DATA` array near the top of `resource-hub.js`. To add/edit/retire a resource, edit that array and re-upload the file (and bump the version / purge cache per the note above). If the marketing team needs to self-serve edits without touching code, move to the CMS path below.

---

## Optional - CMS-driven path (lets marketing edit in Webflow)

Replace the inline `DATA` array with Webflow CMS Collections, then render via a Collection List. More setup (~4-6 hrs) but no code edits for routine content changes. The same scoped CSS and the same interaction JS still apply - only the data source changes.

### Collection: `Resource Categories`
| Field | Type | Notes |
|-------|------|-------|
| Name | Plain Text | "EEP", "Documents", etc. |
| Slug | Slug | Used in deep links (`#eep`) |
| Icon | Plain Text | Emoji / icon character |
| Badge | Plain Text | Optional ("Signature") |
| Lede | Plain Text | 1-sentence description |
| Order | Number | Sort order (1-7) |

### Collection: `Resource Sub-Categories`
| Field | Type | Notes |
|-------|------|-------|
| Name | Plain Text | "Submission Forms" etc. |
| Slug | Slug | Used for deep links |
| Parent Category | Reference | -> Resource Categories |
| Order | Number | Within category |

### Collection: `Resources`
| Field | Type | Notes |
|-------|------|-------|
| Name | Plain Text | Display title (prefixes stripped) |
| Slug | Slug | |
| Doc Type | Option | Form / Matrix / Guide / How-To Guide / Reference / Policy / Checklist / FAQ / Document / Webpage |
| Status | Option | Available / Updating / Coming Soon |
| File | File Upload | Optional PDF/DOCX |
| External Link | Link | Use if hosted elsewhere |
| Monday ID | Plain Text | Traceability back to board |
| Sub-Category | Reference | Primary placement |
| Cross-Listed Sub-Categories | Multi-Reference | For items in multiple places (e.g. EEP Matrix) |
| Internal Notes | Plain Text | Editor-only, not rendered |

### Field-mapping from the Monday board
| Monday Column | Webflow Field | Transformation |
|---|---|---|
| `name` | Name | Strip `[Secondary-...]`, `(Publish Only)`, `[Compliance]`, `[Web]`, `[Link]` prefixes |
| `dropdown_mm2kyfse` (Doc Type) | Doc Type | Direct. Backfill blanks before import. |
| `color_mm2k710x` (Doc Lifecycle) | Status | Exists -> Available; Needs Update -> Updating; Create New -> Coming Soon |
| Item ID | Monday ID | Direct |
| (manual) | Sub-Category | Use `RH Sub-Category` column from `resource-hub-categorization-plan.xlsx` |

A pre-formatted CMS import CSV can be generated from the xlsx on request.

---

## Accessibility (WAI-ARIA Authoring Practices)

- Left rail: `role="tablist"` with `role="tab"` per category
- Right pane: `role="tabpanel"` per category
- Sub-accordions: `<button aria-expanded>` + `<div role="region">`
- Keyboard: Arrow Up/Down/Left/Right, Home, End, Enter, Space
- Visible focus rings on every interactive element
- Decorative icons `aria-hidden="true"`
- Status badges convey meaning via text label, not color alone

---

## Deep linking

- `/resource-hub#eep` -> opens EEP category
- `/resource-hub#documents/borrower-forms` -> opens Documents AND expands the Borrower Forms sub-accordion

Slugs come from the category/sub-category IDs in the data structure. Use these in AE-to-broker handoffs.

---

## Browser support

Chrome / Edge 90+ - Safari 14+ - Firefox 88+ - Mobile Safari iOS 14+ - Chrome Android. No transpilation, no build step. CSS is scoped with id-prefixed selectors (no native CSS nesting), so Safari 14 is supported.

---

## Mobile behavior (< 860px)

- Left rail collapses to a horizontal-scroll tab strip on top
- Sub-accordion content stacks to a single column
- Only one sub-accordion open at a time
- Resource list items wrap; CTA goes full-width below the metadata

---

## Status badge logic

| Doc Lifecycle (Monday) | Status (Site) | Visual | CTA |
|---|---|---|---|
| Exists | Available | Green pill | "Download" (active) |
| Needs Update | Updating | Amber pill | "Download" (active) |
| Create New | Coming Soon | Blue pill | "Preview" (muted, links to Monday) |
| (blank) | Available | Green pill | "Download" |

---

## Cross-listed items (v1.2)

**EEP Matrix** is the only cross-listed item. Appears in EEP / Documents and in Program Matrices / EEP. Both reference the same Monday item (`11801125396`). In the CMS path, handled via the `Cross-Listed Sub-Categories` multi-reference field.

---

## What's NOT in this build (out of scope for v1.2)

- AE Contact - moved to footer per Q9
- CalHFA external links - kept out per direction
- `[Web]`-prefixed Loan Product overviews - live on the Loan Products page
- Internal planning tasks

See `resource-hub-categorization-plan.xlsx` -> Excluded tab for the full list.

---

## Open items for the dev team

| # | Item | Owner | Notes |
|---|------|-------|-------|
| 1 | Choose hosting Option A / B / C (Step 2) | Web dev | A or B recommended for production |
| 2 | Decide drop-in vs. CMS path | Web dev | Drop-in ships today; CMS for marketing self-serve |
| 3 | Replace placeholder CTAs with real file URLs | Marketing / L&D | Every CTA currently points to the Monday item; swap for the actual PDF/DOCX URL |
| 4 | Backfill empty Doc Type values (17 items) | Content (Josh) | - |
| 5 | Re-activate deactivated Doc Types in Monday | Content (Josh) | Job Aid, How-To Guide, Overview, Video/Training |
| 6 | Configure per-page SEO meta tags | Web dev | Webflow page-level SEO settings |
| 7 | Add analytics events (category click, sub-accordion expand, resource click) | Web dev | `gtag('event', ...)` inside the existing handlers in resource-hub.js |
| 8 | Add structured data (Schema.org WebPage + ItemList) | Web dev | Helps SEO crawlers index the library |

---

## Versioning

- v1.0 - original launched SimplyPMG.pro site
- v1.1 - V3 Copy Deck incorporated
- v1.2 - Loan Products rebuild + new Resource Hub page (this work)

---

## Questions / changes

Ping Josh Epstein. Source-of-truth lives in the workspace folder; the Monday board and `resource-hub-demo-v12.html` are the two living references.

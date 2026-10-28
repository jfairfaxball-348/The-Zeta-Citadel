# The Zeta Citadel

An interactive, zoomable cartographic atlas of the Riemann Hypothesis and its mathematical surroundings.

## Session 001 · First playable atlas

- Eight clickable regions: Selberg class, Grand RH, GRH, ERH, zero-density theorems, critical-line theorems, zero-free regions and rigorous computation.
- Smooth click-to-focus zoom, wheel zoom, drag-to-pan, zoom buttons, reset, breadcrumbs and a guided journey.
- A second exploration depth in the courtyard, hall, keep and dungeons, with clickable map pins and source-backed narratives.
- Responsive navigation, keyboard-selectable map features, reduced-motion support and hash-linked deep links (for example `#hall-2026`).
- No API keys, runtime dependencies, analytics or server-side services.

## Deploy with Vercel

1. Import `jfairfaxball-348/The-Zeta-Citadel` from GitHub in Vercel.
2. Select **Other** / **No Framework** if asked; the project is plain static HTML, CSS and ES modules.
3. Leave **Build Command** empty and **Output Directory** as `.` (the repository root).
4. Click **Deploy**. `index.html` is the homepage and Vercel serves the sibling static assets.

## Run locally

Use an HTTP server (ES module imports do not reliably run from `file://`):

```sh
python3 -m http.server 8000
# Open http://localhost:8000
```

No npm install or build is required.

## File structure

| File | Purpose |
|---|---|
| `index.html` | The page, responsive shell and original SVG map artwork. |
| `styles.css` | Cartographic visual design, transitions and responsive layout. |
| `atlas.js` | All region definitions, mathematical copy, milestones, sources and subsite data. |
| `app.js` | Viewport animation, shared Hall/Courtyard interiors, browser-history navigation and story rendering. |
| `discovery.js` | S009 derived title/ID/author/subject search, original source/status labels, two authored learning routes and local-only preference presentation. |
| `locations.js` | Validated arbitrary-depth typed place graph, stable URLs, status and sources. |
| `hall.js` / `laboratory.js` | Great Hall floor plan and six labelled, interactive educational exhibits. |
| `courtyard.js` | S004 Courtyard floor plan, exponent comparison and sparse-versus-zero exhibit. |
| `keep.js` | S005 Keep floor plan, exact zero/pole coordinate chart and height-dependent published zero-free boundaries. |
| `dungeon.js` | S006 Dungeons floor plan, historical verified-height ledger, zero-count main-term estimate and certification-method exhibit. |
| `outer.js` | S007 source-cited Selberg, Grand RH, GRH and ERH horizons; four exact/illustrative interactive exhibits. |
| `connections.js` | S008 independently sourced, validated typed relationships and connections-map/evidence renderers. |
| `tests/connections.mjs` / `tests/browser-connections.mjs` | S008 edge schema negative cases and real HTTP Chromium desktop/mobile interactions. |
| `tests/graph.mjs` / `tests/browser.mjs` | Graph regression and HTTP Chromium desktop/mobile suite. |
| `favicon.svg` | Original project icon. |
| `vercel.json` | Static Vercel settings. |

## Extend the atlas

1. Update a region in `REGIONS` in `atlas.js` to change its description, status, milestones or sources.
2. Add an entry to `SUBNODES`, supply `parent`, map coordinates (`x`, `y`) and content, then add its key to the parent's `subnodes` array. The app automatically renders a clickable pin and a sidebar link.
3. To add a full new region, supply a geometric SVG shape with `data-region="id"` in `index.html` and a matching `REGIONS` entry. The navigation builds itself.
4. For deeper educational exhibits, add a typed entry in `locations.js` with `parent` and ordered `children`, named source references and an optional renderer/exhibit key. The existing place graph supports arbitrary depth and preserves browser hashes and Up/Back navigation.

## Editorial and mathematical safeguards

This is an **analogy**, not a formal lattice of implications. In particular, GRH and ERH usages vary, Grand RH has a specific automorphic interpretation here, and zero-free regions do not literally occupy the middle of the critical strip. The site distinguishes a proved finite-height calculation from a proof for infinitely many zeros.

The original 41% claim is superseded by 2026 **research preprints** reporting over 67.25% of nontrivial zeta zeros simple and on the line (Alpöge–Furman and Lamzouri). Some newer public refinements exist, but are not automatically promoted to established records here. The Platt–Trudgian 2021 computation reaches *height* 3×10¹², not merely *three trillion zeros*.

Source references belong in `atlas.js` and typed descendants in `locations.js`. Guth–Maynard's zero-density result is now published in the *Annals of Mathematics* (2026); the Courtyard comparisons are asymptotic leading powers, not computed zeros. Recheck sources and date status before declaring a new mathematical record. Nothing on this site claims a proof of RH.

## Scope

An educational explanatory atlas, not a zeta-zero computation engine, research-proof checker, or interactive complex-function plot. Those can be added as distinct, provenance-aware layers later.

## Licence

Apache-2.0 (see LICENSE).

## Authoritative S002–S010 roadmap and current status

The source of truth is [authoritative/STATE.json](authoritative/STATE.json), [authoritative/START_HERE.md](authoritative/START_HERE.md) and [docs/ROADMAP.md](docs/ROADMAP.md), under [AGENTS.md](AGENTS.md) and [docs/SESSION_PROTOCOL.md](docs/SESSION_PROTOCOL.md).

**S002–S008 have been implemented and checked on their implementation branches. S009 is prepared but unexecuted.** The one next authoritative prompt is [authoritative/NEXT_SESSION_PROMPT.md](authoritative/NEXT_SESSION_PROMPT.md). Every session requires a separate explicit owner invocation; committing a future prompt does not run it.

## Explore the completed interiors

The **Great Hall** contains five chambers and six interactive exhibits: critical-strip coordinates, zero/pole types, Hardy sign changes, historical proportions, toy mollifier and a 2026 research-preprint comparison. These figures are explicitly illustrative or source-labelled, not exhaustive zero computations.

The **Courtyard** has two research sites and two further exhibits. Visit `#density-guth` → `#density-exponent-exhibit` for sliders comparing asymptotic Guth–Maynard and classical exponents; visit `#density-idea` → `#density-definition-exhibit` for logical differences between sparse exceptional zeros, a zero-free theorem and RH. Neither graphic proves RH or computes zeta zeros. Back/Forward, Up, deep links, keyboard navigation and mobile touch reuse the shared recursive atlas.

S004 source and CI evidence are in [sessions/S004/VALIDATION.md](sessions/S004/VALIDATION.md) and [sessions/S004/CLOSEOUT.md](sessions/S004/CLOSEOUT.md). The subsequent **S008 — typed mathematical connections** has been implemented separately; see below.

## Explore the proved Keep

The Keep retains `#keep-boundary` and adds two published theorem sites, `#keep-classical` and `#keep-vk`. From the outer wall enter `#keep-geometry-exhibit` for an exact zero/pole taxonomy; `#keep-comparison-exhibit` and `#keep-vk-exhibit` let you change log₁₀|t| and compute the real-part thresholds of two Mossinghoff–Trudgian–Yang (2024) explicit, unconditional zero-free bounds. The controls work only on heights at least 10, a common domain of validity, and clearly show their full original |t|≥2 and |t|≥3 restrictions. The bars show theorem guarantees, never sampled zeta zeros. Neither estimate proves RH nor is it promoted as a 2026 record.

[S005 documented source audit and browser test evidence](sessions/S005/VALIDATION.md). S006 is separately delivered with source-audited arithmetic and its own regression record.

## Explore the Dungeons (S006)

The original `#dungeon` and `#dungeon-cert` links still work. The Dungeons now offer the source-cited **Verification Ledger** (`#dungeon-height-exhibit`), **Height–Count Compass** (`#dungeon-count-exhibit`) and **Certificate Procedure Table** (`#dungeon-certification-exhibit`). These are reached through the same recursive map, including keyboard, mobile, Back/Forward, Up and Home.

Platt–Trudgian's 2021 published rigorous verification covers nontrivial zeta zeros with positive imaginary part **up to height 3×10¹²**. It is a **height boundary, not a number of zeros**. The Riemann–von Mangoldt calculator intentionally displays a **noninteger asymptotic estimate**, not exact N(T), and the method room distinguishes candidate locations from rigorous interval arithmetic and completeness checks. The first three displayed ordinates are truncated historical reference values from Andrew Odlyzko's primary tables, not freshly certified calculations. Neither finite verification nor the site proves RH.

Sources: [Platt–Trudgian (2021)](https://doi.org/10.1112/blms.12460), [NIST DLMF §25.10](https://dlmf.nist.gov/25.10), [Riemann–von Mangoldt reference](https://mathworld.wolfram.com/Riemann-vonMangoldtFormula.html), [Odlyzko’s original table](https://www-users.cse.umn.edu/~odlyzko/zeta_tables/zeros2). [S006 validation and precise check evidence](sessions/S006/VALIDATION.md).

S007 was executed only on its separate owner instruction; S008 is likewise a separately authorised session.


## Explore the Outer Territories (S007)

The original outer rings are now true graph-linked destinations: `#selberg` → `#selberg-axioms` → `#selberg-axioms-exhibit`; `#grand` → `#grand-automorphic` → `#grand-automorphic-exhibit`; `#grh` → `#grh-characters` → `#grh-characters-exhibit`; and `#erh` → `#erh-gaussian` → `#erh-gaussian-exhibit`. All are accessible through the same map/interior, keyboard/touch controls, browser Back/Forward, Up and Home.

The Selberg selector explains all five **defining axioms** rather than pretending that classification is solved. The automorphic exhibit explains GL(1), GL(2), GL(n) as illustrative families and defines this atlas's **Grand RH** convention. The Dirichlet laboratory computes a finite series at s=2 for the nonprincipal modulo-four character with elementary absolute remainder bound ≤1/N—**not** a GRH test. The Gaussian field Q(i) selector illustrates exact splitting/ramification/inertness of selected rational primes and the matching Dedekind local Euler factors—**not** an ERH test. Here GRH means Dirichlet L-function GRH; ERH means Dedekind-zeta RH for every number field. No universal logical nesting follows from the rings. See [S007 validation](sessions/S007/VALIDATION.md) for evidence and limitations.

## Explore the Connections Map (S008)

Open **⌁ BRIDGES** at the map top or the side navigation, or visit `#connections`. The eight sourced relationships can be filtered by **proved implication**, **conditional dependency**, **historical influence** and **conceptual analogy** (two examples of each). Each bridge is directly linkable as `#connection--dirichlet-grh-rh` or its stable connection ID; selecting one shows explicit direction, exact scope, editorial status, review date and original source documents. Each endpoint opens its pre-existing room using the same URL/history router.

The two proved **implications between mathematical statements** have conjectural *premises*: (i) universal Dirichlet GRH entails ordinary RH, since the principal character modulo 1 gives ζ; (ii) the defined universal Dedekind-zeta ERH entails RH, since ζ_Q=ζ. **Neither premise is proved.** Conditional connections explain what RH would force in zero-free and zero-density views. The other connections are historical or analogous and carry no implied proof arrows. All are reviewed as mathematical exposition, not independent research discoveries or new zero calculations.

[S008 validation](sessions/S008/VALIDATION.md) records the source audit, test cases, CI evidence and limitations. S009 search and learning journeys have since been executed. Only **S010 — first-release consolidation and research audit** is now installed, READY / UNEXECUTED, requiring a separate future owner invocation.

## Search, save and learn (S009)

Choose **⌕ SEARCH** at the top of the map, **SEARCH & LEARN** in the guide, or open the stable `#discover` deep link. The index is derived automatically from the canonical locations and S008 audited bridges rather than copying their mathematics into a second unsynchronised table. Search for a theorem, mathematician or source author, subject term, original place ID (e.g. `hall-critical`) or complete bridge ID (e.g. `connection--dirichlet-grh-rh`). Matches are ranked by exact title/ID then relevant metadata, and every card retains its recorded editorial status and cited-source count. Search stays in the browser.

Two optional guided reading paths are directly linkable: **beginner** `#journey--beginner` (six stops: the Hall, critical line, types of zeros, finite verification, density and a conceptual connection) and **advanced** `#journey--advanced` (seven stops: Dirichlet and Dedekind examples, Euler-factor analogy, published density estimates and a conditional conclusion). Each stop opens an existing sourced room or bridge in the shared router, with a path back to the trail. **Visited** means viewed, not mathematically verified.

Every room/bridge also offers **COPY DEEP LINK** and **SAVE PLACE**. Saved places and journey checkmarks are initially **session-only**. To retain them across page reloads on the current device, explicitly check **Remember my saved places and journey progress on this device** in Discovery; this uses `localStorage` only, with a visible session-only fallback if storage is unavailable. Disable retention from the same control. There is **no account, cookie, remote search API or tracking**, and neither browsing nor a schematic map implies proof of RH. Old eight region IDs and prior hashes still work.

[S009 detailed validation](sessions/S009/VALIDATION.md) documents the exact successful GitHub-hosted real HTTP Chromium desktop/touch-mobile run at implementation SHA `cff8bd9086d1a43ef9510d13b1962aa6c5182c7c` and remaining audit gaps. [S009 closeout](sessions/S009/CLOSEOUT.md) records the downstream PR/production verification boundary. S010 is the separate **source, accessibility, performance and release consolidation** stage — it is prepared, not run.

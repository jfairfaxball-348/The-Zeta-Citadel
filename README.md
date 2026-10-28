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
| `locations.js` | Validated arbitrary-depth typed place graph, stable URLs, status and sources. |
| `hall.js` / `laboratory.js` | Great Hall floor plan and six labelled, interactive educational exhibits. |
| `courtyard.js` | S004 Courtyard floor plan, exponent comparison and sparse-versus-zero exhibit. |
| `keep.js` | S005 Keep floor plan, exact zero/pole coordinate chart and height-dependent published zero-free boundaries. |
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

**S002–S005 are completed. S006 is prepared but unexecuted.** The one next authoritative prompt is [authoritative/NEXT_SESSION_PROMPT.md](authoritative/NEXT_SESSION_PROMPT.md). Every session requires a separate explicit owner invocation; committing a future prompt does not run it.

## Explore the completed interiors

The **Great Hall** contains five chambers and six interactive exhibits: critical-strip coordinates, zero/pole types, Hardy sign changes, historical proportions, toy mollifier and a 2026 research-preprint comparison. These figures are explicitly illustrative or source-labelled, not exhaustive zero computations.

The **Courtyard** has two research sites and two further exhibits. Visit `#density-guth` → `#density-exponent-exhibit` for sliders comparing asymptotic Guth–Maynard and classical exponents; visit `#density-idea` → `#density-definition-exhibit` for logical differences between sparse exceptional zeros, a zero-free theorem and RH. Neither graphic proves RH or computes zeta zeros. Back/Forward, Up, deep links, keyboard navigation and mobile touch reuse the shared recursive atlas.

S004 source and CI evidence are in [sessions/S004/VALIDATION.md](sessions/S004/VALIDATION.md) and [sessions/S004/CLOSEOUT.md](sessions/S004/CLOSEOUT.md). The next distinct phase, **S006 — Dungeons numerical verification and certificates**, awaits fresh owner authorisation.

## Explore the proved Keep

The Keep retains `#keep-boundary` and adds two published theorem sites, `#keep-classical` and `#keep-vk`. From the outer wall enter `#keep-geometry-exhibit` for an exact zero/pole taxonomy; `#keep-comparison-exhibit` and `#keep-vk-exhibit` let you change log₁₀|t| and compute the real-part thresholds of two Mossinghoff–Trudgian–Yang (2024) explicit, unconditional zero-free bounds. The controls work only on heights at least 10, a common domain of validity, and clearly show their full original |t|≥2 and |t|≥3 restrictions. The bars show theorem guarantees, never sampled zeta zeros. Neither estimate proves RH nor is it promoted as a 2026 record.

[S005 documented source audit and browser test evidence](sessions/S005/VALIDATION.md). Future S006 is not executed by this release.

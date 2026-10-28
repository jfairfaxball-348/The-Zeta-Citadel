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
| `app.js` | Viewport animation, navigation, interaction and story rendering. |
| `favicon.svg` | Original project icon. |
| `vercel.json` | Static Vercel settings. |

## Extend the atlas

1. Update a region in `REGIONS` in `atlas.js` to change its description, status, milestones or sources.
2. Add an entry to `SUBNODES`, supply `parent`, map coordinates (`x`, `y`) and content, then add its key to the parent's `subnodes` array. The app automatically renders a clickable pin and a sidebar link.
3. To add a full new region, supply a geometric SVG shape with `data-region="id"` in `index.html` and a matching `REGIONS` entry. The navigation builds itself.
4. For future third-/fourth-level detail, generalize `parent` into an arbitrary parent chain; the current code supports **two geographic detail levels** (regions and subsites) plus the atlas overview.

## Editorial and mathematical safeguards

This is an **analogy**, not a formal lattice of implications. In particular, GRH and ERH usages vary, Grand RH has a specific automorphic interpretation here, and zero-free regions do not literally occupy the middle of the critical strip. The site distinguishes a proved finite-height calculation from a proof for infinitely many zeros.

The original 41% claim is superseded by 2026 **research preprints** reporting over 67.25% of nontrivial zeta zeros simple and on the line (Alpöge–Furman and Lamzouri). Some newer public refinements exist, but are not automatically promoted to established records here. The Platt–Trudgian 2021 computation reaches *height* 3×10¹², not merely *three trillion zeros*.

Main source references are attached to each region in `atlas.js`. Recheck sources and date status before declaring a new mathematical record. Nothing on this site claims a proof of RH.

## Scope

An educational explanatory atlas, not a zeta-zero computation engine, research-proof checker, or interactive complex-function plot. Those can be added as distinct, provenance-aware layers later.

## Licence

Apache-2.0 (see LICENSE).

## Authoritative S002–S010 roadmap

The expandable-world development plan is [docs/ROADMAP.md](docs/ROADMAP.md). Start from [authoritative/START_HERE.md](authoritative/START_HERE.md), follow [AGENTS.md](AGENTS.md) and [docs/SESSION_PROTOCOL.md](docs/SESSION_PROTOCOL.md), and consult [authoritative/STATE.json](authoritative/STATE.json). The **single next ready (unexecuted)** prompt is [authoritative/NEXT_SESSION_PROMPT.md](authoritative/NEXT_SESSION_PROMPT.md). S001's retrospective checkpoint is in [sessions/S001/CLOSEOUT.md](sessions/S001/CLOSEOUT.md).

Installing the roadmap and prompt does not execute S002. Each numbered session requires a separate explicit owner invocation.

## Session 002 · Enter the Great Hall

The map now supports a stable arbitrary-depth location graph (`locations.js`) and browser history. Select **The Great Hall** to enter the architectural floor plan, then a chamber, then the **Critical Strip Coordinate Explorer** from the Critical Line Observatory. The explorer is a **schematic coordinate lesson**, not a zeta calculator or a list of verified zeros. Select **Up** or breadcrumbs to retrace the path, and use browser Back/Forward or a deep link such as `#critical-line-exhibit`.

Run `node tests/graph.mjs` to validate recursive IDs. The S002 GitHub Actions workflow also performs syntax checks and real HTTP Chromium desktop/mobile smoke tests using test-only Playwright. The deployed site remains a no-build static project; no client package installation is required.

S002 implementation evidence is in [sessions/S002/VALIDATION.md](sessions/S002/VALIDATION.md) and [sessions/S002/CLOSEOUT.md](sessions/S002/CLOSEOUT.md). The next separately authorised milestone is **S003**; the canonical prepared prompt remains [authoritative/NEXT_SESSION_PROMPT.md](authoritative/NEXT_SESSION_PROMPT.md).

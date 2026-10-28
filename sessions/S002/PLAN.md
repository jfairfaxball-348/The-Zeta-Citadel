# S002 — plan and bounded implementation

**Date:** 2026-10-28. **Invoked by owner:** "run next session".  
**Pinned pre-session `main`:** `eacd289ecc7e7a83c3d34c0b2630c6f9b9e8ab31` (ordinary two-parent governance PR merge).  
**Branch:** `session/S002-great-hall`.

## Objective
Deliver the first meaningful recursive world → Great Hall → chamber → interactive exhibit path, without losing the S001 atlas (all eight world regions, existing region/subnode IDs, zoom/pan controls, old hash links, and the no-build Vercel static stack).

## Changes
1. New `locations.js`: typed, arbitrary-depth, source-bearing graph with stable parent/ordered-children IDs, geometry/bounds, cycle and referential integrity validation. Legacy `atlas.js` data is adapted rather than rewritten.
2. New `hall.js`: visual Hall floor plan with five separately navigable historical/research/teaching chambers; nested critical-line exhibit.
3. `app.js`: URL history entries, true recursive breadcrumbs and Up, direct hash reload including old S001 IDs, safe invalid routes, map/floor-plan mode switch, keyboard-accessible native inputs.
4. `styles.css`: architectural plan, responsive controls, coordinate graphic, visible focus, reduced motion; preserve existing world map.
5. `tests/graph.mjs`, `tests/browser.mjs` and CI workflow: graph assertions and HTTP/Chromium desktop/mobile interaction regression.

## Mathematical editorial boundary
Schematic point `s=σ+it` is never a computed zero. The plot describes the strip `0<σ<1` and RH's conjectural midline, cites NIST DLMF §25.10, and disclaims finite verification. Existing Hardy/Levinson/2026 descriptions retain historical/preprint status; no new unsourced record or proof assertion. Room positions are metaphor only.

## Acceptance/stop
All seven mandatory gates in `authoritative/NEXT_SESSION_PROMPT.md` must pass. Run syntax/graph checks plus real HTTP headless tests with keyboard, mobile touch, reload, browser Back/Forward, legacy links, reduced motion and page exceptions; review PR and use ordinary non-force two-parent merge only after acceptance. If checks fail or are inaccessible, record BLOCKED and do not promote S003.

## Rollback
Do not force or overwrite production history. Revert the ordinary S002 merge if a later regression is found; the S001 map data and static architecture remain in source.

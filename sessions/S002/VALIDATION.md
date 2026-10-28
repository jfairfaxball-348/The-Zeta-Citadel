# S002 — validation and observed evidence

**Date:** 2026-10-28. **Tested code head:** `a23a2d07b2c94a750cc36dd9ef7ca70ec73ef160` on `session/S002-great-hall`.  
**Automated PR run:** [GitHub Actions #40717477709](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40717477709) — **completed SUCCESS**, job `122918980229`.

## Actual test evidence
- On Ubuntu 24.04 with Node 22, `node --check atlas.js locations.js hall.js app.js` — PASS.
- `node tests/graph.mjs` — PASS: eight regions, legacy locations, parent graph, stable IDs, complete route to `critical-line-exhibit`, source fields and explicit no-fake-zero caveat.
- `npm install --no-save playwright@1.56.1` and Chromium installation — PASS (test-only; no client dependency added).
- `node tests/browser.mjs` — PASS under HTTP server `python3 -m http.server 8765`, Chromium headless: eight outer nav regions; world → Hall → chamber → exhibit; five room controls; native slider keyboard input; point labelled off/on critical line and NOT a verified zero; browser Back/Forward; exhibit reload; Up/Home controls; original `#hall-hardy` and `#density-guth` URLs; invalid percent-encoded hash fallback; 390px touch viewport, no document horizontal overflow; reduced-motion setting; no uncaught `pageerror` exceptions. Desktop test used 1440×900 viewport.
- Primary mathematical source check: NIST DLMF §25.10 confirms the strip and critical line; arXiv 2608.13637 and 2609.02882 are explicitly designated 2026 *research preprints*. The demo plots no claimed computed or certified zero. Room architecture explicitly identified as metaphor.

## Failed earlier attempt and recovery
First S002 pushes on `72de64d9` failed the **browser installation only** because GitHub defaulted to Ubuntu 26.04, unsupported by the pinned Playwright 1.56.1. JS syntax and graph tests had passed. Runner changed to pinned `ubuntu-24.04` in commit `a23a2d07b2c94a750cc36dd9ef7ca70ec73ef160`; the subsequent pull-request job passed in full. The earlier failed run is not described as green.

## Honest limits
- Browser checks executed in remote GitHub Actions, **not** in this assistant's container (network unavailable for local Git clone). The GitHub runner did serve the repo locally over HTTP.
- No dedicated pixel-by-pixel human screenshot review, full assistive-technology audit, automated CSS contrast audit, or real physical-phone test was performed. Headless page-error inspection is not equivalent to checking every network/console warning.
- This report applies to the tested PR head above; if more commits are made (including governance closeout), rerun CI before merge.
- Production Vercel redeployment is not established by CI. Verify it separately after merge if access permits.

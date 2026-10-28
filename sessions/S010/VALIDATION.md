# S010 — Validation record (28 October 2026)

## Actual baseline/reconciliation
- Owner invocation: “Run next session” on 2026-10-28; **S010 only**. Pinned main SHA `a6aef02de6ab7488f96d126690441d56627a1d76`, tree `4e08d468b13f3da715ceea1210f96c41a22ff915`; S009 PR #9 merged with exactly two parents `6b547330c5eb330296da1c5b976d4205a28c2b51` and `f2b0f4c00a20a9071474b7211f6de793511a03f8`.
- On main S002–S009 push checks all completed success: 40738624360, 40738624413, 40738624455, 40738624382, 40738624515, 40738624376, 40738624362, 40738624428.
- Entry Vercel production: `dpl_76qwA8PBYuwbTEVVvfxszf4vvpbn` READY, target production, exact entry S009 main SHA. **This is predecessor deployment evidence, NOT S010 production evidence.**

## Actually executed test evidence (not inferred)
- [S010 first complete branch test 40749958056](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40749958056) at `3b8c6742a0f31a1acacb34e04c3a9a5d62cff8b1`: **completed success**.
- Subsequent test at `d0fd5f31ab79fd9e8457bd7e5bdb1080cb8304c0`, [40750415807](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40750415807): **completed success** after source fixes and release documentation. Additional governance documentation-head commits re-trigger CI and are not deemed passed until their exact runs finish green.
- CI platform: GitHub Actions ubuntu-24.04, Node 22, Python HTTP server and Playwright 1.56.1 Chromium downloaded with system dependencies. Commands in `.github/workflows/s010.yml`:
  ```sh
  for file in *.js tests/*.mjs; do node --check "$file"; done
  node -e "JSON.parse(require('fs').readFileSync('authoritative/STATE.json','utf8'))"
  node tests/graph.mjs
  node tests/connections.mjs
  node tests/discovery.mjs
  node tests/release-audit.mjs
  node tests/browser.mjs
  node tests/browser-connections.mjs
  node tests/browser-discovery.mjs
  node tests/browser-release.mjs
  ```
- S010 pure test requires eight immutable roots, all reciprocal linked locations and bridge endpoints, search/journey route coverage, valid HTTPS source IDs, no unknown type, and explicit malformed fixture rejection for orphaned children, broken parents, duplicates, cycles, insecure links, invalid edge source and missing journey destinations.
- New real HTTP browser matrix: Chromium desktop 1440×900, tablet 820×1180, simulated mobile 390×844 with touch and reduced motion. Tests search, keyboard Escape, full advanced journey presence (7 stops), evidence link HTTPS and rel safety, canonical location/bridge/route changes, Back/Forward, Up/Home, reload, invalid hashes, no document horizontal overflow, no page/console errors and DOM-size instrumentation. Prior S002–S009 browser suites cover both guided trails, local saved progress/opt-in/denied-storage fallback, copy, filters, keyboard and mobile interactions.

## Mathematical source checks and verified corrections
- [Complete source register](../../docs/MATHEMATICAL_SOURCE_AUDIT.md) identifies the actually examined publisher/author material: DLMF 25.10 and 25.15, Guth–Maynard 2026 Annals published theorem, MTY published 2024 two exact zero-free inequalities, Platt–Trudgian 2021 finite *height*, Riemann–von Mangoldt count *main term*, arXiv 2026 explicitly research preprints, scholarly Selberg and automorphic literature, linked Conrey/historical and Dedekind sources.
- The original AIM PDF link in all four outer world region records produced a direct 404 during audit. Replaced with specific scholar/publisher references in `atlas.js` and retained the **explicit local conventions** for Grand/GRH/ERH. Source status is not automatically upgraded by replacement.
- All eight connection semantics were editorially reviewed as two deductions from *conjectural* premises, two genuinely conditional RH consequences, two historical directions and two undirected analogies; two S009 paths repeat existing sourced node/edge claims.
- Source audit was **bounded, not all-pages proof checking or an exhaustive HTTP link crawl**. Known source-access and re-read limits are recorded rather than green-labelled.

## What CI does NOT validate
- No physical Android/iOS/tablet hardware run, Safari, Firefox, human screen-reader test, complete colour contrast/visual assessment, or Lighthouse independent performance audit.
- Browser-reported DOM count and DOMContentLoaded times are observations in CI, not stable latency guarantees; no live-site RUM or user telemetry was added.
- No formal mathematical proof or independent certified new zeros, exact N(T), or global RH conclusion.
- No assertion that every paragraph in every linked 400+ page PDF was individually reviewed.
- A GitHub Action on a *PR* does not itself prove a production deployment; compare exact Git SHA, production target and READY from the Vercel project independently.

## Acceptance gate and evidence boundary
A branch implementation check has passed. For S010 release approval require **the final documentation-head** S002–S010 PR workflows to report all completed success, reviewed diff, ordinary non-force two-parent merge and new merged-main statuses; only claim S010 production READY if the actual deployed SHA matches the new main. Any failed mandatory test is a blocker; don't publish as accepted on inference.

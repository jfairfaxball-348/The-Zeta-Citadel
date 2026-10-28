# S009 — Validation record (28 October 2026)

## Pinned entry and evidence boundary
- Live entry `main`: `6b547330c5eb330296da1c5b976d4205a28c2b51`, tree `5cca3d60795c284b92daa3167600cffcf9d6a1da`, ordinary two-parent merge of S008 PR #8. All seven S002–S008 merged-main push workflows concluded success.
- Vercel production at entry: `dpl_9kZj4iUYi4B2WnNkqNRPJ2uqYmUH`, READY, GitHub commit exactly `6b547330c5eb330296da1c5b976d4205a28c2b51`.
- Implementation tested: `cff8bd9086d1a43ef9510d13b1962aa6c5182c7c` on `session/S009-discovery-journeys`; [GitHub Actions S009 run 40737691789](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40737691789) **completed success** (2026-10-28). Earlier failures, listed below, were fixed rather than treated as passes.
- Premerge authoring boundary: final documentation-head PR CI, all PR workflows, merge, merged-main CI and S009 production deployment must be independently observed after this record is committed; they are **not** asserted here.

## Checks actually run
The S009 run used Ubuntu 24.04, Node 22, a real Python HTTP server and Playwright Chromium 1.56.1 (browser downloaded with `npx playwright install --with-deps chromium`).
1. `for file in *.js tests/*.mjs; do node --check "$file"; done` — passed.
2. `node tests/graph.mjs`, `node tests/connections.mjs`, `node tests/discovery.mjs` — passed. This includes existing graph/source/unit/schema checks, S008 eight relationship graph, S009 source/ID-derived ranking, case/diacritic normalisation, HTML escape negative, empty/oversize input, all journey destinations, duplicate/missing endpoint negatives.
3. `node -e "JSON.parse(require('fs').readFileSync('authoritative/STATE.json','utf8'))"` — passed on tested implementation (final state update subject to final-head rerun).
4. `node tests/browser.mjs`, `node tests/browser-connections.mjs` — both passed on tested implementation, checking legacy S002–S008 deep links/navigation, desktop/touch mobile, bridge filters, primary evidence labels, Keyboard/Back/Forward/reload/Up/Home/Escape/reduced motion and console.
5. `node tests/browser-discovery.mjs` — passed over HTTP on desktop and mobile. Covered eight original region controls, search result navigation, copy to clipboard, session bookmark, explicit local-persistence opt-in and reload, clearing/empty results, both separate learning journeys, visited checkmarks, direct hash/reload/back/forward, invalid-hash recovery, touch, keyboard Escape, reduced motion, no horizontal overflow, storage-disabled memory fallback, browser page errors and console errors.

## Failures resolved during implementation
- Initial test assumed Hardy Gallery always first: Hardy’s Sign-Change Window ranked higher. Corrected to check inclusion, not fabricated order.
- Search indexing of `connection--...` deep-link ID initially used bare edge ID. Corrected the derived index to store full stable route.
- S008 browser test used a class selector that became ambiguous when new header search button reused it. Restored exclusive S008 selector.
- A browser test expected saved places to persist on reload without storage opt-in. Changed test to opt in explicitly first; app remains session-only by default.
- Same-document navigation into an invalid hash produced a timing race in the test. Wait for router to clear it before assertion.
- Storage-disabled fallback correctly unchecks the opt-in checkbox; `locator.check()` kept retrying. Switched to `click()` to inspect the expected fallback, which passed in final tested run.

## Mathematical and privacy review
Search results are built directly from established `LOCATIONS` and eight `CONNECTIONS` with exact stored status and cited-source count. The two authored trails only select existing, previously cited endpoints. No new zero claims, independent computations, theorem equivalences, proof implications, analytics endpoints, accounts or paid services were introduced. The trail marks a visit, **not** mathematical certification. The proof/conditional/history/analogy distinction remains explicit.

## Limitations
- This run is headless Chromium on GitHub-hosted Ubuntu, not human visual QA across physical tablets, Safari or Firefox.
- Source status is inherited from the S002–S008 provenance corpus; S010 is tasked with a comprehensive link/status review.
- Clipboard permission was enabled for the browser test; visitors receive a fallback or visible failure if permission is denied.
- Private/device localStorage can be unavailable, in which case saved state lasts only for the current browser page visit.
- CI does not by itself verify a production domain or the final post-merge commit. Confirm those LIVE.

# S009 — Search, orientation and learning journeys / PLAN

**Owner invocation:** 2026-10-28 “run next sessoin”, authorising S009 only.  
**Pinned entry main:** `6b547330c5eb330296da1c5b976d4205a28c2b51`; tree `5cca3d60795c284b92daa3167600cffcf9d6a1da`. Two-parent S008 PR #8 merge: parents `e4fb51f6caafa26748f2a9b321adbae6f62e33fb`, `1c0692ad312e7271338b79238c93205cc6aa60b5`. On merged main, seven S002–S008 push workflows completed successfully (run IDs 40734020662, 40734021446, 40734019237, 40734019338, 40734021527, 40734021362, 40734021297). No competing S009 branch observed at entry.
**Branch:** `session/S009-discovery-journeys`.

## Scope and architecture
- Add a dependency-free, purely client-side discovery module consuming the existing canonical `LOCATIONS`, `CONNECTIONS`, and type schema. Search derives results rather than maintaining a second catalogue; normalise accents, case and Unicode; filter on all query tokens; score IDs/titles before sourced descriptions and metadata; show explicit statuses.
- Add distinct routes `#discover`, `#journey--beginner` and `#journey--advanced` to the existing single history router; leave all original hashes intact.
- Deliver two curated, distinct pathways through existing, source-labelled exhibits and an S008 typed relationship; include full narrative guidance, step recovery, keyboard support, and a way home.
- Offer per-visit bookmarks and progress. Persist only on user choice via localStorage; gracefully fall back to session memory if storage denied; no account, cookies, analytics, or telemetry.
- Add copy-current-link and per-result link buttons. HTML-escape all authored/dynamic text; do not imply finite evidence proves RH or drawn rings entail logical implication.

## Checks and acceptance
- Pure index/ranking/schema/negative input tests; all prior regression scripts; real HTTP Playwright desktop/touch mobile search and journeys, Back/Forward/reload/up/home, Escape, clipboard and storage-failure paths, overflow, reduced motion, no page errors.
- `node --check` all JS; JSON parse; no dependency/runtime model migration. Gate on green existing S002–S008 and S009 final PR-head CI before ordinary two-parent merge, then independently inspect merged main and postmerge checks.
- If CI or browser checks fail, fix on this branch and re-run. If unsupported mathematics or blocking regressions remain, STOP BLOCKED; do not merge or promote S010. No S010 execution, outreach or publication.

## Rollback
Revert the S009 PR merge if needed; old assets and IDs remain unaltered. No destructive migrations or remote state.

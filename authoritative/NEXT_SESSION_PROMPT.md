# S002 — Recursive atlas navigation and the Great Hall (READY, UNEXECUTED)

**Owner-authorization boundary:** This file installs a future prompt only. Merely committing or reading it **DOES NOT EXECUTE S002**. A fresh explicit owner invocation is required. Execute S002 only, then stop. Do not execute S003–S010 or treat planned roadmap milestones as separately authorised.

## Repository, entry and authority
Repository: https://github.com/jfairfaxball-348/The-Zeta-Citadel  
Live website (owner confirmed): https://the-zeta-citadel.vercel.app/  
Predecessor S001 application commit: `577c5d1a92187cbd0d8db89a2160317706a3eec7`; the subsequent governance/roadmap bootstrap is additive. **Never assume historical commit is current HEAD.**

At invocation:
1. Pin **live remote `main`** SHA and reconcile changes from S001. Verify remote branch, absence of another active session, and that S002 is uniquely marked `READY_UNEXECUTED`.
2. Read `authoritative/STATE.json`, `AGENTS.md`, `authoritative/START_HERE.md`, `docs/SESSION_PROTOCOL.md`, `docs/ROADMAP.md`, `sessions/S001/CLOSEOUT.md`, and this prompt.
3. Inspect `index.html`, `styles.css`, `atlas.js`, `app.js`, `vercel.json` and source references applicable to the exhibit. The current model is REGIONS + SUBNODES with only two geographic detail levels.
4. Work on a dedicated `session/S002-great-hall` branch. No unapproved rewrites or S003 work.

## Singular objective and definition of success
Convert the S001 two-level atlas into a **data-driven recursively navigable map**, demonstrated by one complete vertical slice: **world → Great Hall → chamber → educational mathematical exhibit**. Preserve the outer world. This is a *product engineering and exposition* session, not new mathematical research.

## Authorized tasks
**A. Location graph:** introduce a stable arbitrary-depth representation (node ID, parent, ordered children, semantic type, location geometry/viewport bounds, editorial copy/status, sources, optional exhibit). Preserve existing region/subnode IDs and hash URL compatibility, or provide a fully tested redirect/migration. Keep content and renderer separate. Add checks for unique IDs, missing parent/child IDs and parent cycles.

**B. Camera and navigation:** implement smooth zoom/focus from parent to child with controls for Up, breadcrumbs, world reset, click-to-enter, browser Back/Forward, and deep-link reload directly into nested locations. Respect prefers-reduced-motion, handle invalid/unknown deep links gracefully, and avoid scroll hijacking or pointer-only controls.

**C. Draw one genuine building:** design a styled, readable Great Hall architectural interior rather than another pop-up card. Provide separately labelled/navigable chambers: Hardy's Gallery, Levinson's Workshop, Mollifier Laboratory, a contemporary critical-line research chamber (source status clearly labelled), and the Critical Line exhibit. Their relative positions are artistic, not statements of logical implication. Reuse existing visual identity; no unlicensed external art.

**D. First actual interactive exhibit:** a critical-strip and critical-line coordinate explorer, correctly identifying Re(s)=1/2 and the nontrivial zero region, with explanatory controls or selectable sample points. If real zero coordinates are used, provide verifiable provenance, precision/range notes and labelled computation status; otherwise use a labelled schematic. Visibly distinguish "a point on the line" from "a verified zero." Explain why sampling or finitely many verified zeros cannot prove RH. No fake rigorous solver.

**E. Editorial quality:** Great Hall copy must explain Hardy, Levinson, mollifiers and modern 2026 results with proper theorem/preprint status. Check reliable primary sources before adding any new numerical claims, or defer an unverified claim. Treat 2026 findings as research claims unless status is independently checked.

## Mandatory acceptance gates (all must pass, or close BLOCKED)
1. The existing eight-region world map, basic zoom/pan, top-level navigation, and original hash deep links still function.
2. A user can enter the Great Hall floor plan, select a chamber, open an interactive exhibit, go back/up to any ancestor and return home; there is **at least one deeper level than S001**.
3. Hash routing, reload, browser Back and Forward do not lose context; invalid routes fail safely.
4. Keyboard operation, visual focus, touch/mobile sizing, and reduced-motion navigation are checked and usable; no critical controls are unreachable.
5. The displayed mathematics is accurate within its stated scope: clear distinction between schematic demonstration, samples and actual theorem, no suggestion RH is proved.
6. Serve locally over HTTP and run available syntax/JSON/schema tests. Test representative desktop and mobile views and inspect console; document actual outcomes. Do not invent test evidence.
7. No new dependency or backend unless a recorded necessity outweighs keeping the working no-build Vercel static setup.

## Out of scope / prohibitions
Do not execute S003 or build its complete critical-line lab; do not deliver full Courtyard/Keep/Dungeons/Outer-Territories interiors, S008 graph, S009 journeys or S010 audit. No publication, registry or journal submission, author outreach, claims of a new RH proof, invented source citations, paid service configuration or production secrets. Preserve existing Vercel setup and user-confirmed live URL; do not claim redeployment succeeded until verified.

## Required work product and closeout
- Produce `sessions/S002/PLAN.md` (pinned baseline and bounded implementation plan), `sessions/S002/VALIDATION.md` (commands/tests, outputs, responsive/accessibility and mathematical review, blockers, untested items) and `sessions/S002/CLOSEOUT.md` (delivered work, actual evidence, regression status and handoff).
- Update `authoritative/STATE.json` and `authoritative/START_HERE.md` coherently. **Only on an accepted S002 gate**, replace `authoritative/NEXT_SESSION_PROMPT.md` with a single ready-but-unexecuted S003 prompt governed by `docs/ROADMAP.md`. If blocked, leave S003 unpromoted and record exact recovery conditions.
- Commit bounded changes on the dedicated S002 branch, open an ordinary PR, validate, merge non-force with two parents when acceptance passes, independently fetch merged `main` and verify the expected files, exact SHAs/parents when available. If a final merge SHA is known only post-merge, report it in the final response, not as a fabricated pre-merge value.
- Give the owner an exact checkpoint, PR/merge link, tests and limitations. End S002. Do not start S003.

**Session activation text (owner only):** “Run S002 in The-Zeta-Citadel from the committed authoritative prompt.”

# The Zeta Citadel — repository instructions

## Mission
Build an accessible, expandable cartographic atlas through which a visitor can navigate from the wider Riemann Hypothesis landscape to individual theorems, mathematical objects, and verifiable interactive demonstrations. S001 is a working static map; S002–S010 develop its depth. The spatial analogy is an educational metaphor, not a proof-implication lattice.

## Authority and session ownership
1. Pin and reconcile the **live remote `main` commit** before doing anything. Repository content, not chat transcripts or a prior prompt, is authoritative.
2. Read `authoritative/STATE.json`, this file, `authoritative/START_HERE.md`, `docs/SESSION_PROTOCOL.md`, `docs/ROADMAP.md`, and `authoritative/NEXT_SESSION_PROMPT.md`, in that order. Read the previous closeout and relevant code.
3. One **separate, explicit owner invocation** authorises one numbered session only. A committed future prompt is **READY / UNEXECUTED**, not authorisation. Never execute S003 during S002, or launch any successor automatically.
4. Work to one bounded session goal, with documented deliverables, checks, blockers, and a stopping condition. No silent renumbering, scope promotion, or treating an unsuccessful check as passed.
5. For successful delivery use a dedicated session branch, reviewed ordinary pull request and **non-force, two-parent merge** into `main`; independently inspect merged `main`. Do not force-push, rewrite history, or delete branches without owner instruction.
6. On completion write `sessions/S###/PLAN.md`, `VALIDATION.md`, and `CLOSEOUT.md`; update `STATE.json`, `START_HERE.md` and the single canonical `NEXT_SESSION_PROMPT.md`. An outgoing prompt is installed but **never executed in its installation session**. If blocked, report the blocker and leave the next prompt unpromoted.
7. Do not claim a check, deployment, source verification, mathematical theorem, performance figure, or GitHub result without actual evidence. Report exact tested refs and statuses in the closeout/final report.

## Product architecture
- Existing production stack: plain `index.html` + `styles.css` + `atlas.js` + `app.js`, static hosting in Vercel. Prefer an incremental dependency-free implementation unless a specific session demonstrates otherwise.
- Keep authored mathematics and source citations separate from the SVG renderer; use stable IDs and parent/child references. The next level must be *data-driven*, not many hardcoded screens.
- Preserve the S001 map, all eight regions, navigation, wheel/drag/touch interactions, mobile layout, deep links, reduced-motion behaviour, and prior URLs as far as possible.
- Each location should support: identifier, type, parent, ordered children, zoom target/map bounds, editorial status, source references, and optional exhibit. Schema changes require migration or backwards compatibility.
- Deep links and Back/Forward must never strand a user at an orphaned level. Provide a route back to the world map. An exhibit should have keyboard/touch affordances and descriptive accessible text.
- Scientific visuals must disclose when they are schematic, sampled, approximate, historically reported, or formally rigorous; an attractive plot is never a proof.

## Mathematical editorial rules
- Treat names such as GRH, ERH, and Grand RH as context-dependent: state the chosen meaning; do not assert a universal nesting of conjectures.
- Distinguish: hypothetical consequences, proven theorems, numerical evidence, experimental approximations, preprints, peer-reviewed results, and open problems. Label the date of changing records.
- Never imply zero-density estimates ban all off-line zeros, or that finite computation proves RH, or that a displayed sample is a certified exhaustive list.
- Make mathematical connections explicit and typed: proved implication / conditional dependency / historical influence / conceptual analogy. No invented arrows or citations.
- Add or change numerical/theorem claims only after checking reliable source text. Preserve caveats and provenance in `atlas.js` or the successor content schema.

## Validation and stopping rules
For each authorised implementation session: inspect `git diff`; validate JSON and any data schemas; run available JS syntax/static checks; serve locally via HTTP; exercise the map-to-room-to-exhibit path, back navigation, deep-link reload, keyboard and touch/mobile, and inspect browser console. Record which checks were actually run and any omissions. If a blocking regression or unsupported mathematical claim remains, stop and report; do not label it a successful release.

## Explicit exclusions
This project does not claim a solution to the Riemann Hypothesis. No manuscripts, journals, arXiv/registry submissions, publicity/outreach, private analytics, paid services, credential collection, or autonomous research claims are authorised by the roadmap.

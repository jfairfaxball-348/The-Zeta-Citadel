# The Zeta Citadel — authoritative development roadmap (S002–S010)

**Adopted:** 28 October 2026. **Predecessor:** S001, commit `577c5d1a92187cbd0d8db89a2160317706a3eec7`. **Site:** https://the-zeta-citadel.vercel.app/  
**Programme status (updated 28 October 2026):** S002–S006 CLOSED; S007 READY / UNEXECUTED; S008–S010 PLANNED. Each session requires its own explicit owner invocation.

## Product vision and non-negotiable invariants
Build an explorable mathematical world in which a visitor journeys from the larger RH context into the Citadel, a district, an individual building, a theorem chamber, and an interactive exhibit. The goal is mathematical clarity as well as visual immersion; the map is *not* a diagram of logically nested conjectures. Preserve the existing S001 Vercel static site, eight top-level regions, content provenance, brand/design, navigation and deep links. Maintain a single navigable place graph; avoid a parallel hardcoded experience that cannot scale. Do not mistake numerical checking, zero proportions, density estimates or new preprints for a proof of RH.

### Levels of experience (progressive disclosure)
- `L0 WORLD`: empire, metro, GRH/ERH and the RH Citadel.
- `L1 DISTRICT`: rooms and landmarks of the Citadel; zoomed regional maps.
- `L2 BUILDING`: fully drawn floor plans; selectable rooms / exhibits.
- `L3 EXHIBIT`: individual claims, equations, source-cited narratives and mathematical demonstrations.
- `L4+`: optional deeper explanations/derivations added only when mathematically justified; the engine must not be capped at four levels.

### Cross-cutting contract
Use stable node IDs, parent IDs, ordered children, world/local geometry, camera bounds, source IDs and display metadata. Deep-linked locations should reload, display correct breadcrumbs, and support browser Back/Forward. Separate education/article data from view logic. Clear visual distinction among illustration, sampled numerics, certified calculations, established theorem, research preprint, and conjecture. Each session must include desktop/mobile, keyboard/reduced-motion and no-regression checks appropriate to its scope.

## Sequence and acceptance gates

### S002 — The Great Hall: first complete vertical slice
**Objective:** Prove the new architecture by enabling genuinely recursive exploration from the world to the Hall interior and an exhibit.

**Build:**
1. Generalise the existing region + subnode pair into a location graph of arbitrary depth, preserving old identifiers/hash deep links and current S001 content.
2. Add explicit camera/view bounds, accessible enter/back/up controls, location breadcrumbs and durable browser history.
3. Create a drawn Great Hall floor plan with separately selectable chambers, provisionally: Hardy's Gallery (1914), Levinson's Workshop (1974), Mollifier Laboratory, a contemporary-results chamber (research status labelled), and the Critical Line exhibit.
4. Build one genuine interactive teaching exhibit: the critical strip/line with adjustable or selectable coordinates and explanatory claims. Verified sample zeros may be used only with provenance and correct labels; do not build a purported live rigorous zeta solver without source/precision controls.
5. Make narrow-screen and reduced-motion handling part of the implemented flow.

**PASS:** navigate `world → Great Hall → chamber → exhibit` and back without broken state; show correct breadcrumbs and hash/Back/Forward behaviour; maintain all eight world regions and working S001 navigation; keyboard and touch usable; any numeric mathematical sample qualified; no unresolved console errors. **FAIL/STOP:** a broken legacy region, false mathematical claim, dead-end navigation, or inaccessible critical interaction.

**Artifacts:** new location model; Hall floor plan; first exhibit; `sessions/S002/{PLAN,VALIDATION,CLOSEOUT}.md`; updated authority and prepared S003 prompt only after acceptance. **Boundary:** do not construct full Courtyard/Keep/Dungeons expansions, global theorem graph or S003 zero lab.

### S003 — Critical-line laboratory and Great Hall mathematical depth
**Objective:** Make the Hall informative and mathematically meaningful beyond a single demonstration.

**Build:** selectable explanations of critical strip, critical line, nontrivial vs trivial zeros, Hardy's infinitely-many result, Levinson/mollifier milestones and clearly labelled modern research claims. Add an interactive chart or exploration of zeros with documented numerical method or vetted static data; distinguish plot interpolation from actual verified data. Add source references and optional proof-outline subrooms.

**PASS:** at least three functional, correctly scoped Great Hall exhibits; no unsupported numeric records; sources and caveats visible; mobile/keyboard and backlinks work. **Boundary:** don't proclaim a proof from a finite graphic or treat a preprint as peer-reviewed.

### S004 — The Courtyard: zero-density theorem district
**Objective:** Turn the density-theorems battleground into a navigable research area.

**Build:** schematic geography of density estimates; exhibit explaining `N(σ,T)` in accessible terms, difference between sparse rogue zeros and none, historical milestones, and a qualified Guth–Maynard 2024 node after checking primary references. Include an interactive inequality/region illustration, with any diagrams clearly labelled.

**PASS:** multi-level navigation and at least one mathematically justified density demonstration, source/claim review, and no conflation with full RH. **Boundary:** no extrapolation from density bounds to zero-free half-plane claims.

### S005 — The Keep: the known zero-free territory (CLOSED)
**Objective:** Visualise what a rigorous zero-free region genuinely guarantees.

**Build:** accurate strip/plane coordinate map showing trivial zeros, critical line, pole at one, and illustrative proved regions, with theorem-specific domain assumptions and boundaries. Optional overlay comparing classical and more recent results, only with sourced effective statements.

**PASS (S005 achieved):** sourced 2024 peer-reviewed exact bounds with their effective domain, a working log-height comparison, zero/pole schematic, desktop/mobile and legacy URL regression. [S005 validation](../sessions/S005/VALIDATION.md). **Boundary:** the proved safe region cannot be confused with the entire RH critical strip. Record-only; S006 is not executed.

### S006 — The Dungeons: computation and certificates (CLOSED)
**Objective:** Explain rigorous finite-height verification and its limitations.

**Build:** verified-height timeline, sample zeros with provenance, explanation of interval/certified methods versus visual estimates, and interactive comparison of `T` (height) against `N(T)` (number of zeros). Clearly distinguish the Platt–Trudgian reported height `3 × 10^12` from a count of checked zeros. Add source and date labels.

**PASS (S006 achieved):** two units never conflated; verified 2021 finite-height statement, separate noninteger Riemann–von Mangoldt estimate, rigorous error/completeness explanation, Odlyzko primary sample-ordinate provenance, source IDs and legacy deep-link/desktop/mobile regression. [S006 validation](../sessions/S006/VALIDATION.md). **Boundary:** no exact N(T) counts or independently certified computations were manufactured.

### S007 — The Outer Territories: the mathematical horizons (READY / UNEXECUTED)
**Objective:** Expand the Selberg Class / Grand RH / GRH / ERH into explorable subregions.

**Build:** hierarchical geographic overview with independent mathematical taxonomy: Dirichlet L-functions; number-field/Dedekind zeta examples; automorphic L-functions and relevant Langlands context; Selberg Class axioms and limitations. Explain that ERH/GRH terminology varies by author, and geographic nesting is explanatory, not universal logical implication.

**PASS:** four expanded regions with at least one substantive nested destination each; terms defined explicitly, source-backed navigation and an accurate relationship disclaimer. **Boundary:** no asserted equivalence based solely on drawing two concentric rings.

### S008 — Connections: paths between mathematical ideas
**Objective:** Add a cross-map network without misrepresenting logical relations.

**Build:** stable graph edges among nodes; filters for `proved implication`, `conditional dependency`, `historical influence`, and `conceptual analogy`; visible legend and edge-specific citations/notes. Clicking an edge opens its rationale, and nodes navigate into the existing map. Avoid spurious or merely decorative mathematical arrows.

**PASS:** every displayed proved/conditional connection is documented, filters and reverse navigation work, and visual/keyboard accessibility remains intact.

### S009 — Discovery, navigation and learning
**Objective:** Make the expanding atlas discoverable to visitors with different levels of background.

**Build:** search by title, author, theorem and ID; beginner and advanced journeys; direct stable links; progress indicators or local-only saved places (no account or tracking); breadcrumb improvements; onboarding and mobile accessibility polish.

**PASS:** a new visitor can follow a complete beginner journey, search for a theorem, copy a deep link, reload into that node, and recover position using Back/Forward. Respect reduced-motion and local-only privacy.

### S010 — First release consolidation and research audit
**Objective:** Consolidate S001–S009 into a dependable, maintainable and mathematically carefully edited release.

**Build:** source-status/content audit; regression and link checking; semantic/provenance validation for location graph and cross-edges; representative desktop/tablet/mobile accessibility and performance passes; deployment verification; documentation and contributor guide; backlog for a possible separately authorised S011+ roadmap.

**PASS:** no known critical navigation or factual blocker; tests and remaining limitations truthfully documented; production deployment checked if access permits. **Boundary:** do not execute S011 or submit mathematical research.

## Gates and succession
S002–S006 have been executed with evidence in `sessions/S002/` through `sessions/S006/`. S007 is the *only* installed ready-but-unexecuted prompt (`authoritative/NEXT_SESSION_PROMPT.md`). S008–S010 remain roadmap only. At closeout of each accepted session, promote **exactly one** successor and update `authoritative/STATE.json`, `START_HERE.md` and `NEXT_SESSION_PROMPT.md` consistently. If the acceptance gate is blocked, stop and record what remains rather than skipping to another stage. Preserve the predecessor's evidence and fully distinguish implementation tests from mathematics/source verification.

## Editorial risk register
- **M1 mathematical topology:** apparent containment on map misread as logical implication. *Mitigation:* repeated disclaimer and typed edges.
- **M2 rapidly moving research:** numerical records, percentages and preprints change. *Mitigation:* source timestamps/status and deliberate editorial review.
- **M3 visualisation overclaim:** plots and finite verification seem to prove RH. *Mitigation:* proven/approximate/certified labels on every exhibit.
- **P1 navigation scale:** bespoke views create dead ends or break hashes. *Mitigation:* recursive common location model in S002.
- **P2 mobile/accessibility:** rich SVG may become pointer-only. *Mitigation:* keyboard, focus, touch, reduced-motion checks at each gate.
- **P3 deployment fragility:** unnecessary new toolchain jeopardises current site. *Mitigation:* static-first, minimal dependencies, regression checks.

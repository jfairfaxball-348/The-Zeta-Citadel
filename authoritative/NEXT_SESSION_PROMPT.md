# S006 — Dungeons: numerical verification and certificates (READY, UNEXECUTED)

**Authorization boundary.** Installed during separately owner-invoked S005. This file does NOT execute S006. A NEW owner request “run next session” or explicit S006 invocation is mandatory. Do not run S007 or infer RH is proved from finite computation.

## Entry and authority
Repo: https://github.com/jfairfaxball-348/The-Zeta-Citadel
Live: https://the-zeta-citadel.vercel.app/
Predecessor: S005 [PR #5](https://github.com/jfairfaxball-348/The-Zeta-Citadel/pull/5), tested implementation `0b9c6651e3c37a9d6c2e0cb147ef94a7a36ee19e`, post-governance/main refs to be discovered LIVE rather than assumed.

1. Pin live remote main SHA and tree; independently reconcile S005 ordinary two-parent PR merge, branch and PR checks, post-merge main CI, Vercel target/commit and any unfinished or conflicting work. Do not confuse S005 preview with production.
2. Read in order `authoritative/STATE.json`, `AGENTS.md`, `authoritative/START_HERE.md`, `docs/SESSION_PROTOCOL.md`, `docs/ROADMAP.md`, `sessions/S005/{PLAN,VALIDATION,CLOSEOUT}.md`, S004/S003 predecessor notes, `atlas.js`, `locations.js`, `app.js`, `keep.js`, `courtyard.js`, `hall.js`, `laboratory.js`, `styles.css`, tests/CI and this exact canonical prompt.
3. Verify S005 CLOSED, S006 sole READY_UNEXECUTED, no competing session work; create `session/S006-dungeons-certificates` from pinned main and commit bounded `sessions/S006/PLAN.md`.

## Singular goal
Transform the Dungeons into a recursive, source-cited laboratory showing what finite *rigorous* zeta-zero verification means and what it cannot prove: tested heights, counts of zeros, validated zeros on the critical line, and how interval/error control and completeness checks differ from plotting a floating-point approximation. Reuse the same navigation surface and typed location graph.

## Mathematical/data safeguards
A. **Primary-source audit first.** Independently inspect the Platt–Trudgian published finite verification (reported height 3×10¹²), its original theorem, publication date, validated range and verification methodology. State exactly whether the quoted 3×10¹² is an imaginary height, not the number of zeros. Read DLMF §25.10, especially zero counting and the Riemann–Siegel formula. If showing exact N(T) values, supply a traceable, reproducible source with endpoint conventions and multiplicity; otherwise omit exact counts. A primary paper may contain additional count/height statistics with distinct definitions — never mix them.
B. **Certified vs indicative.** Explain numerical root-finding, finite precision, rigorous interval bounds, Turing-type completeness checking and their logical roles. Any toy calculations must be labelled toy. Do not claim interval methods alone establish an exhaustive count unless sourced and verified. Do not assign “certified” to a curve or dot merely because it looks plausible.
C. **Interactive exhibit.** Build at least one real, functional height/count or height/verification comparison with a documented formula or source-backed dataset. If using the Riemann–von Mangoldt main term as an *approximation*, label the omitted terms and never silently equate it to N(T). The chart must visually distinguish a *height boundary*, an *exact count*, an *approximation* and the universal infinite-height RH question. Cite data next to controls/plots. No fabricated exact zero positions.
D. **Recursive Dungeons interior.** Preserve the existing root `#dungeons` and legacy subsite IDs, all eight S001 regions, six Hall exhibits, Courtyard IDs `#density-guth`, `#density-idea`, `#density-exponent-exhibit`, `#density-definition-exhibit`, and Keep IDs `#keep-boundary`, `#keep-classical`, `#keep-vk`, `#keep-geometry-exhibit`, `#keep-comparison-exhibit`, `#keep-vk-exhibit`. Support world → Dungeons → site → exhibit → Up/Home/Back; history, invalid hash and reload, keyboard and touch. Do not build a parallel router or add dependencies without justification.
E. **Editorial boundary.** A verified finite interval does not prove RH for all heights. Zero-free analytic regions and density bounds are separate evidence. No outside submissions, outreach, papers, registry, private analytics, commercial services, fresh S007 work or claimed proof.

## Acceptance and stop gates
- All claims primary-source checked, units and quantifiers labelled, multiplicities/endpoint conventions correct.
- Validated deep links and Back/Forward/Up/Home, world/S002–S005 regression with desktop and mobile real-HTTP Chromium, keyboard, touch/reduced motion, console/pageerror and horizontal-overflow assertions.
- Syntax check all modules; JSON, typed graph and source IDs; own data/formula arithmetic tests, S006 GitHub CI plus predecessor CI.
- Record tested commit, actual CI run IDs/results, page screenshots only if really taken, deployment preview vs production, limitations and unresolved issues. If any central source, correctness, navigation or CI gate fails: S006 BLOCKED, do not install S007.

## Closeout
Commit `sessions/S006/{PLAN,VALIDATION,CLOSEOUT}.md`; update `STATE.json`, `START_HERE.md`, `docs/ROADMAP.md`, `README.md` if relevant. Only on acceptance install exactly one S007 READY/UNEXECUTED prompt in this canonical file, NEVER execute S007. Use reviewed PR, green checks, ordinary non-force two-parent main merge, then independently inspect main SHA/tree/main CI and actual Vercel target. Do not force push, rewrite, delete branches or auto-launch successors.

**Activation:** “Run S006 in The-Zeta-Citadel from the canonical prompt.”

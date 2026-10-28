# S004 — Courtyard zero-density theorem district (READY, UNEXECUTED)

**Authorisation boundary.** This file is the installed next-session prompt only. S003 was separately invoked and executed. A *fresh, separate* owner "run next session" instruction is mandatory before S004 may start. Never execute S005 or any later roadmap phase during S004.

## Entry — pin and reconcile
Repository: https://github.com/jfairfaxball-348/The-Zeta-Citadel
Production: https://the-zeta-citadel.vercel.app/
Predecessor: S003, PR https://github.com/jfairfaxball-348/The-Zeta-Citadel/pull/3, implementation \`54cd7f3c64eb36f4741c7dae90356338ef129f73\`, green branch CI https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40719950002. Commit IDs listed here are historical evidence, **not** permission to assume current main HEAD or production deployment.

1. Pin **live** remote \`main\` commit and its tree, then separately verify S003's ordinary two-parent merge, PR and both post-merge CI/deployment states if accessible. Inspect branch/PR conflicts and avoid stale-history assumptions.
2. Read \`authoritative/STATE.json\`, \`AGENTS.md\`, \`authoritative/START_HERE.md\`, \`docs/SESSION_PROTOCOL.md\`, \`docs/ROADMAP.md\`, \`sessions/S003/{PLAN,VALIDATION,CLOSEOUT}.md\`, \`atlas.js\`, \`locations.js\`, \`hall.js\`, \`laboratory.js\`, \`app.js\`, \`styles.css\`, existing tests and this prompt.
3. Confirm S003 is CLOSED, S004 alone is READY_UNEXECUTED, and there is no contradictory active session. Create \`session/S004-courtyard-density\` from pinned main. One numbered session only.

## Singular objective
Transform the existing Courtyard's Guth–Maynard node and Rogue-Zero Watch into a navigable **zero-density theorem district** with mathematically careful, sourced content and at least one genuine interactive demonstration. Keep the original Citadel map and S003 Great Hall untouched in behaviour.

## Authorised mathematical and product work
A. **Define the quantities and domains.** Explain \`N(T)\` (nontrivial zeros with 0<Im(ρ)≤T, counted with multiplicity) and \`N(σ,T)\` (such zeros with Re(ρ)≥σ, for a clearly stated σ range, with precise boundary conventions). If authors use a different normalization or height interval, explicitly specify it. Do not claim an upper bound at a restricted σ applies to all σ or all heights.

B. **Visualise density vs absence.** Add interactive controls for σ and an illustrative height/scale, and show the meaning of an upper bound compared with the theorem RH demands: **zero** off-line exceptions for σ>1/2. Any drawn dots/counts must be marked *invented schematic coordinates*, not computed zeta zeros. Prefer a symbolic/exponent visualization of inequalities over made-up zero counts. Distinguish an asymptotic Big-O bound from a finite-height certificate and from a zero-free region.

C. **Source audit and milestones.** Check Guth–Maynard's original zero-density paper and published version where applicable, verify the exact exponent \`30(1−σ)/13\` and permitted ranges, epsilon/o(1) phrasing and implied constants before putting it in a graphic. Compare one or two classical density results only where original or trusted high-quality mathematical sources support the exact statements. Use sources and editorial status directly in \`locations.js\`; no silent numeric upgrade. Date changing claims as of execution.

D. **Extend the existing recursive place graph.** Add typed Courtyard location children/exhibits, stable URLs, and a district/floor-plan navigation consistent with Great Hall's shared navigation infrastructure. Reuse existing renderer patterns rather than introducing a separate router or copied hardcoded deep-link logic. No breaking change to the original eight region IDs, \`#density-guth\`, \`#density-idea\`, \`#critical-line-exhibit\` or S003 IDs. All exhibits are keyboard/touch usable with descriptive math labels, source links and reduced-motion support.

E. **No unsupported research activity.** A zero-density theorem does not prohibit all off-line zeros and does not prove RH. A plot is not a verification; do not add false "rigorous live computation", bibliography inflation, journal/arXiv/registry submissions, outside outreach or paid services.

## Acceptance gates
- At least one **working mathematical density exhibit** and a coherent multi-depth Courtyard route (world → Courtyard → theorem site → interactive exhibit → return).
- Source and status review for every changed mathematical claim; correct σ and T scope, multiplicity, quantifiers, asymptotic notation and explicit off-line-not-zero caveat.
- All eight S001 world regions, S002 Hall rooms, six S003 exhibits and existing deep links function unchanged. Test Back/Forward, Up/Home, reload, invalid hashes, keyboard and mobile touch.
- Validate source/schema, JSON, JS syntax, recursive graph, static Vercel compatibility; serve via HTTP and run real-browser desktop and phone-size checks, inspect console exceptions and overflow. Record exactly which commands and screenshots/manual checks actually happened.
- If a required check or source verification fails, close S004 BLOCKED with clear evidence and **do not promote S005**.

## Handoff and stop
Commit \`sessions/S004/{PLAN,VALIDATION,CLOSEOUT}.md\`; update \`authoritative/STATE.json\`, \`authoritative/START_HERE.md\` and \`docs/ROADMAP.md\` coherently. **Only if accepted**, replace this one canonical file with **S005 READY / UNEXECUTED**, without implementing it. Use a reviewable PR, final code-and-governance CI, and a non-force ordinary **two-parent merge** into main; independently inspect merged main SHA/tree/CI and deployment if accessible. No force pushes, rewritten history, branch deletion or automatic next-session execution.

**Activation phrase:** "Run S004 in The-Zeta-Citadel from the committed canonical prompt."

# S004 — Courtyard zero-density district: authorised plan

**Owner invocation:** "run next session" on 28 October 2026. **Live entry main:** `055f56741b6de0d7c53281a6bc5012dceb7cf69b`, two-parent S003 merge of `a3003d60` and `d5d5d3dc`. S003 #3 merged, historical branch tests and post-merge S002 workflow successful; S004 uniquely READY_UNEXECUTED, no preexisting S004 branch. **S005 excluded.**

## Objective and design
Recast the Courtyard as a graph-backed zero-density district with preserved root IDs `courtyard`, `density-guth`, `density-idea`; add descendants for an interactive exponent calculator and an explanation of count/zero-free distinctions. Reuse the existing Hall interior surface and shared navigation/back stack without a second router. Keep original world map, all eight regions, Hall rooms and exhibits intact.

## Mathematical proof-obligation and sources
- Read the published Guth–Maynard, *Annals of Mathematics* 203(2) (2026) 623–675, online 1 March 2026, DOI 10.4007/annals.2026.203.2.6; check Theorem 1.2 and (1.4) against author arXiv:2405.20552v2 (page 2), including N(σ,T) author's **two-sided** height |Im ρ|≤T and exponents 15(1−σ)/(3+5σ), 30(1−σ)/13; Ingham and Huxley classical comparisons as quoted and attributed in same introduction.
- Define this atlas's N(T), N⁺(σ,T) with **positive** heights 0<Imρ≤T, counted with multiplicity. Use conjugation symmetry to explain factor of two compared with author's symmetric height convention; do not claim numerical equality of powers and finite-height zero counts.
- Show only asymptotic exponent calculations, with T shown as a scale parameter and explicitly hidden T^{o(1)} factors; no invented zeros or finite count certificates. Distinguish density, zero-free theorem and full RH.
- No unsupported claims outside 1/2≤σ<1 and T→∞; exact σ=1 is a separately sourced zero-free boundary and not extrapolated from the sliders.

## Work and verification
Add `courtyard.js` renderer/update; new typed descendants in `locations.js`; shared interior branch in `app.js`; responsive/focus CSS; extend recursive graph, Chromium desktop/mobile browser regression and GitHub CI. Validate with CI node syntax, JSON/graph, HTTP Chromium navigation, history, mobile/touch, keyboard, no pageerrors. Confirm source dates and author height conventions. Stop BLOCKED if a gate fails; no promotion of S005 until passing actual checks.

## Branch/rollback
`session/S004-courtyard-density` from entry main; reviewable PR and non-force ordinary two-parent merge only after validated checks. Rollback is to entry main without rewriting history. No deployment assertion without independent observation.

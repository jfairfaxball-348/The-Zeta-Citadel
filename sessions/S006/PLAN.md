# S006 — Dungeons numerical verification: authorised plan

**Owner:** “run next session”, 28 October 2026. **Pinned entry main:** `747272f66b7c646d1ca70aee138d65dcd8e47bf0`, tree `79e4e19820d333ee5d4f63bfbc6d5dfd1c4d7d4b`. S005 PR #5 ordinary two-parent merge, parents `f5b77d32f1e856351d248820064118d6844bb113` and `586f6f63951e4da9a7250f184086364afd834c93`. Merged main S002–S005 CI runs 40726386914, 40726386705, 40726386902, 40726386963 all completed success. Only S006 is invoked. S007 is excluded.

## Singular product objective

Build a recursive Dungeons district within the single existing scene/router and graph, preserving the real root `#dungeon` and legacy `#dungeon-cert` (the outgoing prompt's `#dungeons` spelling was not an existing hash). Add a counting laboratory and verification-method chamber, interactive height-versus-count *asymptotic estimate* and chronology. Provide keyboard/touch/Back/Forward/reload and deep-link navigation, keep original eight regions, and preserve S002–S005 scenes.

## Primary provenance and mathematical decisions

- Platt–Trudgian, *Bulletin of the London Mathematical Society* **53** (2021), 792–797, online 22 January 2021, DOI https://doi.org/10.1112/blms.12460: rigorously using interval arithmetic, every nontrivial zero with **0<Im(ρ)≤3×10¹²** is on σ=½ and simple. That bound is an imaginary **height** and not 3 trillion counted zeros. The conjugation symmetry covers negative heights; no claim about unbounded heights.
- NIST DLMF §25.10 https://dlmf.nist.gov/25.10: N(T) counts nontrivial zeros with 0<Im(ρ)<T in the discussed convention; counting all zeros and observing critical-line sign changes are logically distinct. The real Riemann–Siegel Z(t) formula includes a remainder term and does not turn a float plot into an exhaustive certificate. DLMF also reports 1986 first-ten-billion-zeros result as a **count milestone**, not a height.
- The Riemann–von Mangoldt asymptotic `N(T)=T/(2π) log(T/(2π))−T/(2π)+O(log T)` (e.g. https://mathworld.wolfram.com/Riemann-vonMangoldtFormula.html) supports an indicative, **noninteger** main-term calculator. An optional +7/8 term will NOT be introduced, avoiding ambiguity in the displayed error convention. Never label rounded results exact N(T).
- Historical first three ordinate approximations (14.134725..., 21.022040..., 25.010858...) are from https://oeis.org/wiki/Nontrivial_zeros_of_the_Riemann_zeta_function; mark explicitly **rounded reference coordinates**, not independently certified by this app. If no authoritative exact N(T) dataset is available, deliberately display NO exact N(T) figures.
- Teaching model: sign changes provide line-zero lower bounds; argument principle or Turing-style completeness control accounts for ALL strip zeros; rigorous error bounds ensure sign/interval decisions are valid. The app does not reproduce Platt–Trudgian's certificates or independently verify the zeros.

## Acceptance, rollback and scope

Review source/units; graph integrity and arithmetic with noninteger approximate counts; JS syntax and JSON checks; S006 CI real HTTP Chromium desktop/mobile, Back/Forward, Up/Home, invalid hash, keyboard/touch and no overflow/pageerrors, plus inherited S002–S005 CI. No unverified screen captures or production claims. Stop BLOCKED without S007 prompt if source, navigation or CI gate fails. Rollback: leave this branch unmerged, no force or history rewrite. After passing, close out and install only an S007 READY_UNEXECUTED prompt, use ordinary PR/two-parent merge and independently inspect main and deployment.
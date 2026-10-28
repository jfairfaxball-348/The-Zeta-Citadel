# S005 — Keep zero-free territories: authorised plan

**Owner instruction:** “run next session”, 28 October 2026. **Pinned entry main:** `f5b77d32f1e856351d248820064118d6844bb113`, tree `961380592625dc21d7020b82d8b3e008e7872e85`. S004 PR #4 has ordinary two-parent merge `f5b77d32f1e856351d248820064118d6844bb113` with parents `055f56741b6de0d7c53281a6bc5012dceb7cf69b` and `111fc56871bf8bb227e75ea4e10fe2e026b36fd1`. S002/S003/S004 merged-main workflow runs 40724818644, 40724818679, 40724818686 completed success. S005 solely READY_UNEXECUTED before this instruction. Branch `session/S005-keep-zero-free`. S006 explicitly excluded.

## Objective and bounded implementation
Preserve all existing region, Hall, Courtyard and Keep URLs and build a recursive, keyboard/touch accessible Keep district with three sites: existing Euler-product outer wall, published classical logarithmic zero-free region, and published Vinogradov–Korobov form. Their interactive exhibits reuse the single map-scene/router/history surface. Display rigorous formula values at selected |t| and an exact schematic zero/pole classification. No candidate-zero points.

## Mathematical source audit and strict domains
- NIST DLMF §25.10(i), https://dlmf.nist.gov/25.10: ζ(s)≠0 at Re(s)>1 by Euler product, and at Re(s)=1 wherever defined (Hadamard/de la Vallée Poussin); pole at s=1; trivial zeros −2,−4,−6,…; nontrivial zeros are in 0<Re(s)<1. Critical line σ=½; RH remains conjectural.
- Mossinghoff–Trudgian–Yang, *Research in Number Theory* 10, article 11 (2024), published 12 January 2024, https://link.springer.com/article/10.1007/s40993-023-00498-y: no ζ zeros for σ≥1−1/(5.558691 ln|t|) when |t|≥2, and for σ≥1−1/[55.241 (ln|t|)^(2/3)(ln ln|t|)^(1/3)] when |t|≥3. These are proved unconditional explicit, effective domains, not alleged 2026 records. All logs natural; graph uses |t|≥10, a common subset. Absolute height covers ±t. Pole t=0 excluded. Exact boundary (including ≥) is shown; no assumption of a universal RH proof.
- Calculated boundaries are just evaluation of published formulas. No sampled zeros, no finite-height certificate, and no false implication from Courtyard density estimates.

## Acceptance and rollback
Validate JS/JSON/graph/numeric boundary tests; real HTTP Chromium desktop/mobile, keyboard/touch, Back/Forward, Up/Home, direct reload, bad hash, no horizontal mobile overflow, console errors and Hall/Courtyard regressions via S002–S005 workflows. No physical device, formal proof checker, accessibility audit or screenshot claim without evidence. If blockers remain, mark S005 BLOCKED and do not install S006. Rollback to entry main by leaving branch unmerged; no force-push or branch deletion. Merge only an ordinary non-force two-parent PR after passing checks.

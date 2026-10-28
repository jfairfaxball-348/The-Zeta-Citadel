# S003 — critical-line laboratory: execution plan

**Owner invocation:** 2026-10-28, "run next session". **Pinned live main:** `a3003d60f1274fe69a9f8e770303759c1288a22b`, ordinary two-parent S002 PR #2 merge, no open PRs at entry. **Scope:** S003 only.

## Goal and implementation
Extend the existing Great Hall's single recursive place graph with interactive exhibits within Hardy's Gallery, Levinson's Workshop, Mollifier Laboratory, Contemporary Results, and the Critical Line Observatory; preserve the original eight-region map and all S001/S002 IDs. Keep the static dependency-free architecture, one shared laboratory renderer, central location metadata and delegated input handling.

Exhibits: (1) coordinate explorer retained; (2) choose mathematical types (trivial zeros, pole, selected non-zero-certificate points); (3) Hardy sign-change *toy* sine curve; (4) milestone comparison (existence, positive/explicit proportions, multiplicity); (5) toy fluctuation/mollifier analogy; (6) 2026 paper comparison by explicitly preprint-labelled claims. No fake computed zeros, certified counts, implication arrows or peer-review upgrades.

## Sources and precision policy
NIST DLMF §25.10 and §25.4 for strip/trivial zeros/pole and sign-change explanation. Conrey (1989) via EuDML for more than 2/5, DLMF for >41% (2011). Original Alpöge–Furman arXiv:2608.13637 and Lamzouri arXiv:2609.02882v2 reviewed 2026-10-28: two-thirds/simple+on-line, window 0.6725, distinct 0.8362, Lamzouri additional OR 0.8876 and average 0.8362. These are authored *preprint claims*, not independently proved here. Toy sine and product functions are exact as toy arithmetic, not ζ-computations.

## Acceptance and stopping
Check JS syntax, recursive graph (old IDs plus new), server-served Chromium desktop and mobile, keyboard/Back/Forward/direct reload/Up/Home/invalid links, console exceptions, responsive overflow, reduced motion, mathematical caveats and link targets, source and status text. Use GitHub Actions with documented runner; do not infer production deployment. If any mandatory check fails, repair and rerun before accepted merge, otherwise close BLOCKED without promoting S004. Ordinary PR and two-parent merge only, never delete branch or auto-run S004.

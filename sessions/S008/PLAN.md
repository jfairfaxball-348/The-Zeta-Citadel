# S008 — Typed connections / execution plan (28 October 2026)

**Authorisation:** new owner instruction “run next session”, S008 only. **Pinned main:** `e4fb51f6caafa26748f2a9b321adbae6f62e33fb`, tree `ce8586f879574ee251d1929c53497740e3125f61`; two parents `35a8c5735031600a840a0a8c30b64457651c9424` and `df1f39a548ad495324e8ac24163f26756ca1e7ed`. S007 PR #7 is merged; S002–S007 merged-main actions all completed successfully, runs 40731374460 / 40731374486 / 40731374494 / 40731374480 / 40731374649 / 40731374540. Vercel S007 production READY: `dpl_5Tkh9sDPRjgw5HXpV2WETkZcv539`, commit `e4fb51f6caafa26748f2a9b321adbae6f62e33fb`. No competing S008 branch at entry.

## Bounded goal and design
A separately sourced list of explicit connections among pre-existing `LOCATIONS` IDs. Four types only: proved implication, conditional dependency, historical influence, conceptual analogy. Human-audited edges, not map nesting/transitive closure. Keep eight regions and all old hashes. A Connections Map rendered inside the existing single location/history handler, with accessible filter buttons and clickable evidence cards, endpoint navigation and deep-linked edge details. No second router, accounts, tracking or dependencies. New `connections.js`, S008 tests/workflow, minimal UI/CSS and authority changes.

## Candidate primary-source audit
1. Universal Dirichlet GRH implies RH by the principal character modulo 1, `L(s,χ)=ζ(s)` — NIST DLMF §25.15. Explicit conventional scope; not an implication from the concentric drawing.
2. Universal all-number-fields Dedekind ERH implies RH because `ζ_Q=ζ` — Harvard Algebraic Number Theory course notes Definition 2.6.6. This is the Citadel's declared ERH convention only.
3. Assuming RH, no off-critical nontrivial zeros exist in `1/2 < Re(s) < 1` — DLMF §25.10. Conditional consequence, not independently established.
4. Assuming RH, `N(σ,T)=0` for `σ>1/2` within the usual critical-strip definition — DLMF §25.10 and Guth–Maynard Annals 2026. Zero density alone never implies this.
5. Hardy's critical-line zeros precede Levinson's positive-proportion theorem — Conrey 1989 *More than two fifths...*, §1; historical development, not deduction.
6. Levinson's use of a mollifier to Conrey's later longer-mollifier refinement — Conrey 1989 §1; documented historical influence, not an implication.
7. Dirichlet Euler factors and Dedekind prime-ideal Euler factors — DLMF §25.15, Harvard ANT Definition 2.6.6; conceptual analogy, not equality of all functions.
8. The Dungeons zero-counting exhibit and Courtyard off-line zero-density exhibit both count zeros with different restrictions — DLMF §25.10 and Guth–Maynard Annals 2026; analogy, not an estimate conversion.

## Validation and stop
Distinct stable IDs, valid endpoints, no duplicate/self-edges, allowed type, accurate directedness, claim/assumptions/status and HTTPS references; negative tests. Real HTTP Chromium desktop/mobile, deep-linked connections and edges, filters, keyboard and touch, edge-to-node/Back/Forward/Up/Home and old links; uncaught errors, overflow and reduced motion. New workflow runs both old regression and new S008 assertions. If facts or final-head CI fail, stop BLOCKED unmerged and do not promote S009.

**Rollback:** revert the dedicated PR before merge; avoid mutations to historical identifiers or existing source assertions.

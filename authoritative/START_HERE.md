# START HERE — The Zeta Citadel

**Date:** 28 October 2026. **S002–S005:** CLOSED on evidenced implementation (S005 merge checks are independently reconciled after the closeout commit). **S006:** READY / UNEXECUTED; **S007–S010:** PLANNED. A future prompt is not execution authorisation.

## Verified source-of-truth anchors
- Repository: https://github.com/jfairfaxball-348/The-Zeta-Citadel
- Production: https://the-zeta-citadel.vercel.app/
- S005 entry main: S004 ordinary two-parent merge `f5b77d32f1e856351d248820064118d6844bb113`, parents `055f56741b6de0d7c53281a6bc5012dceb7cf69b` and `111fc56871bf8bb227e75ea4e10fe2e026b36fd1`; main CI S002/S003/S004 successful on entry main.
- S005: [PR #5](https://github.com/jfairfaxball-348/The-Zeta-Citadel/pull/5), pre-governance implementation commit `0b9c6651e3c37a9d6c2e0cb147ef94a7a36ee19e`, [green S005 branch](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40725770263), [green S005 PR](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40725822208), [green S002 PR](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40725821077), [green S003 PR](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40725821668), [green S004 PR](https://github.com/jfairfaxball-348/The-Zeta-Citadel/actions/runs/40725821300). Those results do not pre-approve later governance commits.
- Vercel S005 same-commit preview READY: `dpl_CG51yxMSZVf2MdzPPCTs6hqquUxm` (preview, **not production**). Entry-main S004 production READY: `dpl_3WH5kxHYUiB4tjiXzC3wFnDyvxj2`. Recheck post-merge production separately.
- The Keep now preserves `#keep-boundary` and adds typed `#keep-classical`, `#keep-vk`, `#keep-geometry-exhibit`, `#keep-comparison-exhibit`, `#keep-vk-exhibit`. The old eight top-level IDs, all Hall and Courtyard links are unchanged. One router and one interior canvas serve all districts.

## Mathematical provenance
- NIST [DLMF §25.10](https://dlmf.nist.gov/25.10): no zeros for Re(s)>1 and the defined part of Re(s)=1, negative-even trivial zeros and simple pole at 1.
- Mossinghoff–Trudgian–Yang, [*Research in Number Theory* 10:11 (2024)](https://link.springer.com/article/10.1007/s40993-023-00498-y): two explicit unconditional zero-free regions, `5.558691 ln|t|` for |t|≥2 and `55.241 (ln|t|)^(2/3)(ln ln|t|)^(1/3)` for |t|≥3. Exhibit slider uses the intersection |t|≥10 and computes boundary values **not** zeros. Neither is advertised as a 2026 record or a proof of RH.
- The [S005 validation record](../sessions/S005/VALIDATION.md) distinguishes graphical illustration from theorem assertions, along with CI, navigation, physical-device limits and deployment evidence.

## Read order
First pin live remote main, compare PR merge and production status → `authoritative/STATE.json` → `AGENTS.md` → this file → `docs/SESSION_PROTOCOL.md` → `docs/ROADMAP.md` → `sessions/S005/{PLAN,VALIDATION,CLOSEOUT}.md` → relevant application/tests → `authoritative/NEXT_SESSION_PROMPT.md`.

## One next task — S006
The Dungeons: explain rigorous finite-height verification, certified computation, source-backed height and count metrics, and the exact logical gap to an all-height RH claim. No certification claims without exact primary data. See the one committed canonical prompt.

**S006 is READY / UNEXECUTED.** A separate new owner instruction is required. No execution of S006 or later stages as part of S005.

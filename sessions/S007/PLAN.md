# S007 — Outer Territories / plan (28 October 2026)

**Authorised:** fresh owner instruction “run next session”, scoped to S007 only. **Pinned live entry main:** `35a8c5735031600a840a0a8c30b64457651c9424`, ordinary two-parent merge of S006 PR #6, parents `747272f66b7c646d1ca70aee138d65dcd8e47bf0` and `cd9a36e612f228ff2f0c7d1af927c06a35c58eff`. At entry all five S002–S006 merged-main workflow checks completed successfully. No competing S007 branch was found.

## Bounded objective
Create four independently named explorable horizon districts: `selberg`, `grand`, `grh`, `erh`. Retain all legacy region IDs and historical URLs, recursive typed location graph, original map exterior and single interior renderer/router. Each district receives a site and an interactive, sourced exhibit. Avoid implying that concentric areas mean logical containment.

## Source audit and claims
- Selberg class: five classical axioms (Dirichlet series, continuation, functional equation, Ramanujan coefficient condition, prime-power-supported logarithmic Euler product); distinguish *definitions* from conjectured classification. Source: Farmer, *Mathematika* (2021), https://doi.org/10.1112/mtk.12093 and Kaczorowski–Perelli exposition at https://www.math.ubc.ca/~gerg/teaching/613-Winter2011/SelbergClass.pdf.
- Grand RH: adopt the original atlas convention “nontrivial zeros of the relevant standard automorphic L-functions on their critical lines”; explain that Langlands is context, and no unsupported transfer theorem follows from map position. Reference J. Arthur lectures https://www.math.toronto.edu/arthur/pdf/automorphic-L.pdf and AIM overview already cited in atlas (historical URL availability unverified).
- Dirichlet GRH: Dirichlet characters and nontrivial zeros of all Dirichlet L-functions, with mod-4 example using exact arithmetic and no numerical zero claims. Reference NIST DLMF §25.15 https://dlmf.nist.gov/25.15 .
- ERH: **by convention here**, all Dedekind zeta functions of number fields; `K=Q(i)` Gaussian splitting illustrations are exact algebra, not an ERH test. Keith Conrad *Gaussian Integers* Theorem 9.7 https://kconrad.math.uconn.edu/math5230f12/handouts/Zinotes.pdf and Harvard algebraic number theory course notes https://people.math.harvard.edu/~achenjang/assets/pdf/Fall_2020_Course_Notes.pdf.

## Planned changes
New `outer.js` shared static exhibit renderer and update function; explicit typed additions and source IDs in `locations.js`; minimal `app.js` router/event additions; responsive style and S007 tests/workflow. Update README/roadmap/authoritative handoff only after gates. No source-status or theorem upgrade beyond verified references.

## Required gate
JS syntax, graph/source coherence, pure arithmetic tests, all S002–S007 CI workflows, real HTTP Chromium desktop/mobile: world → each outer territory → site → exhibit → Back/Forward/Up/Home; direct reload, invalid hash, keyboard/touch/reduced motion, no pageerrors or overflow. Inspect same-head CI before merge. If any blocking check/unsupported mathematical statement remains, mark BLOCKED, do not merge or install S008. Rollback: leave main untouched; branch remains available for review.

# S010 — Mathematical source and provenance audit

**Review date:** 2026-10-28 (UTC). **Scope:** published claims and selected primary-linked definitions behind the eight original regions, recursive rooms, eight S008 relationships and S009 learning paths. **Baseline:** `a6aef02de6ab7488f96d126690441d56627a1d76`. This is a source-status ledger, not a proof of RH or a substitute for mathematical peer review.

## Source verification register

| Atlas surface | Source actually inspected | Status and observation | Disposition |
|---|---|---|---|
| Zeta strip, trivial zeros, RH definition; Keep boundary | [NIST DLMF §25.10](https://dlmf.nist.gov/25.10) | Accessible HTML. Explicit Re(s)>1 zero-free; critical strip 0<Re(s)<1; zeros symmetric; RH unproved. | Claim supported. |
| Dirichlet L-series, Euler product; character/GRH bridge | [NIST DLMF §25.15](https://dlmf.nist.gov/25.15) | Accessible HTML, series and Euler products for Re(s)>1. Universal Dirichlet GRH ⇒ RH only under the stated convention including the trivial modulus-one case. | Algebraic consequence is of conjectures, not a proof of GRH. |
| Published zero-density exponent and the Courtyard | [Guth–Maynard, Annals 203 (2026), 623–675](https://annals.math.princeton.edu/2026/203-2/p06) | Journal record published 1 March 2026, abstract states N(σ,T)≤T^{30(1−σ)/13+o(1)} and primes-in-short-interval exponent 17/30. | Peer-reviewed theorem; upper bound permits exceptional zeros and is asymptotic, not exhaustive count. |
| Keep classical / Vinogradov–Korobov bounds | [Mossinghoff–Trudgian–Yang, Research in Number Theory 10:11 (2024)](https://link.springer.com/article/10.1007/s40993-023-00498-y) | Accessible journal abstract, Theorem 1.3. Classical constant 5.558691, natural log, |t|≥2; VK constant 55.241, powers 2/3 and 1/3, |t|≥3. | The two displayed formulas and domains match the publication. Not declared global 2026 records. |
| Rigorous zero verification | [Platt–Trudgian, BLMS 53 (2021), 792–797](https://doi.org/10.1112/blms.12460) | Accessible publisher abstract: all zeros with 0<γ≤3×10¹² lie at β=1/2 and are simple. | Height `T`, NOT 3 trillion zero count; finite interval, not full RH. |
| Riemann–von Mangoldt comparator | [Wolfram MathWorld, Riemann–von Mangoldt formula](https://mathworld.wolfram.com/Riemann-vonMangoldtFormula.html) | Accessible HTML shows N(T)=T/(2π)log(T/(2π))−T/(2π)+O(log T), as T→∞. | Visual is noninteger main term, no exact N(T) claim. |
| Hall 2026 simple-line proportions | [Alpöge–Furman arXiv:2608.13637](https://arxiv.org/abs/2608.13637), [Lamzouri arXiv:2609.02882](https://arxiv.org/abs/2609.02882) | arXiv records: at least/more than 67.25% simple and on line and 83.62% distinct in stated forms. September 2026 follow-up [Wang arXiv:2609.24167](https://arxiv.org/abs/2609.24167) reports a tiny refinement, so 67.25% is a conservative lower-bound description, not the definitive latest precision. | Retain **research preprint** labels and no claim of peer review or 100%. Verify latest revisions before future changes. |
| Selberg class framework | [Li Zheng, A Concise Survey of the Selberg Class](https://www.math.ubc.ca/~gerg/teaching/613-Winter2011/SelbergClass.pdf) | Accessible PDF; inspected rendered first page. Axiomatic framework, not a solved classification theorem. | Secondary educational source; retains classification caveat. |
| Original S001 AIM GRH, ERH, Grand RH and Selberg sources | [AIM RH landscape PDF](https://www.aimath.org/WWN/rh/rh.pdf) was directly inaccessible (404); S010 **replaced all four original atlas-level links** with accessible specific scholarly references: [Li Zheng](https://www.math.ubc.ca/~gerg/teaching/613-Winter2011/SelbergClass.pdf), [Arthur–Gelbart](https://www.math.toronto.edu/arthur/pdf/automorphic-L.pdf), [DLMF Dirichlet](https://dlmf.nist.gov/25.15), [Harvard number-field notes](https://people.math.harvard.edu/~achenjang/assets/pdf/Fall_2020_Course_Notes.pdf). | Accessed HTML/PDF source materials directly; no assertion that one survey gives the universal meaning of all three convention-dependent names. | **LINK FIXED:** no longer linked in original regions. Record actual definitions as atlas-specific conventions. |
| Odlyzko first ordinates | [Odlyzko table index](https://www-users.cse.umn.edu/~odlyzko/zeta_tables/) | Accessible indexed table catalogue confirms first-100-zeros resource with high precision. Direct raw `zeros2` bytes were not revalidated here. | Historical examples are not recomputed or certified by this app. |

## S008 edge-direction audit (editorial, not mechanical proof)

1. `dirichlet-grh-rh`: **proved implication between statements**; universal Dirichlet GRH (including ζ) ⇒ RH. Premise unproved.
2. `dedekind-erh-rh`: **proved implication between statements**; universal number-field Dedekind ERH includes K=Q, where ζ_Q=ζ. Premise unproved; Q(i) exhibit alone not sufficient. Harvard notes PDF directly retrieved in this review; number-field implication is from K=Q definitions.
3. `rh-zero-free-half`: **conditional**; assuming RH, no off-line nontrivial zeros for 1/2<σ<1.
4. `rh-density-zero`: **conditional**; assuming RH, for every fixed σ>1/2 the off-line N(σ,T) vanishes; Guth–Maynard's real theorem does **not** show that.
5. `hardy-levinson-history`: **historical** 1914 to 1974 positive-proportion development. Conrey paper and Hughes lecture-notes PDF accessible; Conrey introduction directly confirms Levinson antecedent.
6. `levinson-mollifier-method`: **historical** method refinement, not logical implication; Conrey's actual 1989 introduction directly checked, including the mollifier-length comparison.
7. `euler-factors-analogy`: **analogy** Dirichlet characters vs number-field prime ideals; distinct factors and no universal equivalence.
8. `zero-count-density-analogy`: **analogy** full N(T) against restricted N(σ,T); no computed certifying relation.

Connections have graph ID/type/schema checks in `tests/connections.mjs` and `tests/release-audit.mjs`; tests cannot certify the source's mathematical truth.

## S009 learning-path review
Beginner six-stop trail contrasts RH, zero taxonomy, finite evidence, possible density exceptions and a non-entailing analogy. Advanced seven-stop trail contrasts Dirichlet and Dedekind scope, exact Euler-factor arithmetic, peer-reviewed asymptotic bounds and an explicitly **conditional** last edge. The routes are canonical IDs, not a second mathematical source.

## Remaining audit gaps and STOP gate
- **Resolved broken link:** AIM PDF returned 404 from live retrieval on 2026-10-28. All four obsolete original region links were replaced with accessible scholarly references in `atlas.js`. The exact nomenclature remains explicitly a local convention, not a theorem.
- Arthur–Gelbart, Harvard notes, Conrey and Hughes PDF sources were retrieved, but not all 59/472/26/32 pages were reviewed. Other source PDFs and the raw Odlyzko text remain incompletely checked; claims are no stronger than the explicitly reviewed material.
- This audit is a bounded sampled review, **not** a complete live-link crawl, full formal verification or review of every authored sentence. Inability to verify a critical source or to run all release browser checks is an acceptance blocker under S010's prompt.
- Distinguish source-access failure from proven factual falsity. Avoid speculative replacements and do not silently upgrade manuscript/preprint status.

## Editorial maintenance procedure
For any changed numeric claim, read the publisher theorem/abstract and its exact hypotheses, domains, quantifiers, constants and publication date; log the URL, date and passage, then update `atlas.js` / `locations.js` / `connections.js` only with provenance and a negative regression case. Search and journeys derive from that same canonical data. No map-based nesting implies logic.

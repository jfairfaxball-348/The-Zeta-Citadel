/* The Zeta Citadel — editorial data layer.
 * All narrative, sources and drill-down nodes live here, not in the renderer.
 * Mathematical containment on the artwork is an analogy, not an implication diagram.
 */
export const EDITION = '28 OCT 2026';
export const REGIONS = [
  {
    id: 'selberg', number: '01', kind: 'horizon', name: 'The Global Empire', subtitle: 'The Selberg Class', short: 'A wider country of L-functions', status: 'Research framework', tone: 'blue',
    teaser: 'Beyond the walls lies a proposed common grammar for zeta-like functions.',
    concept: 'The Selberg class groups Dirichlet series satisfying demanding axioms such as analytic continuation, a functional equation and an Euler product. It is a proposed framework for understanding the family resemblance between important L-functions, not a proved universal border around every number-theoretic object.',
    progress: 'A major long-running question is how to classify the members of this class. Degree-one members are understood; the larger landscape remains a rich research programme. A “Riemann hypothesis” can be asked for suitable members, but the class itself is not a single conjecture.',
    stakes: 'A clearer classification would help explain which zeta-like functions arise naturally from arithmetic and why different prime-counting problems exhibit related patterns.',
    caution: 'The Selberg class is not literally an outer theorem that implies every inner region.',
    evidence: 'Axiomatic framework',
    milestones: [{year:'1990s', text:'Selberg formulates an axiomatic setting for L-functions.'},{year:'Today',text:'Higher-degree classification remains an active field.'}],
    sources: [{name:'Selberg class mathematical survey (Li Zheng)',url:'https://www.math.ubc.ca/~gerg/teaching/613-Winter2011/SelbergClass.pdf'}],
    focus: {x: 780, y: 490, w: 1130}, subnodes: []
  },
  {
    id: 'grand', number: '02', kind: 'horizon', name: 'The Greater Metro', subtitle: 'Grand Riemann Hypothesis', short: 'Automorphic L-functions and Langlands', status: 'Open conjectural landscape', tone: 'violet',
    teaser: 'Bridges connect arithmetic, representations and geometry.',
    concept: 'One precise use of “Grand Riemann Hypothesis” asks that the nontrivial zeros of all automorphic L-functions lie on the critical line. This reaches into the Langlands programme, where automorphic objects connect number theory and representation theory.',
    progress: 'There are deep theorems for special families, but no general proof of the grand statement. Important parts of Langlands are about much more than zeros and should not be mistaken for merely larger versions of RH.',
    stakes: 'Uniform control of zeros across these families would sharpen error terms and connect prime-like phenomena in many arithmetic settings.',
    caution: '“Grand RH” is not standardized in every source; here we explicitly mean the critical-line conjecture for the relevant automorphic L-functions, with stated normalization.',
    evidence: 'Broad conjectural extension',
    milestones: [{year:'20th c.',text:'Automorphic forms and Langlands connections develop.'},{year:'Today',text:'Spectral and automorphic families remain open in general.'}],
    sources: [{name:'Arthur–Gelbart — Lectures on automorphic L-functions',url:'https://www.math.toronto.edu/arthur/pdf/automorphic-L.pdf'}],
    focus: {x: 780, y: 490, w: 935}, subnodes: []
  },
  {
    id: 'grh', number: '03', kind: 'horizon', name: 'The City Limits', subtitle: 'Generalized RH · GRH', short: 'Primes along arithmetic progressions', status: 'Open conjecture', tone: 'teal',
    teaser: 'A network of prime-number roads heading in different directions.',
    concept: 'In its common Dirichlet L-function meaning, GRH says that the nontrivial zeros of Dirichlet L-functions all have real part 1/2. These L-functions track primes in residue classes: for instance, primes congruent to 1 or 3 modulo 4.',
    progress: 'There are powerful unconditional estimates and many results assuming GRH, but the general assertion is unproved. In broader usage, GRH may also refer to more general L-functions, so definitions must always be stated.',
    stakes: 'GRH would give strikingly sharp control of the errors in counting primes in arithmetic progressions and many other effective estimates.',
    caution: 'The ring depicts scope, not a certified chain of logical implications for every terminology convention.',
    evidence: 'Conjecture for Dirichlet L-functions',
    milestones: [{year:'1837',text:'Dirichlet proves infinitely many primes in reduced residue classes.'},{year:'Today',text:'GRH remains open beyond finite verification and special cases.'}],
    sources: [{name:'NIST DLMF §25.15 — Dirichlet L-functions',url:'https://dlmf.nist.gov/25.15'}],
    focus: {x: 780, y: 490, w: 745}, subnodes: []
  },
  {
    id: 'erh', number: '04', kind: 'horizon', name: 'The Inner Wall', subtitle: 'Extended RH · ERH', short: 'Number fields beyond the rationals', status: 'Open conjecture', tone: 'copper',
    teaser: 'The fortress broadens from ordinary integers to algebraic number fields.',
    concept: 'In one standard usage, ERH asserts that the nontrivial zeros of every Dedekind zeta function of a number field have real part 1/2. The zeta function of the rational numbers is the original Riemann zeta function.',
    progress: 'Many estimates are available conditionally, and number fields can be investigated individually, but there is no proof in general.',
    stakes: 'A proof would strengthen quantitative statements about prime ideals, class groups and arithmetic in algebraic number fields.',
    caution: 'ERH is sometimes used as a synonym for GRH. Under the specific definitions used here, the GRH and ERH scopes are related but should not be presented as strictly nested walls.',
    evidence: 'Dedekind zeta conjecture',
    milestones: [{year:'19th c.',text:'Dedekind extends arithmetic to general number fields.'},{year:'Today',text:'The corresponding zero-location conjecture remains unresolved.'}],
    sources: [{name:'Harvard algebraic number theory course notes — Dedekind zeta',url:'https://people.math.harvard.edu/~achenjang/assets/pdf/Fall_2020_Course_Notes.pdf'}],
    focus: {x: 780, y: 490, w: 575}, subnodes: []
  },
  {
    id: 'courtyard', number: '05', kind: 'citadel', name: 'The Courtyard', subtitle: 'Zero-density theorems', short: 'Counting possible rogue zeros', status: 'Active progress', tone: 'rose',
    teaser: 'The front line: prove that zeros away from the line are scarce.',
    concept: 'Instead of proving that no zero leaves the critical line, zero-density theorems bound how many zeros can lie to its right. They are a powerful substitute for RH in estimates about primes.',
    progress: 'Guth and Maynard developed a new large-values method for Dirichlet polynomials in a 2024 preprint, published in the Annals of Mathematics in 2026. Their zero-density estimate improves results applicable to primes in short intervals. It does not prove RH.',
    stakes: 'Each improvement narrows the worst possible behavior of primes, even while a complete exclusion of off-line zeros remains out of reach.',
    caution: 'A sparse set of exceptions is not the same thing as no exceptions.',
    evidence: 'Rigorous partial theorems',
    milestones: [{year:'20th c.',text:'Zero-density methods develop as substitutes for assuming RH.'},{year:'2024–26',text:'Guth–Maynard: new bounds, published Annals 2026.'}],
    sources: [{name:'Annals — Guth & Maynard (2026)',url:'https://annals.math.princeton.edu/2026/203-2/p06'}],
    focus: {x: 785, y: 480, w: 480}, subnodes: ['density-guth','density-idea']
  },
  {
    id: 'hall', number: '06', kind: 'citadel', name: 'The Great Hall', subtitle: 'Critical-line theorems', short: 'Zeros proved on the line', status: 'Major progress in 2026', tone: 'gold',
    teaser: 'The heart of the evidence: a growing proportion proven to stand on the line.',
    concept: 'The critical line is Re(s)=1/2. Hardy first proved infinitely many zeta zeros lie there. Later work quantified a positive proportion; proving all of them lie there is the still-open Riemann Hypothesis.',
    progress: 'Levinson proved more than one-third in 1974; subsequent methods passed 40%, and Pratt–Robles–Zaharescu–Zeindler exceeded 5/12. In 2026 Alpöge–Furman reported at least 67.25% of zeros are simple and on the critical line, with a separate proof by Lamzouri. These are proportion bounds, not RH itself.',
    stakes: 'The gap between a positive proportion and 100% is the central obstacle: exceptional zeros might still exist at arbitrarily large heights.',
    caution: 'The old “41%” caption is historic, not the frontier as of October 2026. Newer 67% refinements may change and warrant independent source checking.',
    evidence: 'Over 67.25% · 2026 preprints',
    milestones: [{year:'1914',text:'Hardy: infinitely many zeros on the critical line.'},{year:'1974',text:'Levinson: more than one-third.'},{year:'2020',text:'Pratt and coauthors: more than 5/12.'},{year:'2026',text:'Alpöge–Furman and Lamzouri: above 67.25%.'}],
    sources: [{name:'Alpöge & Furman — arXiv 2026',url:'https://arxiv.org/abs/2608.13637'},{name:'Lamzouri — independent proof',url:'https://arxiv.org/abs/2609.02882'},{name:'NIST DLMF — historical context',url:'https://dlmf.nist.gov/25.10'}],
    focus: {x: 775, y: 479, w: 435}, subnodes: ['hall-hardy','hall-2026']
  },
  {
    id: 'keep', number: '07', kind: 'citadel', name: 'The Keep', subtitle: 'Zero-free regions', short: 'Territory where zeros cannot lie', status: 'Proved safe zones', tone: 'mint',
    teaser: 'Some parts of the complex plane are provably off-limits to zeros.',
    concept: 'The Euler product immediately excludes zeros when Re(s)>1. Deeper zero-free regions push this knowledge leftward, close to the edge Re(s)=1. They are carefully described regions of the complex plane, not a statement that the center of the citadel is free of zeros.',
    progress: 'Classical zero-free regions underpin the prime number theorem and explicit estimates. Improving their shape or constants strengthens results on prime distribution without proving the full RH.',
    stakes: 'Larger proven zero-free regions give stronger unconditional controls for prime-counting error terms.',
    caution: 'The geometric position of this “keep” is artistic: zero-free regions are not literally a small area inside the critical line.',
    evidence: 'Proved in specified domains',
    milestones: [{year:'1896',text:'Hadamard and de la Vallée Poussin establish the key boundary exclusion.'},{year:'Today',text:'Explicit zero-free regions and constants continue improving.'}],
    sources: [{name:'NIST DLMF — zeros',url:'https://dlmf.nist.gov/25.10'}],
    focus: {x: 833, y: 409, w: 375}, subnodes: ['keep-boundary']
  },
  {
    id: 'dungeon', number: '08', kind: 'citadel', name: 'The Dungeons', subtitle: 'Rigorous computation', short: 'Checking zeros at finite height', status: 'Finite verification', tone: 'steel',
    teaser: 'Under the fortress, interval arithmetic checks enormous ranges.',
    concept: 'Computers can rigorously locate and count zeros within a bounded range of imaginary heights, ensuring none was missed. Such verification provides strong evidence and useful explicit bounds, but cannot establish a statement about infinitely many zeros.',
    progress: 'Platt and Trudgian proved by rigorous interval arithmetic that every nontrivial zero up to imaginary height 3×10¹² is on the critical line, and that these zeros are simple (published 2021). The number 3×10¹² is a HEIGHT, not a count of zeros.',
    stakes: 'Verified finite ranges support numerical experiments, explicit estimates and the testing of proposed methods, while leaving the infinite tail untouched.',
    caution: 'Even an immense finite calculation is not a proof of RH.',
    evidence: 'Verified to height 3×10¹²',
    milestones: [{year:'1986',text:'The first 10 billion zeros were reported on the line.'},{year:'2021',text:'Platt–Trudgian: rigorous verification to height 3×10¹².'}],
    sources: [{name:'Platt & Trudgian — BLMS 2021',url:'https://doi.org/10.1112/blms.12460'}],
    focus: {x: 776, y: 574, w: 370}, subnodes: ['dungeon-cert']
  }
];

export const SUBNODES = {
  'density-guth': {id:'density-guth',parent:'courtyard',x:716,y:413,name:'The Guth–Maynard Bridge',subtitle:'Large values → zero density',status:'Published 2026',concept:'Instead of checking each possible zero, the argument bounds large values of Dirichlet polynomials. This controls how many zeta zeros can be found to the right of a chosen vertical line.',progress:'The paper gives N(σ,T) ≤ T^(30(1−σ)/13+o(1)) in its relevant range, and prime asymptotics in shorter intervals. This is a substantial unconditional theorem, not a proof of RH.',stakes:'Illustrates how a partial theorem can produce concrete results about primes even while RH remains open.',sources:[{name:'Annals paper',url:'https://annals.math.princeton.edu/2026/203-2/p06'}]},
  'density-idea': {id:'density-idea',parent:'courtyard',x:865,y:531,name:'The Rogue-Zero Watch',subtitle:'How density differs from exclusion',status:'Conceptual tool',concept:'A zero-density estimate makes a statement of the form “not too many zeros can lie in this off-line region.” RH requires zero such exceptions.',progress:'Density bounds can prove almost-all or average properties and help bound exceptional behavior in prime-counting problems.',stakes:'Separates the frontier we can currently measure from the absolute statement we seek.',sources:[{name:'Oxford seminar description',url:'https://www.maths.ox.ac.uk/node/67928'}]},
  'hall-hardy': {id:'hall-hardy',parent:'hall',x:741,y:469,name:'The Hardy Gallery',subtitle:'From infinitely many to a positive proportion',status:'Classical theorems',concept:'Hardy established that infinitely many nontrivial zeros lie on the critical line. That fact alone says nothing about whether a different infinite collection could lie away from it.',progress:'Levinson and later mollifier methods turned existence into lower bounds for the proportion on the line.',stakes:'The progression of methods gives a historical route into why 100% is much harder than infinitely many.',sources:[{name:'NIST DLMF historical reference',url:'https://dlmf.nist.gov/25.10'}]},
  'hall-2026': {id:'hall-2026',parent:'hall',x:823,y:506,name:'The Two-Thirds Chamber',subtitle:'2026 lower-bound advance',status:'Research preprints',concept:'A theorem about proportions of all nontrivial zeros, counted with multiplicity: more than 67.25% are simple and on the critical line. It does not locate every zero.',progress:'The Alpöge–Furman preprint (August 2026) and Lamzouri’s separate September 2026 proof use different formulations of the argument.',stakes:'A major improvement in quantitative understanding, but the remaining fraction cannot be assumed to vanish.',sources:[{name:'Alpöge–Furman',url:'https://arxiv.org/abs/2608.13637'},{name:'Lamzouri',url:'https://arxiv.org/abs/2609.02882'}]},
  'keep-boundary': {id:'keep-boundary',parent:'keep',x:841,y:408,name:'The Boundary Watchtower',subtitle:'Why Re(s)>1 is safe',status:'Proven',concept:'The Euler product ζ(s)=∏p(1−p^(−s))^(−1) converges absolutely for Re(s)>1, and gives a nonzero zeta function there.',progress:'Classical analysis proves larger zero-free regions leaning into the critical strip close to Re(s)=1.',stakes:'A small change to a zero-free boundary can sharpen an explicit prime-counting estimate.',sources:[{name:'NIST DLMF',url:'https://dlmf.nist.gov/25.10'}]},
  'dungeon-cert': {id:'dungeon-cert',parent:'dungeon',x:778,y:577,name:'The Certificate Vault',subtitle:'Finite ranges, rigorous arithmetic',status:'Published 2021',concept:'Interval arithmetic encloses quantities with certified error bars, preventing numerical rounding from invalidating the zero count.',progress:'The Platt–Trudgian height bound of 3×10¹² rigorously covers every zero below that height; it does not cover arbitrary heights.',stakes:'The certificate is powerful for explicit finite statements, but never replaces an argument about infinity.',sources:[{name:'BLMS paper',url:'https://doi.org/10.1112/blms.12460'}]}
};

export const getRegion = (id) => REGIONS.find((region) => region.id === id);
export const getNode = (id) => SUBNODES[id] || getRegion(id);

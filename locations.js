/* S002: a single stable, arbitrary-depth place graph; S001 IDs remain unchanged. */
import { REGIONS, SUBNODES } from './atlas.js';

const HALL_ORDER = ['hall-hardy', 'hall-levinson', 'hall-mollifier', 'hall-2026', 'hall-critical'];
const SOURCE_DLMF = [{name: 'NIST Digital Library of Mathematical Functions — §25.10', url: 'https://dlmf.nist.gov/25.10'}];
const SOURCES_2026 = [
  {name: 'Alpöge–Furman (2026 research preprint)', url: 'https://arxiv.org/abs/2608.13637'},
  {name: 'Lamzouri (2026 research preprint)', url: 'https://arxiv.org/abs/2609.02882'}
];

const SOURCE_DENSITY = [
  {name:'Guth–Maynard, Annals of Mathematics 203 (2026), 623–675; peer reviewed',url:'https://annals.math.princeton.edu/2026/203-2/p06'},
  {name:'Guth–Maynard, author manuscript §1, Theorem 1.2 and equation (1.4)',url:'https://arxiv.org/pdf/2405.20552'},
  {name:'NIST DLMF §25.10, zero strip and symmetry',url:'https://dlmf.nist.gov/25.10'}
];
const SOURCE_KEEP = [
 {name:'NIST DLMF §25.10(i), Euler product and zero taxonomy',url:'https://dlmf.nist.gov/25.10'},
 {name:'Mossinghoff–Trudgian–Yang, Research in Number Theory 10:11 (2024), peer reviewed',url:'https://link.springer.com/article/10.1007/s40993-023-00498-y'}
];
const SOURCE_DUNGEON = [
 {name:'Platt–Trudgian, Bulletin of the London Mathematical Society 53 (2021), 792–797 · published theorem',url:'https://doi.org/10.1112/blms.12460'},
 {name:'NIST DLMF §25.10 · zero counting, sign changes and Riemann–Siegel formula',url:'https://dlmf.nist.gov/25.10'},
 {name:'Riemann–von Mangoldt formula (asymptotic reference)',url:'https://mathworld.wolfram.com/Riemann-vonMangoldtFormula.html'}
];
const ADDITIONS = {
 'dungeon-counting':{
  id:'dungeon-counting',parent:'dungeon',type:'site',name:'The Counting Well',
  subtitle:'Compare height T with the asymptotic N(T) estimate',status:'Asymptotic theorem · illustrative calculation',
  concept:'N(T) counts all nontrivial zeros in the critical strip with positive imaginary part, counted with multiplicity. It is a zero count; T is an imaginary coordinate. The Riemann–von Mangoldt main term estimates the scale of the count, but it does not produce its exact integer value.',
  progress:'The interactive formula uses T/(2π)·(ln(T/(2π))−1) with an omitted O(ln T) term as T→∞. It plots no zeros and certifies no counts.',
  stakes:'At a chosen height, a plausible count estimate is logically different from identifying and accounting for every zero.',
  teaser:'Move a height slider to compare two independently labelled quantities.',
  sources:SOURCE_DUNGEON,children:['dungeon-count-exhibit']
 },
 'dungeon-methods':{
  id:'dungeon-methods',parent:'dungeon',type:'site',name:'The Completeness Workshop',
  subtitle:'From candidate roots to rigorous finite certification',status:'Proof-method exposition · not new computation',
  concept:'Numerical root guesses locate possible line zeros; rigorous enclosures certify sign decisions; a separate total-zero count can show whether any strip zeros were missed.',
  progress:'Riemann–Siegel evaluations and Turing-style zero accounting help explain why proof methods need both reliable arithmetic and completeness, not merely attractive dots.',
  stakes:'Failing to check completeness can hide off-line zeros even if many line zeros are found.',
  teaser:'Explore root estimation, interval certificates and completeness checks.',
  sources:SOURCE_DUNGEON,children:['dungeon-certification-exhibit']
 },
 'dungeon-height-exhibit':{
  id:'dungeon-height-exhibit',parent:'dungeon-cert',type:'exhibit',name:'Verification Ledger',
  subtitle:'Published height versus historically reported counts',status:'Published 2021 result · historical reference',
  concept:'Platt–Trudgian proved rigorously that all nontrivial zeros with 0<Im(ρ)≤3×10¹² are simple and lie on Re(ρ)=½. The height 3×10¹² is not the number of zeros checked.',
  progress:'DLMF reports 1986 verification of the first ten billion zeros on the line, a separately described count milestone. The chart keeps those units distinct.',
  stakes:'Even a fully certified finite interval cannot settle all future imaginary heights.',
  teaser:'Compare different measurement units without conflating height with count.',
  sources:SOURCE_DUNGEON,children:[],exhibit:'dungeon-height'
 },
 'dungeon-count-exhibit':{
  id:'dungeon-count-exhibit',parent:'dungeon-counting',type:'exhibit',name:'Height–Count Compass',
  subtitle:'Interactive Riemann–von Mangoldt asymptotic estimate',status:'Asymptotic mathematics · noncertifying calculator',
  concept:'N(T)=T/(2π)·(ln(T/(2π))−1)+O(ln T) as T tends to infinity. N(T) is integer and counts zeros with multiplicity; its displayed main term is generally not integer.',
  progress:'Move between T=100 and the published rigorous height 3×10¹² to see the estimate only. No exact N(T) value, zero ordinate or finite certificate is produced by the app.',
  stakes:'An estimator cannot substitute for rigorous checking that ALL zeros were accounted for in a finite region.',
  teaser:'Compare height against indicative zero-count growth with distinct units.',
  sources:SOURCE_DUNGEON,children:[],exhibit:'dungeon-count'
 },
 'dungeon-certification-exhibit':{
  id:'dungeon-certification-exhibit',parent:'dungeon-methods',type:'exhibit',name:'Certificate Procedure Table',
  subtitle:'What makes a numerical claim rigorous?',status:'Methodology exposition · rounded historical examples',
  concept:'Interval error enclosures can validate critical-line sign changes; a separate complete count of all strip zeros is needed to rule out missed off-line zeros.',
  progress:'Review the steps and view three rounded first-zero ordinates labelled as reference examples only. They are not numerically certified by the atlas.',
  stakes:'Rigor is a logical procedure with controlled error and completeness, not a smooth plot or an unsourced list of coordinates.',
  teaser:'Toggle the verification stage and read its mathematical obligation.',
  sources:[...SOURCE_DUNGEON,{name:'Andrew Odlyzko · original high-precision table of first 100 zero ordinates',url:'https://www-users.cse.umn.edu/~odlyzko/zeta_tables/zeros2'}],children:[],exhibit:'dungeon-method'
 },

 'keep-classical': {
  id:'keep-classical',parent:'keep',type:'site',name:'The Classical Bastion',
  subtitle:'A published logarithmic zero-free region',status:'Proved · explicit 2024 published bound',
  concept:'Mossinghoff, Trudgian and Yang prove ζ(σ+it)≠0 for σ≥1−1/(5.558691 ln|t|) when |t|≥2. Natural logarithm and absolute imaginary height are essential.',
  progress:'The constant is explicit and effective on its stated range; it is not a universal zero-free guarantee for ½<σ<1, nor asserted here as the latest record.',
  stakes:'The region approaches Re(s)=1 as |t| grows and leaves a gap to the critical line.',
  teaser:'Compare the exact published logarithmic boundary at different heights.',
  sources:SOURCE_KEEP,children:['keep-comparison-exhibit']
 },
 'keep-vk': {
  id:'keep-vk',parent:'keep',type:'site',name:'The Korobov Tower',
  subtitle:'Published Vinogradov–Korobov-shaped bound',status:'Proved · explicit 2024 published bound',
  concept:'Mossinghoff, Trudgian and Yang prove ζ(σ+it)≠0 for σ≥1−1/[55.241 (ln|t|)^(2/3)(ln ln|t|)^(1/3)] when |t|≥3.',
  progress:'The improved power-log form can outperform this particular classical bound at sufficiently immense heights; the validity domain and exact constants must remain attached.',
  stakes:'A stronger asymptotic boundary is still not a proof that every nontrivial zero lies on the central line.',
  teaser:'Explore the height dependence and compare with the classical bastion.',
  sources:SOURCE_KEEP,children:['keep-vk-exhibit']
 },
 'keep-geometry-exhibit':{
  id:'keep-geometry-exhibit',parent:'keep-boundary',type:'exhibit',name:'The Outer Wall Coordinate Chart',subtitle:'Trivial zeros, critical line and the pole',
  status:'Established facts · schematic plane',concept:'The Euler product gives nonvanishing for σ>1; Hadamard and de la Vallée Poussin proved nonvanishing on σ=1 except at s=1, which is a pole.',
  progress:'The only zeros with Re(s)≤0 are the negative even integers. The critical strip is 0<σ<1, and RH concerns zeros within it.',stakes:'A pole is not a zero and not a counterexample; a generic strip point is not a known zero.',teaser:'See the exact zero/pole taxonomy on a labelled schematic plane.',
  sources:SOURCE_KEEP,children:[],exhibit:'keep-geometry'
 },
 'keep-comparison-exhibit':{
  id:'keep-comparison-exhibit',parent:'keep-classical',type:'exhibit',name:'Logarithmic Boundary Comparator',subtitle:'Height-sensitive guaranteed boundaries',
  status:'Published rigorous formulas · computed boundary values',concept:'At |t|≥10 the interface evaluates two theorem boundaries, each known to be zero-free at and to the right of its σ threshold.',progress:'Move the height parameter to read admissible regions. This does not sample ζ or plot actual zeros.',stakes:'Neither theorem covers the entire off-line strip, and a stronger bound is still not RH.',
  teaser:'Change absolute height and compare the 2024 published zero-free formulas.',sources:SOURCE_KEEP,children:[],exhibit:'keep-boundaries'
 },
 'keep-vk-exhibit':{
  id:'keep-vk-exhibit',parent:'keep-vk',type:'exhibit',name:'Vinogradov–Korobov Boundary Comparator',subtitle:'When the power-log form overtakes the classical',
  status:'Published rigorous formulas · computed boundary values',concept:'The Vinogradov–Korobov-form inequality is valid at |t|≥3; this comparator uses |t|≥10 and evaluates its exact 2024 published boundary.',progress:'Compare it against the 5.558691 classical bound with all domains labelled.',stakes:'Even a sharper known zero-free edge remains near σ=1, not σ=½.',teaser:'See how the two proved boundaries change with height.',
  sources:SOURCE_KEEP,children:[],exhibit:'keep-boundaries'
 },

  'density-exponent-exhibit': {
    id:'density-exponent-exhibit',parent:'density-guth',type:'exhibit',name:'The Density Exponent Bench',
    subtitle:'Sigma and asymptotic height-scale controls',status:'Published theorem · symbolic exponent demonstration',
    concept:'The authors define their N(σ,T) using both signs of Im(ρ), with Re(ρ)≥σ. Their theorem gives exponent 15(1−σ)/(3+5σ); together with Ingham, a uniform exponent 30(1−σ)/13 over the usual 1/2≤σ≤1 range.',
    progress:'Compare the σ-dependent exponent, its uniform 30/13 corollary and the older 12/5 exponent. All are asymptotic statements as T→∞ and hide o(1) factors; no numerical zero counts are estimated.',
    stakes:'A power bound can control potential exceptions without proving that no exceptional zeros exist.',
    teaser:'Adjust σ and log-height to see exponent tradeoffs, never claimed as zero data.',
    sources:SOURCE_DENSITY,children:[],exhibit:'density-exponents'
  },
  'density-definition-exhibit': {
    id:'density-definition-exhibit',parent:'density-idea',type:'exhibit',name:'Sparse Is Not Zero',
    subtitle:'Counts, zero-free claims, and RH',status:'Definitions · logical distinction',
    concept:'N(T) counts 0<Im(ρ)≤T; N⁺(σ,T) further counts Re(ρ)≥σ, in each case with multiplicity. The plus sign distinguishes this positive-height convention from the authors’ two-sided rectangle.',
    progress:'A density theorem bounds N⁺(σ,T) asymptotically; a zero-free theorem establishes absence in its stated domain; RH asks for zero off-line exceptions at every height.',
    stakes:'An upper bound that grows with T cannot be treated as a proof that the counting function vanishes.',
    teaser:'Compare different mathematical claims and their quantifiers.',
    sources:SOURCE_DENSITY,children:[],exhibit:'density-meaning'
  },
  'hall-levinson': {
    id: 'hall-levinson', parent: 'hall', type: 'chamber', name: "Levinson's Workshop",
    subtitle: '1974 · from existence to proportion', status: 'Classical result',
    concept: "Norman Levinson's work established that more than one third of the nontrivial zeros lie on the critical line. This is stronger than merely showing there are infinitely many such zeros.",
    progress: 'Proportion bounds are statements about the limiting share of zeros as height grows. They leave open the possibility that other zeros occur away from the line.',
    stakes: 'The workshop connects historical existence results to the quantitative work of the present day.',
    teaser: 'A workshop for the transition from infinitely many to measurable proportions.',
    sources: SOURCE_DLMF, children: [], room: 'levinson'
  },
  'hall-mollifier': {
    id: 'hall-mollifier', parent: 'hall', type: 'chamber', name: 'Mollifier Laboratory',
    subtitle: 'Analytic method · a guided introduction', status: 'Expository / established methods',
    concept: 'A mollifier is a carefully chosen short Dirichlet polynomial, used in analytic number theory to damp troublesome fluctuations and help estimate zero proportions.',
    progress: 'Mollifier methods support lower bounds for zeros on the line. This room introduces an idea, not a claim to calculate or certify any individual zero.',
    stakes: 'See why the gap between a substantial proportion and every zero is mathematically significant.',
    teaser: 'Methods for understanding averages and zero proportions.',
    sources: SOURCE_DLMF, children: [], room: 'mollifier'
  },
  'hall-critical': {
    id: 'hall-critical', parent: 'hall', type: 'chamber', name: 'Critical Line Observatory',
    subtitle: 'Coordinates · the strip and its centre', status: 'Educational schematic',
    concept: 'A complex coordinate s = σ + it has real part σ and imaginary part t. The critical strip is 0 < σ < 1 and its midline is σ = 1/2.',
    progress: 'Enter the coordinate explorer to move a freely chosen point; this demonstrates geometry only and does not evaluate ζ(s).',
    stakes: 'Understand exactly what the Riemann Hypothesis would require of every nontrivial zero.',
    teaser: 'The hands-on starting point for interpreting zero locations.',
    sources: SOURCE_DLMF, children: ['critical-line-exhibit'], room: 'critical'
  },
  'critical-line-exhibit': {
    id: 'critical-line-exhibit', parent: 'hall-critical', type: 'exhibit',
    name: 'Critical Strip Coordinate Explorer', subtitle: 'A point is not a zero',
    status: 'Schematic · no zeta computation',
    concept: 'Move a point s = σ + it on a coordinate diagram. Setting σ = 1/2 puts the point on the critical line but does not make it a zero of the zeta function.',
    progress: 'Every nontrivial zeta zero is known to lie in the strip 0 < Re(s) < 1. The Riemann Hypothesis asks whether all such zeros lie on Re(s) = 1/2.',
    stakes: 'Neither a diagram nor checking finitely many zeros can settle a claim about all nontrivial zeros.',
    teaser: 'Choose coordinates and inspect their location relative to the line.',
    sources: SOURCE_DLMF, children: [], exhibit: 'critical-strip', viewBounds: {x: 0, y: 0, w: 580, h: 320}
  },
  'zero-types-exhibit': {
    id:'zero-types-exhibit', parent:'hall-critical',type:'exhibit',
    name:'Zero, Pole or Just a Point?',subtitle:'Identify what the coordinates mean',
    status:'Established classifications · schematic visual',
    concept:'Trivial zeros occur at negative even integers. The zeta function has a simple pole at 1. A generic point on the critical line need not be a zeta zero.',
    progress:'The selectable examples distinguish exact mathematical facts from arbitrary, untested complex coordinates. No finite plot proves RH.',
    stakes:'Prevents the most common confusion between a line, a zero, and the pole.',
    teaser:'Choose examples and distinguish verified facts from untested coordinates.',
    sources:SOURCE_DLMF,children:[],exhibit:'zero-taxonomy'
  },
  'hardy-signs-exhibit': {
    id:'hardy-signs-exhibit',parent:'hall-hardy',type:'exhibit',
    name:'Hardy’s Sign-Change Window',subtitle:'Continuous functions and zeros',
    status:'Established theorem context · exact toy illustration',
    concept:'A continuous real function changing sign between two points must vanish somewhere in between. Hardy proved infinitely many critical-line zeros using the zeta-derived real-valued Z(t).',
    progress:'The adjustable sine wave is a different toy function, not a calculation of zeta or a proof of Hardy’s infinite result.',
    stakes:'Learn why a finite picture and an infinity theorem have fundamentally different logical strength.',
    teaser:'Increase the number of toy oscillations and distinguish the argument from its illustration.',
    sources:SOURCE_DLMF,children:[],exhibit:'hardy-signs'
  },
  'milestones-exhibit': {
    id:'milestones-exhibit',parent:'hall-levinson',type:'exhibit',
    name:'Proportion Milestone Comparator',subtitle:'Existence is not a percentage',
    status:'Classical results + labelled 2026 preprint claim',
    concept:'Hardy, Selberg, Levinson, Conrey and later work prove increasingly quantitative statements; one must distinguish infinitely many from a positive fraction and a lower bound from 100%.',
    progress:'Select a result to view its quantifier and asymptotic lower bound; avoid interpreting the bar as a census of observed zeros.',
    stakes:'Explains the logical gap between lower bounds and RH’s universal quantification.',
    teaser:'Compare milestones, limiting proportions and their different logical strengths.',
    sources:[...SOURCE_DLMF,{name:'Conrey (1989) journal paper',url:'https://eudml.org/doc/153151'},...SOURCES_2026],children:[],exhibit:'milestones'
  },
  'mollifier-toy-exhibit': {
    id:'mollifier-toy-exhibit',parent:'hall-mollifier',type:'exhibit',
    name:'The Toy Mollifier Bench',subtitle:'An inverse-shaped multiplier',
    status:'Exact toy algebra · not a zeta computation',
    concept:'Multiplying (1+a cos x) by (1−a cos x) yields 1−a² cos² x. This elementary illustration is not the analytic Dirichlet-polynomial construction used in mollifier proofs.',
    progress:'Vary a and compare original and product waves. The toy identity illustrates why inverse-shaped factors can damp variation without establishing any zeta theorem.',
    stakes:'Understand the method’s intuition without mistaking algebraic play for proof.',
    teaser:'Modify the amplitude of two toy curves and see the exact product.',
    sources:[...SOURCE_DLMF,{name:'Conrey (1989) journal paper',url:'https://eudml.org/doc/153151'}],children:[],exhibit:'toy-mollifier'
  },
  'research-comparison-exhibit': {
    id:'research-comparison-exhibit',parent:'hall-2026',type:'exhibit',
    name:'2026 Preprint Comparison Desk',subtitle:'Simple, distinct, on-line and unions',
    status:'Research preprints · checked 28 October 2026',
    concept:'Alpöge–Furman and Lamzouri report unconditional lower bounds for simple and on-line zeros and distinct zeros, using different methods. Definitions and set combinations matter.',
    progress:'Compare the authors’ preprint statements; do not turn the asymptotic bounds into a complete list of zeros, a peer-review claim or a proof of RH.',
    stakes:'Learn the distinction between simple AND on-line, simple OR on-line, and merely distinct.',
    teaser:'Inspect separately attributed 2026 preprint claims and their denominators.',
    sources:SOURCES_2026,children:[],exhibit:'preprint-desk'
  }
};


const SOURCE_OUTER = {
 selberg:[
  {name:'Farmer, Strong multiplicity one for the Selberg class, Mathematika (2021)',url:'https://londmathsoc.onlinelibrary.wiley.com/doi/full/10.1112/mtk.12093'},
  {name:'Selberg class axioms and examples · scholarly survey',url:'https://www.math.ubc.ca/~gerg/teaching/613-Winter2011/SelbergClass.pdf'}
 ],
 grand:[
  {name:'James Arthur, Lectures on automorphic L-functions',url:'https://www.math.toronto.edu/arthur/pdf/automorphic-L.pdf'},
  {name:'Automorphic L-functions, local Euler factors and zero-density context (2021)',url:'https://www.mdpi.com/2227-7390/9/17/2061'}
 ],
 grh:[
  {name:'NIST DLMF §25.15, Dirichlet L-functions and zeros',url:'https://dlmf.nist.gov/25.15'},
  {name:'NIST DLMF §27.8, Dirichlet characters',url:'https://dlmf.nist.gov/27.8'}
 ],
 erh:[
  {name:'Keith Conrad, Gaussian Integers, Theorem 9.7',url:'https://kconrad.math.uconn.edu/math5230f12/handouts/Zinotes.pdf'},
  {name:'Harvard algebraic number theory notes, Dedekind zeta and Euler factors',url:'https://people.math.harvard.edu/~achenjang/assets/pdf/Fall_2020_Course_Notes.pdf'}
 ]
};
const OUTER_ADDITIONS = {
 'selberg-axioms':{
  id:'selberg-axioms',parent:'selberg',type:'site',name:'The Five-Axiom Archive',subtitle:'Five conditions, one defined class',status:'Classical definition · research classification open',
  concept:'The classical Selberg class S is defined by an absolutely convergent Dirichlet series for Re(s)>1, meromorphic continuation with possible pole only at one, a gamma-factor functional equation, an Oε(n^ε) coefficient condition and a prime-power-supported Euler-product axiom.',
  progress:'Membership of a particular L-function demands these hypotheses. Conjectural classification and universal identification with automorphic L-functions are separate open questions.',
  stakes:'A definition is not a proof that every object of interest belongs to the class.',teaser:'Turn five precise axioms over, one at a time.',
  sources:SOURCE_OUTER.selberg,children:['selberg-axioms-exhibit']
 },
 'selberg-axioms-exhibit':{
  id:'selberg-axioms-exhibit',parent:'selberg-axioms',type:'exhibit',name:'Axiom Compass',subtitle:'Select the defining hypotheses without confusing them with conjectures',status:'Exact definition · educational selector',
  concept:'The Selberg class is a class of specific Dirichlet series, not a single Riemann hypothesis.',progress:'Each selected axiom displays its scope and a warning against overgeneralisation.',stakes:'Analyticity, arithmetic and functional equations serve different roles.',teaser:'Inspect all five defining gates.',
  sources:SOURCE_OUTER.selberg,children:[],exhibit:'outer-selberg'
 },
 'grand-automorphic':{
  id:'grand-automorphic',parent:'grand',type:'site',name:'The Automorphic Observatory',subtitle:'GL(1), GL(2), GL(n) · a taxonomy not a proof chain',status:'Automorphic context · global conjecture remains open',
  concept:'In this atlas Grand RH refers to a zero-location conjecture for relevant standard automorphic L-functions, in the normalizations where their functional equations have central line Re(s)=1/2.',
  progress:'Dirichlet and modular-form examples help orient the subject; Langlands also investigates representations, local factors and functoriality, not solely zeros.',
  stakes:'One must fix both the family of L-functions and its normalization when making a global statement.',
  teaser:'Visit three doorways into the automorphic programme.',sources:SOURCE_OUTER.grand,children:['grand-automorphic-exhibit']
 },
 'grand-automorphic-exhibit':{
  id:'grand-automorphic-exhibit',parent:'grand-automorphic',type:'exhibit',name:'Automorphic Doorways',subtitle:'Families and caveats from degree one to higher rank',status:'Sourced conceptual taxonomy · no computational zero test',
  concept:'Standard automorphic L-functions can be organized through representation-theoretic settings; known analytic properties depend on the precise family.',
  progress:'Compare GL(1), GL(2), and higher rank without conflating Langlands conjectures, Selberg class membership or RH.',
  stakes:'There is no geographic argument that one chosen broad conjecture subsumes every other version of GRH or ERH.',
  teaser:'Choose a family and inspect what is known or conjectured.',sources:SOURCE_OUTER.grand,children:[],exhibit:'outer-grand'
 },
 'grh-characters':{
  id:'grh-characters',parent:'grh',type:'site',name:'The Character Streets',subtitle:'Arithmetic progressions and Dirichlet L-functions',status:'Defined conjecture · exact character arithmetic',
  concept:'For this atlas Dirichlet GRH asserts that every nontrivial zero of every Dirichlet L-function has real part one half. A character modulo four assigns values 0, +1 or −1 according to residue class.',
  progress:'The convergent series L(2,χ₄) gives a direct finite arithmetic example; its Euler product and zeros are very different questions.',
  stakes:'Computing an L-series value at s=2 does not test zero locations in the critical strip.',
  teaser:'Calculate a finite character-weighted Dirichlet series with a rigorous tail bound.',sources:SOURCE_OUTER.grh,children:['grh-characters-exhibit']
 },
 'grh-characters-exhibit':{
  id:'grh-characters-exhibit',parent:'grh-characters',type:'exhibit',name:'Modulo-Four Character Laboratory',subtitle:'A nonprincipal Dirichlet character and a convergent L-series',status:'Exact finite arithmetic · rigorous coarse tail inequality',
  concept:'The character χ₄ is 0 on even integers, +1 on n≡1 mod 4, and −1 on n≡3 mod 4. It defines an L-function by a Dirichlet series for Re(s)>1.',
  progress:'Compute ∑n≤N χ₄(n)/n² with absolute tail at most 1/N; no zeros are being searched for.',
  stakes:'Even a rigorously bounded value away from the strip does not establish GRH.',teaser:'Move the series cutoff and inspect the certified elementary error bound.',
  sources:SOURCE_OUTER.grh,children:[],exhibit:'outer-grh'
 },
 'erh-gaussian':{
  id:'erh-gaussian',parent:'erh',type:'site',name:'The Gaussian Number-Field Gate',subtitle:'Dedekind zeta and the prime ideals of Q(i)',status:'ERH convention · exact algebraic example',
  concept:'Here ERH is the conjecture that every nontrivial zero of every number-field Dedekind zeta function lies on Re(s)=1/2. A Dedekind zeta function counts nonzero ideals by absolute norm.',
  progress:'For the Gaussian field Q(i), rational primes split, stay inert, or ramify. These proved patterns determine the local Euler factors of its Dedekind zeta function.',
  stakes:'Prime splitting is understood in this example; the global zero-location assertion remains unproved.',
  teaser:'Select primes and watch their exact number-field splitting pattern.',sources:SOURCE_OUTER.erh,children:['erh-gaussian-exhibit']
 },
 'erh-gaussian-exhibit':{
  id:'erh-gaussian-exhibit',parent:'erh-gaussian',type:'exhibit',name:'Gaussian Prime-Splitting Atlas',subtitle:'Prime ideals and Dedekind zeta local Euler factors',status:'Established algebra · not a Dedekind zero calculation',
  concept:'In Z[i], prime two ramifies, a prime p≡1 mod4 splits, and p≡3 mod4 stays inert.',
  progress:'The Euler factors at p follow the norms of prime ideals above p; the displayed formulas are exact in Re(s)>1.',
  stakes:'An explicit Euler factor does not prove the Extended Riemann Hypothesis.',
  teaser:'Choose a rational prime and inspect splitting and the zeta factor.',
  sources:SOURCE_OUTER.erh,children:[],exhibit:'outer-erh'
 }
};

export const LOCATIONS = Object.fromEntries([
  ...REGIONS.map(region => [region.id, {
    ...region, type: 'region', parent: null,
    children: region.id === 'hall' ? HALL_ORDER : [...(region.subnodes || [])],
    viewBounds: region.focus, sourceIds: (region.sources || []).map(item => item.url)
  }]),
  ...Object.values(SUBNODES).map(node => [node.id, {
    ...node, type: 'site', children: [], sourceIds: (node.sources || []).map(item => item.url)
  }]),
  ...Object.values(OUTER_ADDITIONS).map(node => [node.id, {...node, sourceIds: (node.sources || []).map(item=>item.url)}]),
  ...Object.values(ADDITIONS).map(node => [node.id, {
    ...node, sourceIds: (node.sources || []).map(item => item.url)
  }])
]);

// Keep the existing IDs and stories but give the two Hall sites semantic room identities.
LOCATIONS['hall-hardy'].type = 'chamber';
LOCATIONS['hall-hardy'].room = 'hardy';
LOCATIONS['hall-hardy'].teaser = 'Hardy proved infinitely many zeta zeros lie on the critical line.';
LOCATIONS['hall-2026'].type = 'chamber';
LOCATIONS['hall-2026'].room = 'research';
LOCATIONS['hall-2026'].teaser = '2026 research preprints on zero proportions, not a proof of RH.';
LOCATIONS['hall-2026'].sources = SOURCES_2026;
LOCATIONS['hall-hardy'].children = ['hardy-signs-exhibit'];
LOCATIONS['hall-levinson'].children = ['milestones-exhibit'];
LOCATIONS['hall-mollifier'].children = ['mollifier-toy-exhibit'];
LOCATIONS['hall-2026'].children = ['research-comparison-exhibit'];
LOCATIONS['hall-critical'].children.push('zero-types-exhibit');

// Retain pre-S004 public IDs and their parent links while making both sites traversable.
LOCATIONS['density-guth'].children = ['density-exponent-exhibit'];
LOCATIONS['density-guth'].status = 'Guth–Maynard · Annals of Mathematics (2026)';
LOCATIONS['density-guth'].concept = 'Guth and Maynard proved zero-density estimates, including N(σ,T) with exponent 30(1−σ)/13+o(1) as T→∞. The estimate counts possible zeros in a rectangle, rather than excluding them.';
LOCATIONS['density-guth'].progress = 'The 2024 preprint was published online 1 March 2026 in the peer-reviewed Annals. The author manuscript gives a σ-dependent estimate and a combined 30/13 corollary; which exponent is lower depends on σ.';
LOCATIONS['density-guth'].sources = SOURCE_DENSITY;
LOCATIONS['density-guth'].sourceIds = SOURCE_DENSITY.map(item => item.url);
LOCATIONS['density-guth'].teaser = 'A published theorem with an interactive asymptotic exponent chart.';
LOCATIONS['density-idea'].children = ['density-definition-exhibit'];
LOCATIONS['density-idea'].sources = SOURCE_DENSITY;
LOCATIONS['density-idea'].sourceIds = SOURCE_DENSITY.map(item => item.url);
LOCATIONS['density-idea'].teaser = 'Why very few potential exceptions is different from none.';
// Extend the S001 Keep ID instead of replacing its historic hash.
LOCATIONS.keep.children = ['keep-boundary','keep-classical','keep-vk'];
LOCATIONS.keep.sources = SOURCE_KEEP;
LOCATIONS.keep.sourceIds = SOURCE_KEEP.map(s=>s.url);
LOCATIONS['keep-boundary'].children = ['keep-geometry-exhibit'];
LOCATIONS['keep-boundary'].sources = SOURCE_KEEP;
LOCATIONS['keep-boundary'].sourceIds = SOURCE_KEEP.map(s=>s.url);
LOCATIONS['keep-boundary'].teaser = 'The Euler-product outer wall, critical strip and exact zero/pole distinctions.';
// S006: extend the original #dungeon and #dungeon-cert hashes without replacing them.
LOCATIONS.dungeon.children = ['dungeon-cert','dungeon-counting','dungeon-methods'];
LOCATIONS.dungeon.sources = SOURCE_DUNGEON;
LOCATIONS.dungeon.sourceIds = SOURCE_DUNGEON.map(item=>item.url);
LOCATIONS['dungeon-cert'].children = ['dungeon-height-exhibit'];
LOCATIONS['dungeon-cert'].sources = SOURCE_DUNGEON;
LOCATIONS['dungeon-cert'].sourceIds = SOURCE_DUNGEON.map(item=>item.url);
LOCATIONS['dungeon-cert'].teaser = 'Published certified height, historically counted zeros, and why the units differ.';

// S007: expand only the pre-existing outer-region IDs and preserve historic routes.
for (const [root,site] of Object.entries({selberg:'selberg-axioms',grand:'grand-automorphic',grh:'grh-characters',erh:'erh-gaussian'})){
 LOCATIONS[root].children=[site];
 LOCATIONS[root].sources=SOURCE_OUTER[root];
 LOCATIONS[root].sourceIds=SOURCE_OUTER[root].map(item=>item.url);
}
export const getLocation = id => (id ? LOCATIONS[id] : null) || null;
export const getParentLocation = id => getLocation(getLocation(id)?.parent);
export function getAncestors(id) {
  const path = [];
  const visited = new Set();
  let current = getLocation(id);
  while (current) {
    if (visited.has(current.id)) return []; // A cycle cannot be represented as a route.
    visited.add(current.id);
    path.unshift(current.id);
    current = getParentLocation(current.id);
  }
  return path;
}
export const getRootRegion = id => getAncestors(id)[0] || null;
export const isHallLocation = id => getRootRegion(id) === 'hall';
export function validateLocations() {
  const errors = [];
  for (const [key, node] of Object.entries(LOCATIONS)) {
    if (key !== node.id) errors.push('Key/ID mismatch: ' + key);
    if (node.parent && !LOCATIONS[node.parent]) errors.push('Missing parent for ' + key);
    if (!node.parent && node.type !== 'region') errors.push('Unexpected root: ' + key);
    if (new Set(node.children).size !== node.children.length) errors.push('Duplicate children for ' + key);
    for (const child of node.children) {
      if (!LOCATIONS[child]) errors.push('Missing child: ' + key + ' -> ' + child);
      else if (LOCATIONS[child].parent !== key) errors.push('Parent mismatch: ' + key + ' -> ' + child);
    }
    if (node.parent && !LOCATIONS[node.parent]?.children.includes(key)) errors.push('Missing reverse child: ' + key);
    const visited = new Set();
    let cursor = node;
    while (cursor) {
      if (visited.has(cursor.id)) { errors.push('Cycle at ' + key); break; }
      visited.add(cursor.id);
      cursor = LOCATIONS[cursor.parent];
    }
  }
  return errors;
}
const locationErrors = validateLocations();
if (locationErrors.length) throw new Error('Invalid Citadel locations: ' + locationErrors.join('; '));

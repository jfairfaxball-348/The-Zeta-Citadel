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
const ADDITIONS = {
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

export const LOCATIONS = Object.fromEntries([
  ...REGIONS.map(region => [region.id, {
    ...region, type: 'region', parent: null,
    children: region.id === 'hall' ? HALL_ORDER : [...(region.subnodes || [])],
    viewBounds: region.focus, sourceIds: (region.sources || []).map(item => item.url)
  }]),
  ...Object.values(SUBNODES).map(node => [node.id, {
    ...node, type: 'site', children: [], sourceIds: (node.sources || []).map(item => item.url)
  }]),
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

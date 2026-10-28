// S008 — independently audited edges, not inferred from spatial hierarchy.
import {LOCATIONS} from './locations.js';

export const CONNECTION_TYPES = Object.freeze({
  proved_implication: {label:'Proved implication', hint:'The stated hypothesis entails the exact conclusion, with scope shown.', symbol:'⇒'},
  conditional_dependency: {label:'Conditional dependency', hint:'A conclusion follows only if the unproved premise holds.', symbol:'⇢'},
  historical_influence: {label:'Historical influence', hint:'A documented line of mathematical development, not a logical entailment.', symbol:'→'},
  conceptual_analogy: {label:'Conceptual analogy', hint:'Related ideas or methods, without mathematical implication.', symbol:'↔'}
});

const DLMF_ZETA = {name:'NIST DLMF `25.10 — zeros and the Riemann hypothesis',url:'https://dlmf.nist.gov/25.10'};
const DLMF_DIRICHLET = {name:'NIST DLMF `25.15 — Dirichlet L-functions',url:'https://dlmf.nist.gov/25.15'};
const HARVARD_NUMBER_FIELDS = {name:'Harvard algebraic number theory notes — Dedekind zeta, Definition 2.6.6',url:'https://people.math.harvard.edu/~achenjang/assets/pdf/Fall_2020_Course_Notes.pdf'};
const GUTH_MAYNARD = {name:'Guth and Maynard, Annals of Mathematics 203 (2026), 623–675',url:'https://annals.math.princeton.edu/2026/203-2/p06'};
const CONREY = {name:'J. B. Conrey, More than two fifths of the zeros, J. reine angew. Math. 399 (1989), `1',url:'https://maths.dur.ac.uk/users/herbert.gangl/morethan2_5.PDF'};

export const CONNECTIONS = Object.freeze([
  {
    id:'dirichlet-grh-rh', from:'grh-characters', to:'hall-critical', type:'proved_implication', directed:true,
    title:'Universal Dirichlet GRH entails RH',
    claim:'Assuming all Dirichlet L-functions have every nontrivial zero on Re(s)=1/2, the same follows for the Riemann zeta function.',
    scope:'The universal Dirichlet hypothesis includes the unique principal character modulo 1; its L-series is exactly ζ(s). This is a mathematical implication between statements, not proof that either conjecture holds.',
    status:'Established deduction from definitions; conjectural premise', reviewDate:'2026-10-28',
    sources:[DLMF_DIRICHLET,DLMF_ZETA]
  },
  {
    id:'dedekind-erh-rh', from:'erh-gaussian', to:'hall-critical', type:'proved_implication', directed:true,
    title:'All-number-fields Dedekind ERH entails RH',
    claim:'If all Dedekind zeta functions of number fields satisfy their critical-line hypothesis, then ζ(s) does too.',
    scope:'ERH means, here only, the universal Dedekind-zeta hypothesis over every number field, including Q. By definition ζ_Q(s)=ζ(s). The Gaussian example at the source node is illustrative, not itself enough for this implication.',
    status:'Established deduction from definitions; conjectural premise', reviewDate:'2026-10-28',
    sources:[HARVARD_NUMBER_FIELDS,DLMF_ZETA]
  },
  {
    id:'rh-zero-free-half', from:'hall-critical', to:'keep-boundary', type:'conditional_dependency', directed:true,
    title:'If RH, then the off-line half-strip is empty',
    claim:'Under RH, ζ has no nontrivial zeros with 1/2 < Re(s) < 1.',
    scope:'The antecedent RH remains unproved. Existing unconditional zero-free boundaries in the Keep are narrower and do not establish RH. Restriction to nontrivial zeros is essential.',
    status:'Conditional consequence of an open conjecture', reviewDate:'2026-10-28',
    sources:[DLMF_ZETA]
  },
  {
    id:'rh-density-zero', from:'hall-critical', to:'density-guth', type:'conditional_dependency', directed:true,
    title:'If RH, then the off-line zero count vanishes',
    claim:'For every fixed σ strictly greater than 1/2, RH would force N(σ,T)=0 in the conventional critical-strip zero-density rectangle.',
    scope:'The Guth–Maynard upper bound allows possible exceptional zeros; it does not prove their absence. Statement assumes the usual N(σ,T) counting zeros with β≥σ and bounded imaginary part, for 1/2<σ<1.',
    status:'Conditional consequence; Guth–Maynard theorem published 2026', reviewDate:'2026-10-28',
    sources:[DLMF_ZETA,GUTH_MAYNARD]
  },
  {
    id:'hardy-levinson-history', from:'hall-hardy', to:'hall-levinson', type:'historical_influence', directed:true,
    title:'From infinite critical-line zeros to positive proportion',
    claim:'Hardy’s existence theorem preceded Levinson’s theorem that at least one-third of the zeros lie on the critical line.',
    scope:'Historical mathematical progression, as reviewed in Conrey’s 1989 introduction. This arrow indicates chronology and problem development, not deduction of Levinson from Hardy.',
    status:'Peer-reviewed historical account', reviewDate:'2026-10-28',
    sources:[CONREY]
  },
  {
    id:'levinson-mollifier-method', from:'hall-levinson', to:'hall-mollifier', type:'historical_influence', directed:true,
    title:'Levinson’s mollifier and later refinements',
    claim:'Conrey’s 1989 refinement explicitly builds on Levinson’s method and uses a longer mollifier.',
    scope:'Conrey compares mollifier lengths T^(1/2−ε) in Levinson’s work and T^(4/7−ε) in his improvement. This is methodological lineage, not an implication arrow.',
    status:'Peer-reviewed 1989 research', reviewDate:'2026-10-28',
    sources:[CONREY]
  },
  {
    id:'euler-factors-analogy', from:'grh-characters-exhibit', to:'erh-gaussian-exhibit', type:'conceptual_analogy', directed:false,
    title:'Two prime-by-prime Euler product views',
    claim:'Dirichlet L-functions use characters of rational primes; Dedekind zeta uses prime ideals and their norms.',
    scope:'Both have Euler products for Re(s)>1. Their local factors need not coincide, and neither function family is identified with the other by this analogy.',
    status:'Established definitions; conceptual comparison', reviewDate:'2026-10-28',
    sources:[DLMF_DIRICHLET,HARVARD_NUMBER_FIELDS]
  },
  {
    id:'zero-count-density-analogy', from:'dungeon-count-exhibit', to:'density-exponent-exhibit', type:'conceptual_analogy', directed:false,
    title:'Two different ways of counting zeros',
    claim:'N(T) counts all nontrivial zeros by height, whereas N(σ,T) restricts the count by real part as well as height.',
    scope:'The Dungeons asymptotic comparator is not an exact finite count; the Courtyard bound is an upper bound on a subset, not proof that the subset is empty. No conversion is inferred from a drawn link.',
    status:'Established definitions and published zero-density research', reviewDate:'2026-10-28',
    sources:[DLMF_ZETA,GUTH_MAYNARD]
  }
]);

export function validateConnections(edges=CONNECTIONS, nodes=LOCATIONS) {
  const errors=[], seen=new Set();
  for(const edge of edges) {
    if(!edge || typeof edge.id!=='string' || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(edge.id)) errors.push('Invalid edge ID');
    else if(seen.has(edge.id)) errors.push('Duplicate edge ID: '+edge.id);
    else seen.add(edge.id);
    if(!nodes[edge.from] || !nodes[edge.to]) errors.push('Missing endpoint for '+edge.id);
    if(edge.from===edge.to) errors.push('Self-edge: '+edge.id);
    if(!Object.hasOwn(CONNECTION_TYPES,edge.type)) errors.push('Invalid type: '+edge.id);
    if(edge.directed !== (edge.type!=='conceptual_analogy')) errors.push('Direction/type mismatch: '+edge.id);
    for(const key of ['title','claim','scope','status','reviewDate']) {
      if(typeof edge[key]!=='string' || !edge[key].trim()) errors.push('Missing '+key+': '+edge.id);
    }
    if(!Array.isArray(edge.sources) || !edge.sources.length) errors.push('Empty source list: '+edge.id);
    else for(const source of edge.sources) {
      if(!source || typeof source.name!=='string' || !source.name.trim() || typeof source.url!=='string' || !/^https:\/\/[^/.\s]+\.[^/\s]+/.test(source.url)) errors.push('Invalid source: '+edge.id);
    }
    if(edge.reviewDate && !/^\d{4}-\d{2}-\d{2}$/.test(edge.reviewDate)) errors.push('Invalid review date: '+edge.id);
  }
  return errors;
}
const invalid=validateConnections();
if(invalid.length) throw new Error('Invalid Citadel connections: '+invalid.join('; '));

export const connectionById=id=>CONNECTIONS.find(e=>e.id===id)||null;
export const connectionRoute=id=>'connection--'+id;
export const connectionFromRoute=route=>typeof route==='string'&&route.startsWith('connection--')?connectionById(route.slice(12)):null;
export const isConnectionRoute=id=>id==='connections'||Boolean(connectionFromRoute(id));

const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const endpoint=(id)=>'<button class="connection-endpoint" data-navigate="'+esc(id)+'" aria-label="Open '+esc(LOCATIONS[id].name)+'">'+esc(LOCATIONS[id].name)+' <span aria-hidden="true">↗</span></button>';
const sourceLinks=(sources)=>sources.map(s=>'<a href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+esc(s.name)+'</a>').join('');

export function renderConnectionsMap(filter='all',selectedId=null) {
  const displayed=CONNECTIONS.filter(e=>filter==='all'||e.type===filter);
  const filters=[['all','All relationships'],...Object.entries(CONNECTION_TYPES).map(([type,value])=>[type,value.label])];
  return `<section class="connections-map" aria-label="Typed mathematical connections">
    <header class="connections-heading"><span>THE BRIDGES / 008</span><h2>Connections between ideas</h2>
      <p>Eight individually sourced connections. A geographic ring never establishes mathematical implication. Only the stated edge, scope and direction carry meaning.</p></header>
    <div class="connections-legend" aria-label="Relationship type legend">${Object.entries(CONNECTION_TYPES).map(([type,t])=>`<div><b class="connection-symbol type-${type}">${t.symbol}</b><span><strong>${esc(t.label)}</strong><small>${esc(t.hint)}</small></span></div>`).join('')}</div>
    <div class="connection-filters" role="group" aria-label="Filter relationship types">${filters.map(([type,label])=>`<button type="button" data-connection-filter="${type}" aria-pressed="${type===filter}">${esc(label)}</button>`).join('')}</div>
    <div class="connection-count" aria-live="polite">${displayed.length} of ${CONNECTIONS.length} audited relationships · select a bridge to read its evidence</div>
    <div class="connection-network" aria-label="Mathematical relationship diagram">${displayed.map(e=>`<article class="connection-card type-${e.type} ${e.id===selectedId?'connection-selected':''}">
       <div class="connection-bridge"><span class="connection-place">${endpoint(e.from)}</span><button class="connection-link" data-navigate="${connectionRoute(e.id)}" aria-label="Read evidence for ${esc(e.title)}" aria-pressed="${e.id===selectedId}"><span aria-hidden="true" class="connection-glyph">${CONNECTION_TYPES[e.type].symbol}</span><span class="connection-type">${esc(CONNECTION_TYPES[e.type].label)}</span></button><span class="connection-place">${endpoint(e.to)}</span></div>
       <button class="connection-claim" data-navigate="${connectionRoute(e.id)}">${esc(e.title)} <span aria-hidden="true">↗</span></button>
      </article>`).join('')}</div>
    <p class="connections-disclaimer">No automatic transitive closure. The arrow for historical influence marks chronology, not a proof. A two-way symbol marks analogy without implication. All mathematical statuses and dates appear in the edge records.</p>
  </section>`;
}
export function renderConnectionStory(edgeId=null) {
  const e=connectionById(edgeId);
  if(!e) return `<div class="story-head"><div class="story-eyebrow"><i></i>THE BRIDGES / CONNECTIONS</div><h2>Read the <em>arrows.</em></h2><p class="story-subtitle">Four kinds of relationship</p><p class="story-teaser">This network is a manually audited catalogue, independent of the Citadel’s geographic metaphor. Select a bridge to see its assumptions, publication status and source documents.</p></div><section class="story-section"><h3><span>01 /</span>HOW TO READ</h3><p>Proved implication is a deduction between precisely stated hypotheses and conclusions — it does not mean the conjectural premise is known true. Conditional dependency starts with an open assumption. Historical influence and conceptual analogy assert no mathematical entailment.</p></section><div class="story-actions"><button data-navigate="">← ATLAS HOME</button></div>`;
  const t=CONNECTION_TYPES[e.type];
  return `<div class="story-head"><div class="story-eyebrow"><i></i>BRIDGE / ${esc(t.label.toUpperCase())}</div><h2>${esc(e.title)}</h2><p class="story-subtitle">${esc(LOCATIONS[e.from].name)} ${t.symbol} ${esc(LOCATIONS[e.to].name)}</p><p class="story-teaser">${esc(e.claim)}</p><div class="story-status"><span class="status-icon">✦</span><div><small>EDITORIAL STATUS</small><b>${esc(e.status)}</b></div></div></div>
  <section class="story-section"><h3><span>01 /</span>WHAT THIS MEANS</h3><p>${esc(e.scope)}</p></section>
  <section class="story-section"><h3><span>02 /</span>CONNECTION TYPE</h3><p>${esc(t.hint)} Review date: ${esc(e.reviewDate)}.</p></section>
  <section class="story-section"><h3><span>03 /</span>THE TWO PLACES</h3><div class="connection-story-places">${endpoint(e.from)}${endpoint(e.to)}</div></section>
  <section class="story-section"><h3><span>04 /</span>SOURCES</h3><div class="story-sources">${sourceLinks(e.sources)}</div></section>
  <div class="story-actions"><button data-navigate="connections">← ALL BRIDGES</button><button data-navigate="">ATLAS HOME</button></div>`;
}

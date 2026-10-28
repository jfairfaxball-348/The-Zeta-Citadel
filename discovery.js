/* S009 discovery is a view over canonical locations and reviewed connections,
   never a second mathematical authority or an analytics endpoint. */
import {LOCATIONS} from './locations.js';
import {CONNECTIONS, CONNECTION_TYPES, connectionRoute, connectionFromRoute} from './connections.js';

const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
export const normalise = value => String(value ?? '').normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('en').replace(/[^\p{L}\p{N}]+/gu,' ').trim();
export const isDiscoveryRoute = id => id === 'discover' || id === 'journey--beginner' || id === 'journey--advanced';
export const JOURNEYS = Object.freeze({
  beginner: {
    name:'The first expedition', level:'BEGINNER', summary:'Six stops from the map to the critical line, certified finite evidence, and a bridge that does not imply a proof.',
    steps:[
      {route:'hall',title:'Find the heart of the map',note:'The fortress is an aid to navigation. Its boundaries are not a mathematical proof hierarchy.'},
      {route:'hall-critical',title:'Ask what RH actually asserts',note:'A conjecture about every nontrivial zero, not just a picture of some of them.'},
      {route:'zero-types-exhibit',title:'Learn which zeros count',note:'Separate trivial zeros, strip zeros and the critical line before inspecting numerical data.'},
      {route:'dungeon-height-exhibit',title:'Read a published finite check',note:'The verified height is not a count of zeros; finite certification cannot settle infinitely many heights.'},
      {route:'density-definition-exhibit',title:'Can a tiny exceptional set remain?',note:'A zero-density bound allows exceptional zeros. Fewer is not the same as none.'},
      {route:'connection--zero-count-density-analogy',title:'Cross the first bridge',note:'Compare N(T) with N(σ,T). This is a sourced conceptual analogy, not an implication.'}
    ]
  },
  advanced: {
    name:'The research cartographer', level:'ADVANCED', summary:'Seven stops comparing L-function frameworks, exact prime arithmetic, a published zero-density result and a conditional claim.',
    steps:[
      {route:'grh',title:'Fix the meaning of Dirichlet GRH',note:'The atlas adopts the universal Dirichlet L-function convention; naming is not standardized everywhere.'},
      {route:'grh-characters-exhibit',title:'Compute in the character streets',note:'A convergent Dirichlet series at s=2 has a tail bound, but is not a critical-strip zero test.'},
      {route:'erh-gaussian-exhibit',title:'Inspect Dedekind prime factors',note:'Prime splitting in Q(i) is established algebra; general ERH remains conjectural.'},
      {route:'connection--euler-factors-analogy',title:'Distinguish the families',note:'The bridge is a conceptual comparison of Euler factors, not a logical inclusion.'},
      {route:'density-guth',title:'Visit the zero-density frontier',note:'Guth–Maynard is a peer-reviewed theorem that bounds possible off-line zeros, rather than ruling them out.'},
      {route:'density-exponent-exhibit',title:'Explore an asymptotic exponent',note:'The demonstration is about an asymptotic upper-bound regime, not a finite completeness certificate.'},
      {route:'connection--rh-density-zero',title:'Read the conditional arrow',note:'If RH were true then off-line density counts vanish; RH is not thereby established.'}
    ]
  }
});
export function validateJourneys(journeys=JOURNEYS, locations=LOCATIONS, edges=CONNECTIONS) {
  const errors=[];
  for(const [key,j] of Object.entries(journeys)) {
    if(!j || !Array.isArray(j.steps) || j.steps.length<4) {errors.push('Incomplete journey: '+key);continue;}
    if(!j.name || !j.summary || !j.level) errors.push('Missing journey editorial fields: '+key);
    const seen=new Set(), bridges=[];
    for(const step of j.steps) {
      if(!step || typeof step.route!=='string' || !step.title || !step.note) {errors.push('Invalid step: '+key);continue;}
      if(!locations[step.route] && !(step.route.startsWith('connection--') && edges.some(e=>connectionRoute(e.id)===step.route))) errors.push('Missing journey destination: '+step.route);
      if(seen.has(step.route)) errors.push('Repeated journey destination: '+step.route);
      seen.add(step.route); if(step.route.startsWith('connection--')) bridges.push(step.route);
    }
    if(!bridges.length) errors.push('Journey lacks an audited bridge: '+key);
    if(!j.steps.some(s=>locations[s.route]?.type==='exhibit')) errors.push('Journey lacks sourced exhibit: '+key);
  }
  return errors;
}
const editorialErrors=validateJourneys();
if(editorialErrors.length) throw Error('Invalid journeys: '+editorialErrors.join('; '));

export function catalog() {
  return [
    ...Object.values(LOCATIONS).map(node=>({
      id:node.id, route:node.id, type:node.type, name:node.name,
      subtitle:node.subtitle||'', status:node.status||'Status unrecorded',
      sourceCount:node.sources?.length||0,
      sources:(node.sources||[]).map(s=>s.name).join(' '),
      summary:[node.teaser,node.concept,node.progress,node.stakes].filter(Boolean).join(' ')
    })),
    ...CONNECTIONS.map(edge=>({
      id:connectionRoute(edge.id),route:connectionRoute(edge.id),type:'bridge · '+CONNECTION_TYPES[edge.type].label,
      name:edge.title,subtitle:edge.claim,status:edge.status,
      sourceCount:edge.sources.length,
      sources:edge.sources.map(s=>s.name).join(' '),
      summary:edge.scope
    }))
  ];
}
export function searchAtlas(query, data=catalog()) {
  if(typeof query!=='string' || query.length>120) return [];
  const q=normalise(query);
  if(!q || q.length>100) return [];
  const words=[...new Set(q.split(' ').filter(Boolean))];
  return data.map(item=>{
    const fields=[normalise(item.id),normalise(item.name),normalise(item.subtitle),normalise(item.status),normalise(item.sources),normalise(item.summary)];
    if(!words.every(w=>fields.some(f=>f.includes(w)))) return null;
    let score=words.reduce((total,word)=>{
      if(fields[0]===word || fields[1]===word) return total+150;
      if(fields[1].startsWith(word)) return total+82;
      if(fields[1].split(' ').some(t=>t===word)) return total+62;
      if(fields[0].includes(word)) return total+57;
      if(fields[2].includes(word)) return total+40;
      if(fields[4].includes(word)) return total+25;
      if(fields[3].includes(word)) return total+13;
      return total+7;
    },0);
    if(fields[1]===q || fields[0]===q) score+=160;
    return {...item,score};
  }).filter(Boolean).sort((a,b)=>b.score-a.score || a.name.localeCompare(b.name,'en')).slice(0,30);
}
export function renderSearchResults(query) {
  const text=String(query??'');
  if(!text.trim()) return '<p class="discovery-empty">Search by theorem, mathematician, location ID, or source — try “Hardy”, “density”, “prime”, or “hall-critical”.</p>';
  if(text.length>120 || normalise(text).length>100) return '<p class="discovery-empty" role="status">The search is too long; enter up to 100 characters.</p>';
  const matches=searchAtlas(text);
  if(!matches.length) return '<p class="discovery-empty" role="status">No matching places or audited connections. Try a shorter term or inspect the region index.</p>';
  return '<p class="discovery-count" role="status">'+matches.length+(matches.length===30?' or more':'')+' matching places and bridges</p><div class="discovery-results">'+matches.map(item=>'<article class="discovery-result"><button data-navigate="'+esc(item.route)+'"><strong>'+esc(item.name)+'</strong><small>'+esc(item.subtitle)+'</small><span>'+esc(item.type)+' · '+esc(item.status)+' · '+item.sourceCount+' cited sources</span></button><button class="discovery-copy" data-copy-route="'+esc(item.route)+'" aria-label="Copy deep link to '+esc(item.name)+'">COPY LINK</button></article>').join('')+'</div>';
}
function cards(items) {return items.map(id=>{
 const node=LOCATIONS[id]||connectionFromRoute(id);
 const name=LOCATIONS[id]?.name||node?.title||id;
 return '<li><button data-navigate="'+esc(id)+'">'+esc(name)+'</button><button class="discovery-copy" data-copy-route="'+esc(id)+'" aria-label="Copy link to '+esc(name)+'">LINK</button></li>';
}).join('');}
export function renderDiscoveryScene(route,{query='',saved=new Set(),completed={}}={}) {
  if(route==='discover') return '<section class="discovery-scene" aria-label="Atlas discovery"><p class="discovery-kicker">THE INDEX / S009</p><h2>Find your way through the Citadel</h2><p class="discovery-intro">Search canonical atlas places and independently audited bridges. Every result carries its actual editorial status; no diagram or finite plot proves RH.</p><label class="discovery-search-label" for="atlas-search">SEARCH THE ATLAS</label><div class="discovery-search-box"><input id="atlas-search" type="search" maxlength="120" autocomplete="off" spellcheck="false" placeholder="Theorem, author, subject, ID…" value="'+esc(query)+'" /><button id="clear-atlas-search" type="button">CLEAR</button></div><div id="discovery-results" aria-live="polite">'+renderSearchResults(query)+'</div><div class="discovery-trails"><h3>Choose a learning trail</h3>'+Object.entries(JOURNEYS).map(([id,j])=>'<button class="discovery-trail" data-navigate="journey--'+id+'"><span>'+esc(j.level)+' · '+j.steps.length+' STOPS</span><strong>'+esc(j.name)+'</strong><small>'+esc(j.summary)+'</small></button>').join('')+'</div><div class="discovery-saved"><h3>Saved places on this device</h3>'+(saved.size?'<ul>'+cards([...saved].filter(id=>LOCATIONS[id]||connectionFromRoute(id)))+'</ul>':'<p>No places saved. Open a room or bridge and select SAVE PLACE to keep a local shortcut.</p>')+'</div></section>';
  const key=route.replace('journey--',''), j=JOURNEYS[key];
  if(!j) return '';
  const done=completed[key]||new Set();
  return '<section class="discovery-scene journey-scene" aria-label="'+esc(j.level)+' learning journey"><p class="discovery-kicker">'+esc(j.level)+' / GUIDED TRAIL</p><h2>'+esc(j.name)+'</h2><p class="discovery-intro">'+esc(j.summary)+'</p><p class="journey-progress" role="status">'+done.size+' / '+j.steps.length+' stops marked complete locally (only saved between visits if you opt in).</p><ol class="journey-steps">'+j.steps.map((step,i)=>'<li class="'+(done.has(i)?'is-done':'')+'"><span class="journey-number">'+String(i+1).padStart(2,'0')+'</span><div><strong>'+esc(step.title)+'</strong><p>'+esc(step.note)+'</p><small>'+esc(LOCATIONS[step.route]?.status || connectionFromRoute(step.route)?.status || '')+'</small><div class="journey-actions"><button data-journey-step="'+esc(key)+'" data-journey-index="'+i+'" data-journey-route="'+esc(step.route)+'">OPEN STOP ↗</button><button data-copy-route="'+esc(step.route)+'">COPY LINK</button></div></div><span class="journey-done">'+(done.has(i)?'✓ READ':'')+'</span></li>').join('')+'</ol><p class="discovery-warning">Completion means “I visited this material,” not mathematical verification. Historical arrows and analogies never imply conjectures.</p><button class="discovery-back" data-navigate="discover">← SEARCH & SAVED PLACES</button></section>';
}
export function renderDiscoveryStory(route,{remember=false,storageMessage=''}={}) {
 const j=JOURNEYS[route.replace('journey--','')];
 return '<div class="story-head"><div class="story-eyebrow"><i></i>DISCOVER / THE ATLAS</div><h2>'+esc(j?j.name:'Find your next landmark')+'</h2><p class="story-teaser">'+esc(j?j.summary:'Search the whole mathematical map, choose a beginner or advanced journey, or return to your locally saved landmarks.')+'</p></div><section class="story-section"><h3><span>01 /</span>YOUR PRIVACY</h3><p>Searches run entirely in your browser. No account, cookies, remote analytics or search requests. Saved places and journey checkmarks start as session-only; choose below to retain them in this browser.</p><label class="discovery-optin"><input type="checkbox" id="remember-discovery" '+(remember?'checked':'')+'> Remember my saved places and journey progress on this device</label><p class="discovery-storage" role="status">'+esc(storageMessage)+'</p></section><section class="story-section"><h3><span>02 /</span>MATHEMATICAL KEY</h3><p>See each result’s exact editorial status and cited sources at the destination. A proved implication may have an unproved premise; a visual analogy is never an implication.</p></section><div class="story-actions"><button data-navigate="discover">SEARCH ATLAS</button><button data-navigate="">← WORLD MAP</button></div>';
}
export const escapeDiscoveryHTML=esc;

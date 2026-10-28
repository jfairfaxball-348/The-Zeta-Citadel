import assert from 'node:assert/strict';
import {REGIONS,SUBNODES} from '../atlas.js';
import {LOCATIONS,validateLocations,getAncestors} from '../locations.js';
import {CONNECTIONS,validateConnections,connectionFromRoute,connectionRoute} from '../connections.js';
import {JOURNEYS,validateJourneys,catalog,searchAtlas,renderSearchResults} from '../discovery.js';

// A release gate, not a new mathematical proof: strict topology and editorial contracts.
assert.equal(REGIONS.length,8);
assert.equal(new Set(REGIONS.map(r=>r.id)).size,8);
assert.deepEqual(validateLocations(),[]);
assert.deepEqual(validateConnections(),[]);
assert.deepEqual(validateJourneys(),[]);
const roots=Object.values(LOCATIONS).filter(n=>n.parent==null);
assert.deepEqual(new Set(roots.map(n=>n.id)),new Set(REGIONS.map(r=>r.id)));
const localIds=new Set(Object.keys(LOCATIONS));
const allRoutes=new Set([...localIds,'connections','discover','journey--beginner','journey--advanced',...CONNECTIONS.map(e=>connectionRoute(e.id))]);
assert.equal(catalog().length,localIds.size+CONNECTIONS.length);
for(const region of REGIONS)assert.equal(LOCATIONS[region.id].parent,null);
for(const key of Object.keys(SUBNODES))assert.ok(localIds.has(key),'Legacy URL missing: '+key);
for(const [id,node] of Object.entries(LOCATIONS)) {
 assert.equal(node.id,id);
 assert.ok(node.sources?.length,'No source for '+id);
 assert.ok(node.sourceIds?.length,'No canonical source ID for '+id);
 assert.ok(getAncestors(id).length>=1 && getAncestors(id).length<=localIds.size,'Unreachable node: '+id);
 for(const source of node.sources) assert.ok(/^https:\/\/[^\s?#/]+\.[^\s?#/]+/.test(source.url),'Unsafe source: '+id);
 for(const child of node.children) assert.equal(LOCATIONS[child]?.parent,id);
}
for(const [key,journey] of Object.entries(JOURNEYS)){
 for(const step of journey.steps)assert.ok(allRoutes.has(step.route),'Broken '+key+' step '+step.route);
}
for(const edge of CONNECTIONS){
 assert.ok(allRoutes.has(connectionRoute(edge.id)));
 assert.equal(connectionFromRoute(connectionRoute(edge.id)),edge);
 assert.ok(edge.sources.every(s=>s.url.startsWith('https://')));
 if(edge.type==='conceptual_analogy')assert.equal(edge.directed,false);
 if(edge.type==='proved_implication')assert.match(edge.scope,/conjectur|hypothes|premise|definition/i);
}
assert.ok(searchAtlas('hall-critical').some(i=>i.route==='hall-critical'));
assert.ok(searchAtlas('connection--dedekind-erh-rh').some(i=>i.route==='connection--dedekind-erh-rh'));
assert.ok(!renderSearchResults('<img src=x onerror=alert(1)>').includes('<img'));
const mutate=(fn,message)=>{
 const clone=structuredClone(LOCATIONS);fn(clone);
 assert.ok(validateLocations(clone).some(e=>e.includes(message)),message);
};
mutate(n=>{n.hall.children.push('missing-s010-child')},'Missing child');
mutate(n=>{n['hall-hardy'].parent='gone'},'Missing parent');
mutate(n=>{n.hall.children.push('hall-hardy')},'Duplicate children');
mutate(n=>{n.hall.type='unproven-theorem'},'Invalid location type');
mutate(n=>{n.hall.sources=[{name:'unsafe',url:'javascript:alert(1)'}]},'Invalid source');
mutate(n=>{n.hall.children.push('hall');n.hall.parent='hall'},'Cycle');
const edges=structuredClone(CONNECTIONS);
edges[0].sources=[{name:'bad',url:'http://unsecured.test'}];
assert.ok(validateConnections(edges).some(x=>x.includes('Invalid source')));
const journeys=structuredClone(JOURNEYS);
journeys.beginner.steps[0].route='missing-s010-route';
assert.ok(validateJourneys(journeys).some(x=>x.includes('Missing journey destination')));
console.log('PASS S010 release gate: eight roots, legacy IDs, source protocols, graph/cycle/orphan negatives, typed bridge scopes, full journeys, canonical ranked search and escaping');

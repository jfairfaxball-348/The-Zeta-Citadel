import assert from 'node:assert/strict';
import {LOCATIONS} from '../locations.js';
import {CONNECTIONS,connectionRoute} from '../connections.js';
import {catalog,JOURNEYS,validateJourneys,searchAtlas,normalise,renderSearchResults,renderDiscoveryScene,isDiscoveryRoute} from '../discovery.js';

assert.deepEqual(validateJourneys(),[]);
assert.ok(Object.keys(LOCATIONS).length>=40);
assert.equal(catalog().length,Object.keys(LOCATIONS).length+CONNECTIONS.length);
assert.equal(searchAtlas('hall-critical')[0]?.route,'hall-critical');
assert.ok(searchAtlas('Hardy').some(i=>i.route==='hall-hardy'));
assert.ok(searchAtlas('Guth Maynard').some(i=>i.route==='density-guth'));
assert.ok(searchAtlas('levinson').some(i=>i.route==='hall-levinson'));
assert.ok(searchAtlas('Dirichlet').some(i=>i.route==='grh'));
assert.ok(searchAtlas('connection--dirichlet-grh-rh').some(i=>i.route===connectionRoute('dirichlet-grh-rh')));
assert.equal(normalise('ALPÖGE & Furman'),'alpoge furman');
assert.equal(searchAtlas('ALL-NONEXISTENT-THEOREM-999').length,0);
assert.equal(searchAtlas(' ').length,0);
assert.equal(searchAtlas('x'.repeat(200)).length,0);
assert.ok(!renderSearchResults('<img src=x onerror=alert(1)>').includes('<img'));
assert.ok(renderSearchResults('zzzz-no-actual-matches').includes('No matching'));
assert.ok(renderDiscoveryScene('discover',{query:'Hall'}).includes('atlas-search'));
assert.ok(isDiscoveryRoute('journey--advanced') && !isDiscoveryRoute('connection--dirichlet-grh-rh'));
for(const [id,j] of Object.entries(JOURNEYS)){
 assert.ok(j.steps.some(s=>s.route.startsWith('connection--')));
 for(const s of j.steps)assert.ok(LOCATIONS[s.route] || CONNECTIONS.some(e=>connectionRoute(e.id)===s.route));
 assert.ok(renderDiscoveryScene('journey--'+id).includes(j.name));
}
const clone=structuredClone(JOURNEYS);
clone.beginner.steps[0].route='bad';
assert.ok(validateJourneys(clone).some(s=>s.includes('Missing journey destination')));
const repeated=structuredClone(JOURNEYS);repeated.beginner.steps[1].route=repeated.beginner.steps[0].route;
assert.ok(validateJourneys(repeated).some(s=>s.includes('Repeated journey destination')));
const missingBridge=structuredClone(JOURNEYS);missingBridge.advanced.steps=missingBridge.advanced.steps.filter(s=>!s.route.startsWith('connection--'));
assert.ok(validateJourneys(missingBridge).some(s=>s.includes('lacks an audited bridge')));
console.log('PASS S009 search index, ranked ID/title/source matches, diacritics, escaping, empty/oversize queries, two complete trails and negative schema cases');

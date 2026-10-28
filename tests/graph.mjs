import assert from 'node:assert/strict';
import {REGIONS,SUBNODES} from '../atlas.js';
import {LOCATIONS,getAncestors,getLocation,validateLocations} from '../locations.js';
assert.deepEqual(validateLocations(),[]);
assert.equal(REGIONS.length,8);
for(const region of REGIONS)assert.ok(LOCATIONS[region.id]);
for(const id of Object.keys(SUBNODES))assert.equal(getLocation(id)?.id,id);
assert.deepEqual(getAncestors('critical-line-exhibit'),['hall','hall-critical','critical-line-exhibit']);
assert.deepEqual(getAncestors('density-guth'),['courtyard','density-guth']);
assert.deepEqual(LOCATIONS.hall.children,['hall-hardy','hall-levinson','hall-mollifier','hall-2026','hall-critical']);
assert.equal(getLocation('not-real'),null);
for(const node of Object.values(LOCATIONS)){assert.ok(Array.isArray(node.children));assert.ok(Array.isArray(node.sourceIds));}
assert.match(getLocation('critical-line-exhibit').concept,/does not make it a zero/);
console.log('PASS graph, legacy IDs, typed locations, content caveat');

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
for (const [parent,child] of [
 ['hall-hardy','hardy-signs-exhibit'],['hall-levinson','milestones-exhibit'],
 ['hall-mollifier','mollifier-toy-exhibit'],['hall-2026','research-comparison-exhibit'],
 ['hall-critical','zero-types-exhibit']
]) {
 assert.ok(LOCATIONS[parent].children.includes(child), 'missing exhibit '+child);
 assert.equal(getLocation(child)?.parent,parent);
 assert.equal(getAncestors(child)[0],'hall');
 assert.ok(getLocation(child).sources.length,'source missing: '+child);
}
assert.deepEqual(getAncestors('zero-types-exhibit'),['hall','hall-critical','zero-types-exhibit']);
assert.deepEqual(getAncestors('density-exponent-exhibit'),['courtyard','density-guth','density-exponent-exhibit']);
assert.deepEqual(getAncestors('density-definition-exhibit'),['courtyard','density-idea','density-definition-exhibit']);
for(const id of ['density-exponent-exhibit','density-definition-exhibit']) {
 assert.ok(LOCATIONS[id].sources.length >= 2);
 assert.ok(LOCATIONS[id].status);
}
assert.ok(LOCATIONS['density-guth'].children.includes('density-exponent-exhibit'));
assert.ok(LOCATIONS['density-idea'].children.includes('density-definition-exhibit'));
console.log('PASS S004 density graph, legacy IDs, source metadata');
console.log('PASS S003 graph, legacy IDs, sourced exhibit children, cycle-free locations');

import {zeroFreeBoundsAtLog10} from '../keep.js';
assert.deepEqual(getAncestors('keep-geometry-exhibit'),['keep','keep-boundary','keep-geometry-exhibit']);
assert.deepEqual(getAncestors('keep-comparison-exhibit'),['keep','keep-classical','keep-comparison-exhibit']);
assert.deepEqual(getAncestors('keep-vk-exhibit'),['keep','keep-vk','keep-vk-exhibit']);
for(const id of ['keep-geometry-exhibit','keep-comparison-exhibit','keep-vk-exhibit']){
 assert.ok(LOCATIONS[id].sources.length>=2);
 assert.equal(LOCATIONS[id].sourceIds.length,2);
}
for(const id of ['keep','keep-boundary','keep-classical','keep-vk']){
 assert.ok(LOCATIONS[id].children.length);
}
assert.deepEqual(validateLocations(),[]);
const lower=zeroFreeBoundsAtLog10(1);
assert.ok(Math.abs(lower.classical-0.92187108765)<1e-10);
assert.ok(lower.classical<lower.vk);
assert.ok(zeroFreeBoundsAtLog10(4000).vk<zeroFreeBoundsAtLog10(4000).classical);
assert.throws(()=>zeroFreeBoundsAtLog10(0.5),RangeError);
assert.throws(()=>zeroFreeBoundsAtLog10(5001),RangeError);
console.log('PASS S005 Keep location graph, domains and exact published-boundary arithmetic');

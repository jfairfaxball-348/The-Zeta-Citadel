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


// S006: identity-preserving Dungeons graph and mathematically distinct units.
import {VERIFIED_HEIGHT, zeroCountMainTerm, approximateHeightComparison} from '../dungeon.js';
assert.equal(VERIFIED_HEIGHT,3e12);
assert.deepEqual(getAncestors('dungeon-cert'),['dungeon','dungeon-cert']);
assert.deepEqual(getAncestors('dungeon-height-exhibit'),['dungeon','dungeon-cert','dungeon-height-exhibit']);
assert.deepEqual(getAncestors('dungeon-count-exhibit'),['dungeon','dungeon-counting','dungeon-count-exhibit']);
assert.deepEqual(getAncestors('dungeon-certification-exhibit'),['dungeon','dungeon-methods','dungeon-certification-exhibit']);
assert.deepEqual(LOCATIONS.dungeon.children,['dungeon-cert','dungeon-counting','dungeon-methods']);
for(const id of ['dungeon-cert','dungeon-counting','dungeon-methods','dungeon-height-exhibit','dungeon-count-exhibit','dungeon-certification-exhibit']){
 assert.ok(LOCATIONS[id].sources.length>=2);
 assert.ok(LOCATIONS[id].sourceIds.every(url=>url.startsWith('https://')));
}
const T=1e6, u=T/(2*Math.PI);
assert.ok(Math.abs(zeroCountMainTerm(T)-(u*Math.log(u)-u))<0.0001);
assert.ok(!Number.isInteger(zeroCountMainTerm(1e6)),'the estimator is not an exact integer count');
assert.equal(approximateHeightComparison(6).height,1e6);
assert.ok(Math.abs(approximateHeightComparison(Math.log10(VERIFIED_HEIGHT)).height-VERIFIED_HEIGHT)<.001);
assert.ok(zeroCountMainTerm(VERIFIED_HEIGHT)>zeroCountMainTerm(1e6));
for(const bad of [99,VERIFIED_HEIGHT+1,NaN,Infinity])assert.throws(()=>zeroCountMainTerm(bad),RangeError);
assert.throws(()=>approximateHeightComparison(1.9),RangeError);
assert.deepEqual(validateLocations(),[]);
console.log('PASS S006 Dungeons recursive graph, primary-source IDs, height vs noninteger asymptotic count and range guards');


// S007: four horizon roots and eight exact nested destinations.
import {chi4,dirichletBetaPartial,gaussianSplitting} from '../outer.js';
const roots={selberg:'selberg-axioms',grand:'grand-automorphic',grh:'grh-characters',erh:'erh-gaussian'};
for(const [root,site] of Object.entries(roots)){
 const exhibit=site+'-exhibit';
 assert.deepEqual(LOCATIONS[root].children,[site]);
 assert.deepEqual(getAncestors(exhibit),[root,site,exhibit]);
 for(const id of [root,site,exhibit]){
  assert.ok(LOCATIONS[id].sources.length>=2,'S007 sources missing at '+id);
  assert.ok(LOCATIONS[id].sourceIds.every(s=>s.startsWith('https://')));
 }
}
assert.deepEqual(validateLocations(),[]);
assert.equal(chi4(1),1);assert.equal(chi4(2),0);assert.equal(chi4(3),-1);assert.equal(chi4(13),1);
for(const n of [4,5,40,160]){const v=dirichletBetaPartial(n);let expected=0;for(let i=1;i<=n;i++)expected+=chi4(i)/i**2;assert.equal(v.sum,expected);assert.equal(v.absoluteTailBound,1/n);}
assert.throws(()=>chi4(0),RangeError);assert.throws(()=>dirichletBetaPartial(3),RangeError);
assert.equal(gaussianSplitting(2).kind,'ramified');
assert.equal(gaussianSplitting(5).kind,'split');
assert.equal(gaussianSplitting(13).local,'(1−13⁻ˢ)⁻²');
assert.equal(gaussianSplitting(7).kind,'inert');
assert.equal(gaussianSplitting(3).local,'(1−3⁻²ˢ)⁻¹');
assert.throws(()=>gaussianSplitting(9),RangeError);
console.log('PASS S007 horizon graph, sourced nodes, exact Dirichlet character series, Gaussian splitting.');

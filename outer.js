/* S007: source-labelled outer mathematical horizons in the existing shared scene. */
import {getLocation,getRootRegion} from './locations.js';
const ROOTS=['selberg','grand','grh','erh'];
export const isOuterLocation = id => ROOTS.includes(getRootRegion(id));
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','"':'&#39;'}[c]));
const links=n=>(n.sources||[]).map(s=>'<a href="'+escapeHTML(s.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(s.name)+'</a>').join(' · ');
const head=(eyebrow,title,desc)=>'<div class="hall-plan-head"><span>'+eyebrow+'</span><h2>'+escapeHTML(title)+'</h2><p>'+escapeHTML(desc)+'</p></div>';
const ROOT_SITES={'selberg':'selberg-axioms','grand':'grand-automorphic','grh':'grh-characters','erh':'erh-gaussian'};
const AXIOMS=[
 {name:'Dirichlet-series starting point',claim:'F(s) = Σ a(n)n⁻ˢ converges absolutely when Re(s) > 1.',caution:'This is only the entry condition. It does not classify all interesting L-functions.'},
 {name:'Analytic continuation',claim:'For some nonnegative integer m, (s−1)ᵐF(s) extends to an entire function of finite order.',caution:'The factor permits a pole at s=1; it does not permit arbitrary other poles.'},
 {name:'Functional equation',claim:'A completed function Φ(s) = Qˢ∏Γ(λⱼs+μⱼ)F(s) obeys Φ(s)=ω overline(Φ(1−overline(s))), with Q, λⱼ>0, Re(μⱼ)≥0 and |ω|=1.',caution:'Conjugation matters for complex coefficients. The gamma-factor data are part of the axiom.'},
 {name:'Ramanujan coefficient condition',claim:'For each ε>0 the coefficients satisfy |a(n)| = Oε(nᵋ).',caution:'This condition is assumed in the definition, not proved for every automorphic L-function.'},
 {name:'Euler-product axiom',claim:'With a(1)=1, log F(s)=Σ b(n)n⁻ˢ, supported at prime powers, and b(n)=O(nᶿ) for some θ<½.',caution:'The classical Selberg class includes this prime-power bound; looser extended classes are not identical.'}
];
const GRAND=[
 {title:'GL(1) / character doorway',body:'Dirichlet characters yield familiar degree-one L-functions. Their Euler factors, continuation and zero questions make concrete instances of the wider theme.',warning:'This example does not identify every automorphic L-function with a Dirichlet L-function.'},
 {title:'GL(2) / modular doorway',body:'Suitable automorphic forms, including holomorphic newforms, have associated normalized L-functions with functional equations and local Euler factors.',warning:'Normalization and the chosen family matter. No claim is made that all such functions satisfy every classical Selberg axiom unconditionally.'},
 {title:'Higher-rank horizon',body:'Automorphic representations on GL(n) lead to standard L-functions and broader Langlands constructions. Questions about zeros coexist with analytic continuation, local factors and functoriality.',warning:'Langlands is not merely a larger RH. This display makes no unqualified theorem of containment or transfer.'}
];
export function chi4(n) {
 if(!Number.isSafeInteger(n)||n<1)throw new RangeError('n must be a positive safe integer');
 return n%2===0?0:n%4===1?1:-1;
}
export function dirichletBetaPartial(N) {
 if(!Number.isInteger(N)||N<4||N>2000)throw new RangeError('N must be an integer in [4,2000]');
 let sum=0;for(let n=1;n<=N;n++)sum+=chi4(n)/(n*n);
 return {sum,absoluteTailBound:1/N,positiveTerms:Math.floor((N+3)/4),negativeTerms:Math.floor((N+1)/4)};
}
export function gaussianSplitting(p) {
 if(!Number.isSafeInteger(p)||p<2)throw new RangeError('p must be a prime');
 for(let d=2;d*d<=p;d++)if(p%d===0)throw new RangeError('composite input');
 if(p===2)return {kind:'ramified',local:'(1−2⁻ˢ)⁻¹',why:'2 = −i(1+i)²: one prime ideal lies above 2, with ramification index 2 and norm 2.'};
 if(p%4===1)return {kind:'split',local:'(1−'+p+'⁻ˢ)⁻²',why:'The prime splits into two distinct conjugate Gaussian prime factors, each of norm '+p+'.'};
 return {kind:'inert',local:'(1−'+p+'⁻²ˢ)⁻¹',why:'The prime remains prime in Z[i]; the corresponding prime ideal has norm '+p+'².'};
}
function district(root) {
 const r=getLocation(root),site=getLocation(ROOT_SITES[root]);
 const fig={selberg:'S',grand:'L',grh:'χ',erh:'K'}[root];
 return '<section class="outer-district" aria-label="'+escapeHTML(r.subtitle)+' mathematical territory">'+
 head('OUTER HORIZONS / '+escapeHTML(root.toUpperCase()),r.subtitle,r.teaser)+
 '<div class="outer-atlas"><div class="outer-sky" aria-hidden="true"><span class="outer-orbit outer-orbit-one"></span><span class="outer-orbit outer-orbit-two"></span><strong>'+fig+'</strong></div>'+
 '<div class="outer-atlas-notice">GEOGRAPHY ≠ LOGICAL IMPLICATION · DEFINITIONS CHOSEN EXPLICITLY</div>'+
 '<button type="button" class="outer-gate" data-navigate="'+site.id+'"><span class="outer-glyph" aria-hidden="true">'+fig+'</span><strong>'+escapeHTML(site.name)+'</strong><small>'+escapeHTML(site.subtitle)+'</small><span>ENTER THE STUDY ↗</span></button></div>'+
 '<p class="outer-note">'+escapeHTML(r.caution)+'</p><p class="outer-note">SOURCE / '+links(site)+'</p></section>';
}
function site(id){
 const n=getLocation(id),child=getLocation(n.children[0]);
 return '<section class="outer-district" aria-label="Outer-horizon study">'+head('OUTER HORIZONS / RESEARCH ATLAS',n.name,n.subtitle)+
 '<div class="outer-room"><span class="outer-medallion" aria-hidden="true">∑</span><div><h3>'+escapeHTML(n.status)+'</h3><p>'+escapeHTML(n.concept)+'</p><p>'+escapeHTML(n.progress)+'</p>'+
 '<button type="button" class="outer-entry" data-navigate="'+child.id+'">OPEN INTERACTIVE EXHIBIT ↗<small>'+escapeHTML(child.name)+'</small></button></div></div>'+
 '<p class="outer-note">No chain of mathematical implication follows from the map. SOURCE / '+links(n)+'</p></section>';
}
function labShell(node,content,desc){
 return '<section class="lab-exhibit outer-exhibit" aria-label="'+escapeHTML(node.name)+'">'+head('OUTER HORIZONS / GUIDED EXHIBIT',node.name,desc)+
 '<div class="lab-card">'+content+'<p class="outer-warning">EDITION 28 OCT 2026 · Mathematical definitions and exact examples, not sampled zeros, numerical certification, or a proof of any Riemann hypothesis. Map geography is analogy, not implication.</p>'+
 '<p class="lab-references">SOURCES / '+links(node)+'</p></div></section>';
}
function selbergLab(n){
 return labShell(n,'<div class="outer-panel"><label for="outer-axiom">Choose one of the five Selberg axioms</label><select id="outer-axiom">'+AXIOMS.map((a,i)=>'<option value="'+i+'">'+(i+1)+' / '+escapeHTML(a.name)+'</option>').join('')+'</select>'+
 '<div class="outer-seal">F ∈ S <span>DEFINITION · NOT A THEOREM CLASSIFYING ALL L-FUNCTIONS</span></div>'+
 '<h3 id="outer-axiom-title"></h3><p id="outer-axiom-claim"></p><p class="outer-note" id="outer-axiom-caution"></p></div>',
 'An axiom-by-axiom display of the classical Selberg class. Select a condition to see what it requires.');
}
function grandLab(n){
 return labShell(n,'<div class="outer-panel"><label for="outer-grand-family">Select an illustrative automorphic doorway</label><select id="outer-grand-family"><option value="0">GL(1) / characters</option><option value="1">GL(2) / modular forms</option><option value="2">Higher-rank / GL(n)</option></select>'+
 '<div class="outer-horizon-chart" aria-hidden="true"><span>GL(1)</span><span>GL(2)</span><span>GL(n)</span></div>'+
 '<h3 id="outer-grand-title"></h3><p id="outer-grand-body"></p><p class="outer-note" id="outer-grand-warning"></p>'+
 '<p class="outer-note">Here “Grand RH” means the zero-location conjecture for the relevant standard automorphic L-functions in their standard normalization. A general result is not known; Langlands connections are explanatory context, not a proof.</p></div>',
 'Explore how GL(1), GL(2) and higher-rank examples broaden the automorphic setting.');
}
function grhLab(n){
 return labShell(n,'<div class="outer-panel"><label for="outer-grh-N">Truncate the exact Dirichlet series at N = <output id="outer-grh-N-output"></output></label><input type="range" id="outer-grh-N" min="4" max="160" step="1" value="40">'+
 '<div class="outer-formula">χ₄(n) = 0 (n even), +1 (n ≡ 1 mod 4), −1 (n ≡ 3 mod 4)<br>L(2, χ₄) = Σ χ₄(n)/n²</div>'+
 '<div class="outer-stat-grid"><div><small>FINITE PARTIAL SUM · EXACT INPUT ARITHMETIC</small><strong id="outer-grh-sum"></strong></div><div><small>RIGOROUS ABSOLUTE TAIL BOUND</small><strong id="outer-grh-bound"></strong></div></div>'+
 '<p id="outer-grh-classes" class="outer-note"></p><p class="outer-note">The bound follows from Σ(n&gt;N)1/n² ≤ 1/N. This calculation is in the absolutely convergent half-plane at s=2; it does <strong>not</strong> compute any critical-strip zero or test GRH.</p></div>',
 'Build a finite Dirichlet L-series for the nonprincipal character modulo four, with a mathematically valid error bound.');
}
function erhLab(n){
 const choices=[2,3,5,7,11,13,17,19,29,37,41,43,53,61];
 return labShell(n,'<div class="outer-panel"><label for="outer-erh-prime">Choose a rational prime p</label><select id="outer-erh-prime">'+choices.map(p=>'<option value="'+p+'"'+(p===5?' selected':'')+'>'+p+'</option>').join('')+'</select>'+
 '<div class="outer-formula">K = ℚ(i) · Oₖ = ℤ[i] · ζₖ(s) = Σ₍nonzero ideals 𝔞₎ N(𝔞)⁻ˢ (Re(s)&gt;1)</div>'+
 '<div class="outer-stat-grid"><div><small>BEHAVIOUR OF p IN ℤ[i]</small><strong id="outer-erh-kind"></strong></div><div><small>EXACT LOCAL ZETA EULER FACTOR</small><strong id="outer-erh-local"></strong></div></div>'+
 '<p id="outer-erh-why" class="outer-note"></p><p class="outer-note">Here ERH means: for <em>every</em> number field K, every nontrivial zero of ζₖ(s) has real part ½. The finite Gaussian-prime demonstration is a proved algebraic fact, not a zero computation; authors use “ERH” differently.</p></div>',
 'Select a prime to see exact ramification, splitting or inertness in the Gaussian integers, and the corresponding Dedekind zeta Euler factor.');
}
export function renderOuterScene(id){
 if(!isOuterLocation(id))return '';
 const n=getLocation(id),root=getRootRegion(id);
 if(id===root)return district(root);
 if(n.type==='site')return site(id);
 if(n.exhibit==='outer-selberg')return selbergLab(n);
 if(n.exhibit==='outer-grand')return grandLab(n);
 if(n.exhibit==='outer-grh')return grhLab(n);
 if(n.exhibit==='outer-erh')return erhLab(n);
 return '';
}
export function updateOuter(root){
 const select=(q)=>root.querySelector(q);
 const ax=select('#outer-axiom');
 if(ax){const a=AXIOMS[Number(ax.value)];select('#outer-axiom-title').textContent=a.name;select('#outer-axiom-claim').textContent=a.claim;select('#outer-axiom-caution').textContent=a.caution;}
 const grand=select('#outer-grand-family');
 if(grand){const g=GRAND[Number(grand.value)];select('#outer-grand-title').textContent=g.title;select('#outer-grand-body').textContent=g.body;select('#outer-grand-warning').textContent=g.warning;}
 const N=select('#outer-grh-N');
 if(N){const n=Number(N.value),v=dirichletBetaPartial(n);select('#outer-grh-N-output').textContent=String(n);select('#outer-grh-sum').textContent=v.sum.toFixed(9);select('#outer-grh-bound').textContent='≤ '+v.absoluteTailBound.toFixed(6);select('#outer-grh-classes').textContent='Among n ≤ '+n+': '+v.positiveTerms+' terms have χ₄(n)=+1 and '+v.negativeTerms+' have χ₄(n)=−1; even n contribute zero.';}
 const p=select('#outer-erh-prime');
 if(p){const n=Number(p.value),v=gaussianSplitting(n);select('#outer-erh-kind').textContent=v.kind.toUpperCase();select('#outer-erh-local').textContent=v.local;select('#outer-erh-why').textContent=v.why;}
}

/* S005: established, height-qualified zero-free theorems; no sampled zeta zeros. */
import {getLocation, getRootRegion} from './locations.js';
export const isKeepLocation = id => getRootRegion(id) === 'keep';
const sourceD = 'https://dlmf.nist.gov/25.10';
const sourceM = 'https://link.springer.com/article/10.1007/s40993-023-00498-y';
const cite = '<a href="'+sourceM+'" target="_blank" rel="noopener noreferrer">Mossinghoff–Trudgian–Yang, Research in Number Theory 10:11 (2024)</a> · <a href="'+sourceD+'" target="_blank" rel="noopener noreferrer">NIST DLMF §25.10</a>';
const escapeHTML = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const head = (label,title,desc) => '<div class="hall-plan-head"><span>'+label+'</span><h2>'+title+'</h2><p>'+desc+'</p></div>';
const names = {'keep-boundary':'THE OUTER WALL','keep-classical':'THE CLASSICAL BASTION','keep-vk':'THE KOROBOV TOWER'};
export function zeroFreeBoundsAtLog10(k) {
  if (!Number.isFinite(k) || k < 1 || k > 5000) throw new RangeError('The plotted log10(|t|) domain is [1,5000].');
  const lnT=k*Math.LN10;
  const classical=1-1/(5.558691*lnT);
  const vk=1-1/(55.241*Math.pow(lnT,2/3)*Math.pow(Math.log(lnT),1/3));
  return {lnT,classical,vk,better:classical<=vk?'classical':'vk'};
}
function district() {
  return '<section class="keep-district" aria-label="Keep zero-free district">'+
    head('CITADEL / THE KEEP','THE GUARDED TERRITORIES','These doors lead to three exact statements. They do not declare the whole critical strip free of zeros.')+
    '<div class="keep-fort"><div class="keep-rampart">PROVED REGIONS · THEOREM DOMAINS · NOT A PROOF OF RH</div>'+
    '<div class="keep-gates">'+['keep-boundary','keep-classical','keep-vk'].map(id=>{
      const node=getLocation(id);
      return '<button type="button" class="keep-gate" data-navigate="'+id+'"><span class="keep-glyph" aria-hidden="true">'+(id==='keep-boundary'?'∏':id==='keep-classical'?'σ':'ζ')+'</span><strong>'+escapeHTML(names[id])+'</strong><small>'+escapeHTML(node.subtitle)+'</small><span>ENTER THE TERRITORY ↗</span></button>';
    }).join('')+'</div></div><p class="keep-note">Architecture is an analogy, not a geometric proof. All formulas apply to ζ(σ+it), with natural logarithms and the stated absolute-height restrictions.</p></section>';
}
function site(id) {
 const n=getLocation(id);
 return '<section class="keep-district" aria-label="Keep theorem room">'+
   head('THE KEEP / SOURCE-BACKED ROOM',escapeHTML(n.name.toUpperCase()),escapeHTML(n.teaser))+
   '<div class="keep-site"><div class="keep-site-mark" aria-hidden="true">'+(id==='keep-boundary'?'σ>1':id==='keep-classical'?'5.558691':'55.241')+'</div><div><p>'+escapeHTML(n.concept)+'</p><p>'+escapeHTML(n.progress)+'</p>'+
   n.children.map(child=>'<button type="button" class="keep-entry" data-navigate="'+child+'">OPEN WORKING EXHIBIT ↗<small>'+escapeHTML(getLocation(child).name)+'</small></button>').join('')+
   '</div></div><p class="keep-note">SOURCES / '+cite+'</p></section>';
}
function geometryExhibit() {
 return '<section class="lab-exhibit keep-exhibit" aria-label="Exact zeta zero and pole taxonomy">'+
 head('THE KEEP / OUTER WALL','THE PLANE & ITS EXCEPTIONS','The schematic diagram marks exact trivial-zero coordinates and the pole, not any numerically discovered nontrivial zeros.')+
 '<div class="lab-card"><svg class="lab-svg keep-plane" viewBox="0 0 680 300" role="img" aria-labelledby="keep-geometry-title keep-geometry-desc">'+
 '<title id="keep-geometry-title">Complex plane with trivial zeros, critical strip, critical line and pole at one</title>'+
 '<desc id="keep-geometry-desc">Schematic real axis from minus four point five to one point five, imaginary axis from minus two to two. Negative even integers minus four and minus two are marked as trivial zeros; one is marked as a pole, not a zero. The zero-free half-plane sigma greater than one is shaded. No nontrivial zero points are plotted.</desc>'+
 '<rect x="65" y="32" width="550" height="224" fill="#102936"/><rect x="478" y="32" width="91" height="224" fill="#426c63" opacity=".27"/>'+
 '<rect x="569" y="32" width="46" height="224" fill="#658f72" opacity=".42"/>'+
 '<path d="M65 144H615 M478 32V256 M524 32V256 M569 32V256" stroke="#b9c3ac" stroke-opacity=".50" stroke-dasharray="4 5"/>'+
 '<path d="M524 32V256" stroke="#e4c78e" stroke-width="2.5"/>'+
 '<g fill="#f4deb5" font-size="13" font-family="monospace"><text x="42" y="149">0</text><text x="596" y="278">σ</text><text x="74" y="26">Im(s)=t</text><text x="535" y="23">σ=½</text><text x="568" y="292">1</text><text x="478" y="292">0</text><text x="294" y="292">−2</text><text x="110" y="292">−4</text></g>'+
 '<g fill="none" stroke="#8bd5c6" stroke-width="3"><circle cx="111" cy="144" r="8"/><circle cx="295" cy="144" r="8"/></g>'+
 '<path d="M569 135l8 9-8 9-8-9Z" fill="#e8a183"/><text x="580" y="128" fill="#ffc4a9" font-size="12">POLE</text>'+
 '<text x="579" y="55" fill="#cdebd0" font-size="12" transform="rotate(90 579 55)">σ &gt; 1: NO ZEROS</text>'+
 '</svg><p class="keep-note"><strong>Exact facts:</strong> ζ(s) has simple pole at s=1, trivial zeros at s=−2,−4,−6,…, and no zeros for Re(s)&gt;1; on Re(s)=1, ζ(s) is nonzero wherever it is defined. The strip is 0&lt;Re(s)&lt;1; its centre is Re(s)=½. Points in the strip are not automatically zeros.</p>'+
 '<p class="keep-note">The right-hand shading is a proved half-plane, not a numeric test. Only −2 and −4 are shown; the negative even sequence continues beyond the frame. Nothing is implied about all off-line points in ½&lt;σ&lt;1.</p>'+
 '<p class="lab-references">REFERENCE / <a href="'+sourceD+'" target="_blank" rel="noopener noreferrer">NIST DLMF §25.10(i)</a></p></div></section>';
}
function comparisonExhibit(id) {
 const focus=id==='keep-vk-exhibit'?'vk':'classical';
 return '<section class="lab-exhibit keep-exhibit" aria-label="Interactive rigorous zero-free region boundaries">'+
 head('THE KEEP / EXPLICIT THEOREMS','THE HEIGHT-BOUNDARY TABLE','At selected absolute height |t|, compare two published unconditional zero-free inequalities. This evaluates theorem formulas, never ζ(s) or its zeros.')+
 '<div class="lab-card"><div class="keep-workbench">'+
 '<div><svg id="keep-boundary-svg" class="lab-svg" viewBox="0 0 680 280" role="img" aria-labelledby="keep-chart-title keep-chart-desc">'+
 '<title id="keep-chart-title">Theorem guarantee in a horizontal slice through the critical strip</title>'+
 '<desc id="keep-chart-desc">Exact, same-scale real-part positions for classical and Vinogradov–Korobov zero-free boundaries, at the selected height. Each shaded bar runs from its theorem boundary to sigma one point zero five. This is not a location of zeros or a certification outside the stated height domain.</desc>'+
 '<path d="M55 53H625 M55 225H625" stroke="#bdd0c1" stroke-width="1"/><path d="M55 50V230 M573.18 50V230" stroke="#d5bd87" stroke-dasharray="5 4"/>'+
 '<g fill="#e9ddbb" font-family="monospace" font-size="12"><text x="50" y="244">½</text><text x="552" y="244">1</text><text x="600" y="244">1.05</text><text x="270" y="269">REAL PART σ — LINEAR SCALE</text><text x="54" y="28">PROVED ZERO-FREE FOR σ ≥ B(|t|) AT THIS HEIGHT</text><text x="55" y="83">CLASSICAL</text><text x="55" y="158">VINOGRADOV–KOROBOV</text></g>'+
 '<rect x="55" y="90" width="570" height="26" fill="#2a3c49"/><rect x="55" y="164" width="570" height="26" fill="#2a3c49"/>'+
 '<rect id="keep-classical-zone" x="573" y="90" width="52" height="26" fill="#87c8b1" opacity=".70"/>'+
 '<rect id="keep-vk-zone" x="573" y="164" width="52" height="26" fill="#c0a0d0" opacity=".72"/>'+
 '<path id="keep-classical-line" d="M573 87V119" stroke="#c8f2d6" stroke-width="3"/><path id="keep-vk-line" d="M573 161V193" stroke="#e0c2f4" stroke-width="3"/></svg>'+
 '<p class="keep-note">The x-axis is linear and shows ½≤σ≤1.05. At large heights the guarantee hugs σ=1 and may be visually thin; the exact numerical boundary below is authoritative. No dots represent computed zeros. Regions left of the boundary are <em>not proved empty</em> by that theorem.</p></div>'+
 '<div class="keep-controls"><label class="lab-label" for="keep-logt">LOG₁₀|t| <output id="keep-logt-output" for="keep-logt">6</output></label>'+
 '<input type="range" id="keep-logt" min="1" max="5000" step="1" value="6"/>'+
 '<label class="lab-label" for="keep-preset">JUMP TO A HEIGHT</label>'+
 '<select id="keep-preset" class="lab-select"><option value="6">10⁶</option><option value="1">10¹</option><option value="100">10¹⁰⁰</option><option value="1000">10¹⁰⁰⁰</option><option value="4000">10⁴⁰⁰⁰</option><option value="5000">10⁵⁰⁰⁰</option></select>'+
 '<div class="lab-readout" role="status" aria-live="polite"><strong id="keep-height-readout"></strong><p id="keep-classical-value"></p><p id="keep-vk-value"></p><p id="keep-winner"></p></div></div></div>'+
 '<div class="keep-formulas"><p><strong>Classical log region</strong><span>ζ(σ+it) ≠ 0 for σ ≥ 1 − 1/(5.558691 ln|t|), |t| ≥ 2.</span></p><p><strong>Vinogradov–Korobov form</strong><span>ζ(σ+it) ≠ 0 for σ ≥ 1 − 1/[55.241 (ln|t|)^(2/3) (ln ln|t|)^(1/3)], |t| ≥ 3.</span></p></div>'+
 '<p class="keep-note">Source: Mossinghoff, Trudgian &amp; Yang, peer-reviewed Research in Number Theory 10, article 11 (2024), abstract and theorem discussion. These two published regions are <strong>not claimed to be current record bounds at all heights</strong>. ln means natural logarithm, and |t| denotes either sign of the imaginary part. Both inequalities include their boundary (≥) and have effective explicit constants; no unspecified “sufficiently large” threshold is needed. The slider shows only |t|≥10, inside both validity domains. In particular, the pole at s=1 has t=0 and lies outside both formulas.</p>'+
 '<p class="keep-note">A larger guaranteed region corresponds to a smaller B(|t|), not a numerical census. The critical line at σ=½ is far to the left of these high-height guarantees. Zero-density upper bounds in the Courtyard quantify possible exceptions rather than excluding them; finite-height checking in the Dungeons is a separate kind of evidence. RH remains open.</p>'+
 '<p class="lab-references">PUBLISHED REFERENCE / '+cite+'</p></div></section>';
}
export function renderKeepScene(id) {
 if (!isKeepLocation(id)) return '';
 if(id==='keep-geometry-exhibit') return geometryExhibit();
 if(id==='keep-comparison-exhibit'||id==='keep-vk-exhibit') return comparisonExhibit(id);
 if(id==='keep') return district();
 return site(id);
}
export function updateKeep(root) {
 const slider=root.querySelector('#keep-logt');
 if(!slider) return;
 const k=Number(slider.value), b=zeroFreeBoundsAtLog10(k);
 const x=sigma => 55+(sigma-0.5)/0.55*570;
 for(const [key,val,y] of [['classical',b.classical,90],['vk',b.vk,164]]) {
   const start=x(val); const zone=root.querySelector('#keep-'+key+'-zone');
   zone.setAttribute('x',String(start));zone.setAttribute('width',String(Math.max(0,625-start)));
   root.querySelector('#keep-'+key+'-line').setAttribute('d','M'+start+' '+(y-3)+'V'+(y+29));
 }
 root.querySelector('#keep-logt-output').textContent=String(k);
 root.querySelector('#keep-height-readout').textContent='Selected |t| = 10^'+k+' (ln|t| = '+b.lnT.toFixed(5)+').';
 root.querySelector('#keep-classical-value').textContent='Classical B(|t|) = '+b.classical.toFixed(9)+'; guarantee σ ≥ B.';
 root.querySelector('#keep-vk-value').textContent='Vinogradov–Korobov B(|t|) = '+b.vk.toFixed(9)+'; guarantee σ ≥ B.';
 root.querySelector('#keep-winner').textContent=(b.better==='classical'?'Classical log form':'Vinogradov–Korobov form')+' is stronger of THESE TWO at the selected height (smaller B). Neither reaches σ=½.';
 const preset=root.querySelector('#keep-preset');
 if(preset) preset.value=['1','6','100','1000','4000','5000'].includes(String(k))?String(k):'';
}

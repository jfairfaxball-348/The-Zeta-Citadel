/* S006: finite-height computation is evidence within a bounded interval, not RH. */
import {getLocation, getRootRegion} from './locations.js';
export const isDungeonLocation = id => getRootRegion(id) === 'dungeon';
export const VERIFIED_HEIGHT = 3e12;
export const SOURCE_PLATT = 'https://doi.org/10.1112/blms.12460';
export const SOURCE_DLMF = 'https://dlmf.nist.gov/25.10';
const SOURCE_ZEROS = 'https://www-users.cse.umn.edu/~odlyzko/zeta_tables/zeros2';
const SOURCE_RVM = 'https://mathworld.wolfram.com/Riemann-vonMangoldtFormula.html';
const refs = '<a href="'+SOURCE_PLATT+'" target="_blank" rel="noopener noreferrer">Platt–Trudgian (2021), published theorem</a> · <a href="'+SOURCE_DLMF+'" target="_blank" rel="noopener noreferrer">NIST DLMF §25.10</a>';
const escape = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const intro = (tag,title,desc) => '<div class="hall-plan-head"><span>'+tag+'</span><h2>'+title+'</h2><p>'+desc+'</p></div>';
const order = ['dungeon-cert','dungeon-counting','dungeon-methods'];
const symbols = ['⌛','∑','✓'];

/** Riemann–von Mangoldt leading terms, NOT the integer N(T).
 * N(T) = estimate + O(log T) as T→∞, with zeros counted by multiplicity.
 * No exact count or endpoint assertion is made using the returned value.
 */
export function zeroCountMainTerm(T) {
 if (!Number.isFinite(T) || T < 100 || T > VERIFIED_HEIGHT) throw new RangeError('Chart height must lie in [100, 3×10^12].');
 const u = T / (2*Math.PI);
 return u * (Math.log(u) - 1);
}
export function approximateHeightComparison(logT) {
 if (!Number.isFinite(logT) || logT < 2 || logT > Math.log10(VERIFIED_HEIGHT)+1e-10) throw new RangeError('Invalid log-height.');
 const height=Math.min(VERIFIED_HEIGHT,Math.pow(10,logT));
 return {height, logT, mainTerm:zeroCountMainTerm(height)};
}
const printNumber = n => new Intl.NumberFormat('en-GB',{maximumSignificantDigits:5}).format(n);

function district() {
 return '<section class="dungeon-district" aria-label="Dungeons numerical verification district">'+
 intro('CITADEL / THE DUNGEONS','THE CERTIFICATE VAULTS','Three rooms distinguish published finite verification, a zero-count estimate, and how one proves that no zeros were missed.')+
 '<div class="dungeon-floor"><div class="dungeon-corridor" aria-hidden="true">RIGOROUS EVIDENCE · FINITE HEIGHT · THE INFINITE TAIL REMAINS OPEN</div><div class="dungeon-gates">'+
 order.map((id,i)=>{const n=getLocation(id);return '<button type="button" class="dungeon-gate" data-navigate="'+id+'"><span class="dungeon-arch" aria-hidden="true">'+symbols[i]+'</span><strong>'+escape(n.name)+'</strong><small>'+escape(n.subtitle)+'</small><span>DESCEND ↗</span></button>';}).join('')+
 '</div></div><p class="dungeon-note">The published 2021 result covers 0 &lt; Im(ρ) ≤ 3 × 10¹². This is a <strong>height limit</strong>, NOT a count of three trillion zeros. Conjugate symmetry handles negative imaginary parts. No finite verification establishes all-height RH.</p></section>';
}
function site(id) {
 const n=getLocation(id);
 return '<section class="dungeon-district" aria-label="Dungeons verification room">'+intro('THE DUNGEONS / '+escape(n.type).toUpperCase(),escape(n.name.toUpperCase()),escape(n.teaser))+
 '<div class="dungeon-site"><div class="dungeon-seal" aria-hidden="true">'+symbols[order.indexOf(id)]+'</div><div><p>'+escape(n.concept)+'</p><p>'+escape(n.progress)+'</p>'+
 n.children.map(child=>'<button type="button" class="dungeon-entry" data-navigate="'+child+'">OPEN THE INTERACTIVE EXHIBIT ↗<small>'+escape(getLocation(child).name)+'</small></button>').join('')+
 '</div></div><p class="dungeon-note">PRIMARY SOURCES / '+refs+'</p></section>';
}
function timeline() {
 return '<section class="lab-exhibit dungeon-exhibit" aria-label="Historically reported finite zero checks">'+
 intro('DUNGEONS / VERIFICATION TIMELINE','HEIGHT IS NOT A ZERO COUNT','Two historically reported milestones use different units and cannot be compared as if they were the same kind of number.')+
 '<div class="lab-card"><div class="dungeon-milestones">'+
 '<div><span>1986 · REPORTED COUNT MILESTONE</span><strong>10 billion zeros</strong><p>DLMF §25.10 reports the first ten billion zeros were shown on the critical line (van de Lune and collaborators). This is a number of zeros, not a specified height in this display.</p></div>'+
 '<div><span>2021 · PUBLISHED HEIGHT MILESTONE</span><strong>3 × 10¹² height</strong><p>Platt–Trudgian: all nontrivial zeros ρ = β + iγ with 0 &lt; γ ≤ 3 × 10¹² have β=½ and are simple; the work uses rigorous interval arithmetic. This is a bound on γ, NOT the number of zeros.</p></div></div>'+
 '<svg viewBox="0 0 700 170" class="lab-svg" role="img" aria-labelledby="dungeon-timeline-title dungeon-timeline-desc"><title id="dungeon-timeline-title">Two different certified-information units</title><desc id="dungeon-timeline-desc">The 1986 result is expressed as the first ten billion zeros, while the 2021 paper states an imaginary-height range up to three trillion. They are shown in separate labelled panels rather than one misleading numeric scale.</desc>'+
 '<rect x="18" y="18" width="315" height="120" rx="6" fill="#233746" stroke="#9db3c5"/><rect x="365" y="18" width="315" height="120" rx="6" fill="#233746" stroke="#c9ad83"/>'+
 '<g fill="#eef0e2" font-family="monospace" text-anchor="middle"><text x="175" y="55" font-size="13">NUMBER OF ZEROS</text><text x="175" y="94" font-size="25">10,000,000,000</text><text x="525" y="55" font-size="13">IMAGINARY HEIGHT</text><text x="525" y="94" font-size="25">3 × 10¹²</text><text x="175" y="118" font-size="12">1986 · DLMF</text><text x="525" y="118" font-size="12">2021 · PLATT–TRUDGIAN</text></g></svg>'+
 '<p class="dungeon-note">Neither a height T nor an enumeration index n is interchangeable with the other. We do not give an exact value for N(3×10¹²) because the published height statement alone does not supply one, and this app does not certify an exact count.</p>'+
 '<p class="lab-references">PUBLISHED REFERENCES / '+refs+'</p></div></section>';
}
function count() {
 return '<section class="lab-exhibit dungeon-exhibit" aria-label="Interactive height versus estimated zero count">'+
 intro('DUNGEONS / ZERO-COUNT LABORATORY','T IS NOT N(T)','Select a positive imaginary height. The chart computes an asymptotic approximation, not an exact count or a zero-verification run.')+
 '<div class="lab-card"><div class="dungeon-workbench"><div>'+
 '<svg class="lab-svg" viewBox="0 0 700 270" role="img" aria-labelledby="dungeon-chart-title dungeon-chart-desc"><title id="dungeon-chart-title">Selected height and its separately labelled approximate zero count</title>'+
 '<desc id="dungeon-chart-desc">Two independent logarithmic scales contrast imaginary height T with the Riemann–von Mangoldt main-term estimate for the number of nontrivial zeros. Neither bar depicts exact N(T), and there are no sampled zeta zeros.</desc>'+
 '<g fill="#edd9b9" font-size="13" font-family="monospace"><text x="35" y="38">IMAGINARY HEIGHT T (LOG SCALE)</text><text x="35" y="141">MAIN TERM ONLY (LOG SCALE; NOT EXACT N(T))</text><text x="35" y="250">Two distinct quantities · lengths have independent scales</text></g>'+
 '<rect x="35" y="59" width="620" height="33" fill="#344957"/><rect id="dungeon-height-bar" x="35" y="59" width="10" height="33" fill="#b2a6d5"/>'+
 '<rect x="35" y="164" width="620" height="33" fill="#344957"/><rect id="dungeon-count-bar" x="35" y="164" width="10" height="33" fill="#a5d5bd"/>'+
 '<g fill="#e8e7df" font-family="monospace" font-size="12"><text id="dungeon-height-chart-label" x="35" y="113"></text><text id="dungeon-count-chart-label" x="35" y="217"></text></g></svg>'+
 '<p class="dungeon-note">Graphical bars are separately normalized on logarithmic axes for readability, NOT a claim that count and height share units. There are no plotted zero locations. The exact count N(T) is an integer, counted with multiplicity; the main term generally is not.</p></div>'+
 '<div class="dungeon-controls"><label class="lab-label" for="dungeon-logt">LOG₁₀ T <output id="dungeon-logt-output" for="dungeon-logt">6.00</output></label>'+
 '<input type="range" id="dungeon-logt" min="2" max="12.477121254719662" step="0.01" value="6"/>'+
 '<label class="lab-label" for="dungeon-preset">JUMP TO A HEIGHT</label><select id="dungeon-preset" class="lab-select"><option value="">Custom height</option><option value="100">100</option><option value="1000">1,000</option><option value="1000000" selected>1,000,000</option><option value="1000000000">10⁹</option><option value="3000000000000">3 × 10¹² (published boundary)</option></select>'+
 '<div class="lab-readout" role="status" aria-live="polite"><strong id="dungeon-selected-height"></strong><p id="dungeon-count-estimate"></p><p id="dungeon-proof-status"></p></div></div></div>'+
 '<div class="dungeon-equation">M(T) = (T / 2π) [ln(T / 2π) − 1]<small>N(T) = M(T) + O(ln T) as T → ∞ (Riemann–von Mangoldt). Natural logarithm. The omitted term is NOT known to vanish; no exact N(T) is computed.</small></div>'+
 '<p class="dungeon-note">For this exhibit use T ∈ [100, 3×10¹²]. The source theorem uses 0 &lt; Im(ρ) ≤ 3×10¹²; by contrast N(T) is often defined using 0 &lt; Im(ρ) &lt; T (DLMF). Endpoint conventions can matter at an actual zero ordinate. An approximation does not settle boundary inclusion or multiplicity. The published verification applies to every zero below its height, independently of this estimator.</p>'+
 '<p class="lab-references">SOURCES / <a href="'+SOURCE_RVM+'" target="_blank" rel="noopener noreferrer">Riemann–von Mangoldt asymptotic reference</a> · '+refs+'</p></div></section>';
}
function certification() {
 return '<section class="lab-exhibit dungeon-exhibit" aria-label="Rigorous interval computation and completeness logic">'+
 intro('DUNGEONS / PROOF-METHOD WORKSHOP','A PLOT IS NOT A CERTIFICATE','Inspect the three different roles in verifying every zeta zero in a finite strip.')+
 '<div class="lab-card"><label class="lab-label" for="dungeon-method">SELECT A VERIFICATION STEP</label>'+
 '<select id="dungeon-method" class="lab-select"><option value="approx">1 · Approximate root location</option><option value="interval">2 · Rigorous error enclosures</option><option value="complete">3 · Count and completeness</option></select>'+
 '<div class="dungeon-method-panel" role="status" aria-live="polite"><strong id="dungeon-method-title"></strong><p id="dungeon-method-text"></p></div>'+
 '<div class="dungeon-logic"><div><span>ON-LINE LOWER BOUND</span><strong>Rigorous sign changes of real Z(t)</strong><p>Validated sign changes force zeros on σ=½ in the tested interval.</p></div><div class="dungeon-logic-symbol">+</div><div><span>ALL-STRIP COMPLETENESS</span><strong>Independent zero-count control</strong><p>Argument-principle / Turing-style methods check whether additional strip zeros were missed.</p></div></div>'+
 '<p class="dungeon-note">A floating-point root guess alone certifies neither existence nor completeness. Error-bounded interval calculations make individual sign decisions reliable; a separate global counting argument establishes how many zeros must be accounted for. This is an explanation of the methodology, not a replay or independent proof of the 2021 work.</p>'+
 '<div class="dungeon-samples"><h3>FIRST THREE ZERO ORDINATES — ROUNDED REFERENCE VALUES</h3><p>14.134725… &nbsp; · &nbsp; 21.022039… &nbsp; · &nbsp; 25.010857…</p><small>Illustrative truncated coordinates from Andrew Odlyzko’s original <a href="'+SOURCE_ZEROS+'" target="_blank" rel="noopener noreferrer">high-precision first-100-zero table</a>. Truncated display precision; not independently re-evaluated or certified by this site. The published height theorem supplies rigorous global verification, not these display digits.</small></div>'+
 '<p class="lab-references">SOURCES / '+refs+' · <a href="'+SOURCE_ZEROS+'" target="_blank" rel="noopener noreferrer">OEIS ordinates</a></p></div></section>';
}
export function renderDungeonScene(id) {
 if (!isDungeonLocation(id)) return '';
 if (id === 'dungeon') return district();
 if (id === 'dungeon-height-exhibit') return timeline();
 if (id === 'dungeon-count-exhibit') return count();
 if (id === 'dungeon-certification-exhibit') return certification();
 return site(id);
}
const METHODS = {
 approx:['Approximate coordinates are only candidates','Numerical sampling may suggest roots or sign changes, but an unbounded rounding error can make a supposed sign unreliable. This stage does not prove that the candidates are genuine zeros.'],
 interval:['Bounded arithmetic turns signs into certificates','Enclose relevant computed quantities with rigorous error bounds. If a certified interval for real Z(t) lies strictly above or below zero, its sign is reliable; opposite signs and continuity imply an on-line zero.'],
 complete:['Counting all zeros is an additional theorem-backed obligation','To exclude missed zeros, establish the complete number of critical-strip zeros in the bounded region (for instance with Turing-style zero counting), then match that with independently certified on-line zeros, including multiplicity and endpoint conventions.']
};
export function updateDungeon(root) {
 const slider=root.querySelector('#dungeon-logt');
 if (slider) {
  const x=approximateHeightComparison(Number(slider.value));
  const lnCount=Math.log10(Math.max(1,x.mainTerm));
  const heightFrac=(x.logT-2)/(Math.log10(VERIFIED_HEIGHT)-2);
  const countMin=Math.log10(zeroCountMainTerm(100));
  const countMax=Math.log10(zeroCountMainTerm(VERIFIED_HEIGHT));
  const countFrac=(lnCount-countMin)/(countMax-countMin);
  root.querySelector('#dungeon-height-bar').setAttribute('width',String(620*Math.max(0,Math.min(1,heightFrac))));
  root.querySelector('#dungeon-count-bar').setAttribute('width',String(620*Math.max(0,Math.min(1,countFrac))));
  root.querySelector('#dungeon-height-chart-label').textContent='T ≈ '+printNumber(x.height);
  root.querySelector('#dungeon-count-chart-label').textContent='M(T) ≈ '+printNumber(x.mainTerm)+' (NOT N(T))';
  root.querySelector('#dungeon-logt-output').textContent=x.logT.toFixed(2);
  root.querySelector('#dungeon-selected-height').textContent='Selected imaginary height T ≈ '+printNumber(x.height)+'.';
  root.querySelector('#dungeon-count-estimate').textContent='Asymptotic main-term M(T) ≈ '+printNumber(x.mainTerm)+'; this is NOT an exact integer zero count.';
  root.querySelector('#dungeon-proof-status').textContent='Platt–Trudgian proved all zeros with 0 < Im(ρ) ≤ 3 × 10¹² are on the line and simple. Verification at finite height is NOT proof of RH at every height.';
 }
 const method=root.querySelector('#dungeon-method');
 if(method){
  const [title,desc]=METHODS[method.value]||METHODS.approx;
  root.querySelector('#dungeon-method-title').textContent=title;
  root.querySelector('#dungeon-method-text').textContent=desc;
 }
}

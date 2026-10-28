/* S004: density theorem district; graph IDs and maths metadata live in locations.js. */
import {getLocation, getRootRegion} from './locations.js';
export const isCourtyardLocation = id => getRootRegion(id) === 'courtyard';
const esc = x => String(x ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const annals = 'https://annals.math.princeton.edu/2026/203-2/p06';
const arxiv = 'https://arxiv.org/pdf/2405.20552';
const source = '<a href="'+annals+'" target="_blank" rel="noopener noreferrer">Guth–Maynard, Annals (2026)</a> · <a href="'+arxiv+'" target="_blank" rel="noopener noreferrer">author manuscript, Theorem 1.2 and (1.4)</a>';
const head = (label,title,desc) => '<div class="hall-plan-head"><span>'+label+'</span><h2>'+title+'</h2><p>'+desc+'</p></div>';
function district(id) {
  const options = ['density-guth','density-idea'].map(key=>{
    const n=getLocation(key);
    return '<button class="density-room '+(id===key?'density-room-active':'')+'" data-navigate="'+key+'"><span class="density-room-symbol">'+(key==='density-guth'?'∑':'≠')+'</span><strong>'+esc(n.name)+'</strong><small>'+esc(n.subtitle)+'</small><span>ENTER THE SITE ↗</span></button>';
  }).join('');
  return '<section class="density-district" aria-label="Courtyard zero-density district">'+
    head('CITADEL / COURTYARD','THE DENSITY COURT','Two research sites, one key distinction: controlling the number of possible exceptions is not proving there are none.')+
    '<div class="density-ground"><div class="density-ground-label">ZERO-DENSITY DISTRICT · SCHEMATIC FLOOR PLAN</div><div class="density-rooms">'+options+'</div><p>THE CENTRAL PATH · ½ &lt; Re(s) &lt; 1</p></div>'+
    '<p class="density-foot">Spatial placement is architectural, not an implication between theorems. Every site has its own proof status and sourced explanation.</p></section>';
}
function site(id) {
  const n=getLocation(id);
  return '<section class="density-district" aria-label="Courtyard theorem site">'+
    head('COURTYARD / RESEARCH SITE',esc(n.name.toUpperCase()),esc(n.teaser))+
    '<div class="density-site-panel"><div class="density-site-seal" aria-hidden="true">'+(id==='density-guth'?'30/13':'0?')+'</div>'+
    '<p>'+esc(n.concept)+'</p><p>'+esc(n.progress)+'</p><div class="density-site-entries">'+n.children.map(child=>'<button data-navigate="'+child+'" class="density-entry">ENTER INTERACTIVE EXHIBIT ↗<small>'+esc(getLocation(child).name)+'</small></button>').join('')+'</div></div>'+
    '<div class="density-site-links">REFERENCES / '+source+'</div></section>';
}
function exponentExhibit() {
  return '<section class="lab-exhibit density-exhibit" aria-label="Interactive zero-density exponent exhibit">'+
    head('COURTYARD / GUTH–MAYNARD','THE EXPONENT BENCH','Move σ and the illustrative height scale. These bars compare asymptotic exponents, NOT zero counts or a rigorous finite-height bound.')+
    '<div class="lab-card"><div class="lab-two"><div class="density-graph-wrap">'+
    '<svg class="lab-svg" viewBox="0 0 540 285" role="img" aria-labelledby="density-chart-title density-chart-desc">'+
    '<title id="density-chart-title">Comparison of three zero-density exponents</title>'+
    '<desc id="density-chart-desc">Lengths of three bars are controlled by sigma. Each length represents a theorem exponent, not observed zeros, missing zeros, or a certified count.</desc>'+
    '<path class="lab-grid" d="M125 30V241M225 30V241M325 30V241M425 30V241M525 30V241"/>'+
    '<g class="density-chart-labels"><text x="4" y="75">GM SHARP</text><text x="4" y="145">GM UNIFORM</text><text x="4" y="215">CLASSICAL</text><text x="125" y="263">0</text><text x="225" y="263">0.4</text><text x="325" y="263">0.8</text><text x="425" y="263">1.2</text><text x="515" y="263">1.6</text></g>'+
    '<rect id="density-bar-sharp" x="125" y="51" width="0" height="34" rx="3" fill="#e9c886"/>'+
    '<rect id="density-bar-uniform" x="125" y="121" width="0" height="34" rx="3" fill="#83c9c1"/>'+
    '<rect id="density-bar-classical" x="125" y="191" width="0" height="34" rx="3" fill="#a69abf"/>'+
    '</svg><p class="lab-micro">Exponent x-axis runs from 0 to 1.6. Published theorem: asymptotic as T→∞. Classical reference: earlier 12/5 uniform exponent cited by Guth–Maynard.</p></div>'+
    '<div class="density-controls">'+
    '<label class="lab-label" for="density-sigma">REAL-PART THRESHOLD σ <output id="density-sigma-output" for="density-sigma">0.75</output></label>'+
    '<input id="density-sigma" type="range" min="0.50" max="0.99" step="0.01" value="0.75"/>'+
    '<label class="lab-label" for="density-logt">ILLUSTRATIVE log₁₀(T) <output id="density-logt-output" for="density-logt">6</output></label>'+
    '<input id="density-logt" type="range" min="2" max="12" step="1" value="6"/>'+
    '<div class="lab-readout" role="status" aria-live="polite"><p id="density-exponents"></p><p id="density-height-readout"></p></div>'+
    '</div></div>'+
    '<p class="density-equation">N⁺(σ,T) ≲ T<sup>30(1−σ)/13 + o(1)</sup> &nbsp; (T → ∞)</p>'+
    '<p class="lab-micro"><strong>Warning:</strong> “≲” here is a teaching shorthand for an asymptotic bound with suppressed factors/constants, not a literal numerical inequality. The primary authors use |Im(ρ)|≤T (both signs); this atlas displays 0&lt;Im(ρ)≤T. The conjugate symmetry of zeta zeros changes the number by a factor of two. No bars contain zeta-zero samples or prove that the count is zero.</p>'+
    '<p class="lab-references">PRIMARY / '+source+'</p></div></section>';
}
function meaningExhibit() {
  return '<section class="lab-exhibit density-exhibit" aria-label="Zero-density versus zero-free teaching exhibit">'+
    head('COURTYARD / ROGUE-ZERO WATCH','SPARSE IS NOT ZERO','Three types of statements have different quantifiers. This comparison contains no plotted zeta zeros.')+
    '<div class="lab-card">'+
    '<label class="lab-label" for="density-mode">CHOOSE A KIND OF MATHEMATICAL STATEMENT</label>'+
    '<select id="density-mode" class="lab-select"><option value="density">Zero-density estimate</option><option value="free">Zero-free region theorem</option><option value="rh">Riemann Hypothesis (open)</option></select>'+
    '<div class="density-meaning-diagram" aria-hidden="true"><span>CRITICAL LINE<br/>Re(s) = ½</span><div class="density-meaning-divider"></div><span>OFF-LINE REGION<br/>½ &lt; Re(s) &lt; 1</span></div>'+
    '<div class="lab-readout" role="status" aria-live="polite"><strong id="density-mode-title"></strong><p id="density-mode-explain"></p></div>'+
    '<p class="lab-micro">N(T) counts all nontrivial zeros 0&lt;Im(ρ)≤T; N⁺(σ,T) counts only those satisfying Re(ρ)≥σ, in the same positive-height range, each with multiplicity. The threshold includes equality and T includes its upper endpoint. The original Guth–Maynard paper uses both positive and negative heights. RH would require N⁺(σ,T)=0 for EVERY σ&gt;½ and EVERY T&gt;0; finite samples or density upper bounds do not imply it.</p>'+
    '<p class="lab-references">SOURCES / '+source+' · <a href="https://dlmf.nist.gov/25.10" target="_blank" rel="noopener noreferrer">NIST DLMF §25.10</a></p></div></section>';
}
export function renderCourtyardScene(id) {
  if (!isCourtyardLocation(id)) return '';
  if (id==='density-exponent-exhibit') return exponentExhibit();
  if (id==='density-definition-exhibit') return meaningExhibit();
  if (id==='courtyard') return district(id);
  return site(id);
}
const toFixed = x => x.toFixed(3);
export function updateCourtyard(root) {
  const sigma=root.querySelector('#density-sigma');
  const logt=root.querySelector('#density-logt');
  if (sigma && logt) {
    const s=Number(sigma.value),k=Number(logt.value),g=15*(1-s)/(3+5*s),u=30*(1-s)/13,c=12*(1-s)/5;
    root.querySelector('#density-sigma-output').textContent=s.toFixed(2);
    root.querySelector('#density-logt-output').textContent=String(k);
    for (const [id,e] of [['sharp',g],['uniform',u],['classical',c]]) root.querySelector('#density-bar-'+id).setAttribute('width',String(250*e));
    root.querySelector('#density-exponents').textContent='Exponent values: Guth–Maynard sharper '+toFixed(g)+'; combined 30/13 '+toFixed(u)+'; earlier classical 12/5 '+toFixed(c)+'.';
    root.querySelector('#density-height-readout').textContent='At the illustrative height scale T=10^'+k+', the leading uniform power alone has log₁₀(T^a)='+toFixed(k*u)+'. This omits o(1), implied constants and all finite-height certification; it is NOT a count or numerical upper bound.';
  }
  const mode=root.querySelector('#density-mode');
  if(mode) {
    const info={
      density:['Asymptotic counting bound','At a given σ in its theorem range, N⁺(σ,T) is bounded as T grows, but a nonzero number of off-line zeros can still exist. This does not establish any zero-free region.'],
      free:['Proved zero-free area','A zero-free region theorem rules out zeros in its explicitly specified domain (including any conditions on t). Its guarantee must not be extended outside that domain.'],
      rh:['Universal conjecture — unsolved','RH asserts every nontrivial zeta zero has real part exactly ½; equivalently N⁺(σ,T)=0 for every σ>½ and every T>0. No density estimate proves this.']
    }[mode.value];
    root.querySelector('#density-mode-title').textContent=info[0];
    root.querySelector('#density-mode-explain').textContent=info[1];
  }
}

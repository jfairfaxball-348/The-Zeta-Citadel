/* S003 — deterministic, dependency-free educational laboratory. No zeta values are evaluated. */
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const source = (name,url) => '<a href="'+url+'" target="_blank" rel="noopener noreferrer">'+esc(name)+'</a>';
const dlmf = source('NIST DLMF §25.10','https://dlmf.nist.gov/25.10');
const dlmfBasics = source('NIST DLMF §25.2','https://dlmf.nist.gov/25.2');
const alpoge = source('Alpöge–Furman preprint (2026)','https://arxiv.org/abs/2608.13637');
const lamzouri = source('Lamzouri preprint v2 (2026)','https://arxiv.org/abs/2609.02882');
const conrey = source('Conrey (1989), journal article','https://eudml.org/doc/153151');
const heading = (room, title, description) => '<div class="hall-plan-head"><span>GREAT HALL / '+esc(room)+'</span><h2>'+esc(title)+'</h2><p>'+esc(description)+'</p></div>';
const note = (body, references) => '<p class="lab-footnote">'+esc(body)+'</p><p class="lab-references">SOURCES / '+references+'</p>';
const choices = (id, label, entries) => '<label class="lab-label" for="'+id+'">'+esc(label)+'</label><select id="'+id+'" class="lab-select">'+entries.map(([value,name]) => '<option value="'+value+'">'+esc(name)+'</option>').join('')+'</select>';
const cases = {
  line: {sigma:0.5, t:20, title:'On the critical line — zero status unknown', text:'s = ½ + 20i lies in the critical strip and on its midline. It has NOT been tested as a zeta zero; membership in the line alone is insufficient.'},
  off: {sigma:0.3,t:20,title:'Inside the strip, off the line',text:'s = 0.3 + 20i is inside the open critical strip, but off its midline. It is only a selected coordinate, not a claimed zero or counterexample.'},
  trivial: {sigma:-2,t:0,title:'Trivial zero: ζ(−2) = 0',text:'The negative even integers −2, −4, −6, … are known zeros by the functional equation; these are outside the critical strip and are excluded from RH’s nontrivial-zero claim.'},
  trivial4: {sigma:-4,t:0,title:'Trivial zero: ζ(−4) = 0',text:'Another exact, established trivial zero. The position is a theorem-backed example, not a numerical approximation.'},
  pole: {sigma:1,t:0,title:'Pole at s = 1 — not a zero',text:'ζ(s) has a simple pole at s = 1. It is NOT a zero. The convergent Dirichlet-series domain Re(s) > 1 must not be confused with the full analytic continuation.'},
  zero: {sigma:0,t:0,title:'s = 0 is not a zero',text:'ζ(0) = −1/2 by analytic continuation. Neither the imaginary height zero nor being outside the strip makes a point a zeta zero.'}
};
const milestones = {
  hardy:{title:'Hardy · 1914',value:null,claim:'Infinitely many zeros lie on Re(s) = ½.',logic:'An infinite set need not be a positive proportion of all zeros. This statement does not say what fraction lies on the line.',kind:'Established theorem · existence',source:dlmf},
  selberg:{title:'Selberg · 1942',value:null,claim:'A positive (unspecified here) proportion of zeros lie on the critical line.',logic:'A bound by some constant c > 0 is stronger than mere infinitude, but does not force the proportion to equal 1.',kind:'Established theorem · positive proportion',source:dlmf},
  levinson:{title:'Levinson · 1974',value:1/3,claim:'More than one third of zeros lie on the critical line.',logic:'A lower bound for the limiting proportion, not an exact population survey and not a bound excluding the remaining zeros.',kind:'Established theorem · proportion; zeros counted with multiplicity',source:dlmf},
  conrey:{title:'Conrey · 1989',value:2/5,claim:'More than two fifths lie on the critical line.',logic:'The greater-than bound means an asymptotic lower bound; 40% is not an observed fraction of a finite sample.',kind:'Published result · proportion; counted with multiplicity',source:conrey},
  bui:{title:'Bui et al. · 2011',value:0.41,claim:'More than 41% lie on the critical line (as reported by DLMF).',logic:'A theorem-bound percentage; its scope is the limiting share of zeros counted with multiplicity, not an individual height.',kind:'Published result · proportion',source:dlmf},
  af:{title:'Alpöge–Furman · 2026',value:0.6725,claim:'Preprint claims at least 67.25% are simple AND on the critical line (Montgomery–Taylor window).',logic:'A stronger joint condition, still below 100%; the distinct-zero bound 83.62% is a different metric. Preprint, not upgraded to peer-reviewed status here.',kind:'Research preprint claim · simple AND on-line / counted with multiplicity',source:alpoge}
};
const papers = {
  af:{title:'Alpöge & Furman · arXiv:2608.13637',lines:[['≥ 2/3','simple AND on the line (base window)'],['≥ 0.6725','simple AND on the line (Montgomery–Taylor window)'],['≥ 0.8362','distinct zeros, not necessarily on-line']],description:'Unconditional asymptotic bounds as stated by the authors. Their work describes AI-assisted discovery and human verification, and claims a Lean 4 formalisation. These claims are reported, not independently audited by this atlas.',source:alpoge},
  lam:{title:'Lamzouri · arXiv:2609.02882v2',lines:[['> 67.25%','simple AND on the line'],['≥ 83.62%','distinct zeros'],['≥ 88.76%','simple OR on the line (union)'],['≥ 83.62%','average of simple proportion and on-line proportion']],description:'The paper gives another proof and states two further unconditional asymptotic bounds. OR is not AND; distinct is not the same as simple. Treat as 2026 research-preprint claims.',source:lamzouri}
};
export function renderLabExhibit(id) {
  if (id === 'zero-types-exhibit') return '<section class="lab-exhibit" aria-label="Zero types laboratory">'+heading('CLASSIFICATION','WHICH POINT IS WHICH?','Select an example to identify exact trivial zeros, the pole and merely hypothetical coordinates. No unknown zero is being located.')+
    '<div class="lab-card lab-two"><div>'+choices('taxonomy-case','CHOOSE A COMPLEX POINT',[['line','½ + 20i — critical line'],['off','0.3 + 20i — off-line coordinate'],['trivial','−2 — trivial zero'],['trivial4','−4 — trivial zero'],['pole','1 — the pole'],['zero','0 — regular point']])+
    '<div class="lab-readout" role="status" aria-live="polite"><strong id="taxonomy-title"></strong><p id="taxonomy-text"></p></div>'+
    '<p class="lab-micro">Only the labelled negative even examples are asserted zeros. All examples are exact classifications, not a computed catalogue.</p></div>'+
    '<svg class="lab-svg" viewBox="0 0 540 310" role="img" aria-labelledby="tax-title tax-desc"><title id="tax-title">Selected complex point in a wider coordinate plane</title><desc id="tax-desc">The vertical shaded strip runs from real part zero to one, with a dotted vertical critical line at one half; the chosen point may be outside the strip.</desc><rect x="340" y="25" width="65" height="250" class="lab-strip"/><path d="M80 25V275M145 25V275M210 25V275M275 25V275M340 25V275M405 25V275M470 25V275 M80 200H470" class="lab-grid"/><path d="M372.5 25V275" class="lab-line"/><g class="lab-svg-labels"><text x="80" y="296">−4</text><text x="210" y="296">−2</text><text x="338" y="296">0</text><text x="403" y="296">1</text><text x="467" y="296">2</text><text x="340" y="15">STRIP</text><text x="369" y="42">½</text><text x="14" y="204">t = 0</text></g><circle id="taxonomy-point" cx="372.5" cy="75" r="8" class="lab-dot"/></svg></div>'+
    note('Wider plane is schematic: y-height compresses 0–20; spacing on the horizontal real axis is linear. The pole is at s=1, while negative even integers are trivial zeros.',dlmf+' · '+dlmfBasics)+'</section>';
  if (id === 'hardy-signs-exhibit') return '<section class="lab-exhibit" aria-label="Hardy sign-change teaching exhibit">'+heading('HARDY’S GALLERY','THE SIGN-CHANGE IDEA','A continuous real function changing sign must pass through zero. Here the plotted function is a sine wave, NOT Hardy’s Z(t) or ζ(s).')+
    '<div class="lab-card">'+
    '<label class="lab-label" for="hardy-waves">TOY OSCILLATION COUNT <output id="hardy-count" for="hardy-waves">3</output></label><input id="hardy-waves" type="range" min="1" max="8" step="1" value="3"/>'+
    '<svg class="lab-svg" viewBox="0 0 540 225" role="img" aria-labelledby="hardy-title hardy-desc"><title id="hardy-title">Sign changes of a continuous sine-wave toy function</title><desc id="hardy-desc">A toy sine graph crosses the horizontal zero axis; changing the number of waves changes the number of interior zeros. This graph is not computed from the zeta function.</desc><path d="M20 112H520" class="lab-grid"/><path id="hardy-curve" d="" class="lab-curve"/><g id="hardy-markers"></g><text x="20" y="207" class="lab-svg-tiny">x = 0</text><text x="466" y="207" class="lab-svg-tiny">x = 1</text></svg>'+
    '<div class="lab-readout" role="status" aria-live="polite" id="hardy-readout"></div><p class="lab-micro">Hardy’s genuine theorem proves infinitely many zeros of ζ on the line. No finite sine graph proves an infinite claim. A sign change is sufficient to imply a zero of a continuous real function; a zero need not change sign.</p></div>'+
    note('The toy function is f(x)=sin(nπx) for 0≤x≤1. Hardy’s Z(t) is a different, zeta-derived real-valued function.',dlmf)+'</section>';
  if (id === 'milestones-exhibit') return '<section class="lab-exhibit" aria-label="Milestones and quantifiers exhibit">'+heading('LEVINSON’S WORKSHOP','HOW MUCH IS PROVED?','Explore the logical difference between infinitely many, a positive proportion, a numerical lower bound, and all.')+
    '<div class="lab-card">'+choices('milestone-select','SELECT A HISTORICAL RESULT',Object.keys(milestones).map(key=>[key,milestones[key].title]))+
    '<div class="lab-readout" role="status" aria-live="polite"><strong id="milestone-title"></strong><p id="milestone-claim"></p></div>'+
    '<div class="lab-progress" aria-hidden="true"><div id="milestone-bar"></div><div class="lab-full-line"></div></div><div class="lab-micro" id="milestone-scale"></div>'+
    '<p id="milestone-kind" class="lab-status"></p><p id="milestone-logic" class="lab-micro"></p><div id="milestone-source" class="lab-references"></div>'+
    '<p class="lab-micro">All displayed percentages are asymptotic lower bounds, <strong>not</strong> measurements of plotted or sampled zeros. The 100% reference is RH’s conjectural universal conclusion, not an established result.</p></div></section>';
  if (id === 'mollifier-toy-exhibit') return '<section class="lab-exhibit" aria-label="Mollifier intuition exhibit">'+heading('MOLLIFIER LABORATORY','DAMPING FLUCTUATIONS','An exact toy multiplier: f(x)=1+a cos(x), m(x)=1−a cos(x). Their product is 1−a² cos²(x). This is NOT an actual zeta mollifier.')+
    '<div class="lab-card">'+
    '<label class="lab-label" for="toy-a">FLUCTUATION AMPLITUDE a <output id="toy-out" for="toy-a">0.50</output></label><input type="range" min="0" max="0.8" step="0.05" value="0.5" id="toy-a"/>'+
    '<svg class="lab-svg" viewBox="0 0 540 255" role="img" aria-labelledby="toy-title toy-desc"><title id="toy-title">Toy multiplication reduces a fluctuating envelope</title><desc id="toy-desc">Plot of 1 plus a cosine before and after multiplying by 1 minus a cosine; toy formula only.</desc><path d="M15 125H525" class="lab-grid"/><path id="toy-raw" class="lab-curve" d=""/><path id="toy-product" class="lab-curve lab-curve-secondary" d=""/></svg>'+
    '<div class="lab-legend"><span>— Original: 1 + a cos(x)</span><span>— Product: 1 − a² cos²(x)</span></div><p class="lab-readout" role="status" aria-live="polite" id="toy-result"></p>'+
    '<p class="lab-micro">Real mollifiers are tailored short Dirichlet polynomials used in analytic estimates; multiplying by a simple toy inverse neither computes ζ nor yields a zero proportion. The red/blue curves are exact toy functions, not observed data.</p></div>'+
    note('Method context: Levinson and Conrey; DLMF notes established critical-line bounds. Toy formula follows by elementary algebra.',dlmf+' · '+conrey)+'</section>';
  if (id === 'research-comparison-exhibit') return '<section class="lab-exhibit" aria-label="Modern preprint comparison">'+heading('CONTEMPORARY RESULTS','2026 PREPRINT DESK','Choose an original paper to inspect distinctly defined asymptotic quantities. These research claims are NOT presented as peer-reviewed or a proof of RH.')+
    '<div class="lab-card">'+choices('paper-select','CHOOSE A PREPRINT',[['af','Alpöge–Furman · August 2026'],['lam','Lamzouri · September 2026 (v2)']])+
    '<div class="lab-readout" aria-live="polite" role="status"><strong id="paper-title"></strong><div id="paper-metrics" class="lab-metrics"></div><p id="paper-description"></p></div>'+
    '<div id="paper-source" class="lab-references"></div><p class="lab-micro">As of 28 October 2026, this atlas treats both arXiv texts as research preprints. These are limiting lower bounds with nontrivial zeros counted with multiplicity in the denominator. A distinct zero and a simple zero are different notions. Finite drawings prove neither bound nor RH.</p></div></section>';
  return '';
}
const set = (root,selector,text) => {const el=root.querySelector(selector);if(el)el.textContent=text;};
const clamp = (x,a,b) => Math.max(a,Math.min(b,x));
const coords = values => values.map(([x,y],i) => (i?'L':'M')+x.toFixed(2)+','+y.toFixed(2)).join(' ');
export function updateLab(root) {
  const taxonomy = root.querySelector('#taxonomy-case');
  if (taxonomy) {
    const c = cases[taxonomy.value] || cases.line;
    const x=340+65*c.sigma, y=200-6.25*c.t;
    const dot=root.querySelector('#taxonomy-point'); dot.setAttribute('cx',String(clamp(x,15,525)));dot.setAttribute('cy',String(clamp(y,25,275)));
    set(root,'#taxonomy-title',c.title);set(root,'#taxonomy-text',c.text);
  }
  const hardy=root.querySelector('#hardy-waves');
  if(hardy) {
    const n=Number(hardy.value), curve=root.querySelector('#hardy-curve'), markers=root.querySelector('#hardy-markers');
    const points=Array.from({length:251},(_,i)=>[20+i*2,112-75*Math.sin(n*Math.PI*i/250)]);
    curve.setAttribute('d',coords(points));
    markers.replaceChildren();
    for(let j=1;j<n;j++){const dot=document.createElementNS('http://www.w3.org/2000/svg','circle');dot.setAttribute('cx',String(20+500*j/n));dot.setAttribute('cy','112');dot.setAttribute('r','4');dot.setAttribute('class','lab-marker');markers.append(dot);}
    set(root,'#hardy-count',String(n));
    set(root,'#hardy-readout','Toy function f(x)=sin('+n+'πx) has '+(n-1)+' interior zero'+(n-1===1?'':'s')+' on (0,1), plus two endpoint zeros. This is a finite illustration, not Hardy’s theorem.');
  }
  const milestone=root.querySelector('#milestone-select');
  if(milestone) {
    const m=milestones[milestone.value]||milestones.hardy;
    set(root,'#milestone-title',m.title);set(root,'#milestone-claim',m.claim);set(root,'#milestone-kind',m.kind);set(root,'#milestone-logic',m.logic);
    const bar=root.querySelector('#milestone-bar');
    bar.style.width=m.value===null?'0%':(m.value*100).toFixed(2)+'%';
    set(root,'#milestone-scale',m.value===null?'No specific numeric lower bound in this statement · 100% = conjectured RH benchmark': 'Proven/reported asymptotic lower bound: '+(m.value*100).toFixed(m.value===0.6725?2:1)+'% · 100% = conjectured RH benchmark');
    root.querySelector('#milestone-source').innerHTML='SOURCE / '+m.source;
  }
  const toy=root.querySelector('#toy-a');
  if(toy) {
    const a=Number(toy.value);
    const raw=[],product=[];
    for(let i=0;i<=250;i++){const x=i*Math.PI*2/250, wave=Math.cos(x);raw.push([15+i*510/250,210-100*(1+a*wave)]);product.push([15+i*510/250,210-100*(1-a*a*wave*wave)]);}
    root.querySelector('#toy-raw').setAttribute('d',coords(raw));
    root.querySelector('#toy-product').setAttribute('d',coords(product));
    set(root,'#toy-out',a.toFixed(2));
    set(root,'#toy-result','Original range: '+(1-a).toFixed(2)+'–'+(1+a).toFixed(2)+'; product range: '+(1-a*a).toFixed(2)+'–1.00. The product fluctuates less in this toy model.');
  }
  const paper=root.querySelector('#paper-select');
  if(paper) {
    const p=papers[paper.value]||papers.af;
    set(root,'#paper-title',p.title);set(root,'#paper-description',p.description);
    root.querySelector('#paper-metrics').innerHTML=p.lines.map(([value,description])=>'<div><strong>'+esc(value)+'</strong><span>'+esc(description)+'</span></div>').join('');
    root.querySelector('#paper-source').innerHTML='ORIGINAL TEXT / '+p.source;
  }
}

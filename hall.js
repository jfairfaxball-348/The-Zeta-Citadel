/* S002 architectural map and teaching exhibit; all statements come from locations.js. */
import { getLocation, isHallLocation } from './locations.js';
import { renderLabExhibit, updateLab } from './laboratory.js';

const ROOMS = [
  {id: 'hall-hardy', slot: 'hardy', symbol: '∞'},
  {id: 'hall-levinson', slot: 'levinson', symbol: '⅓'},
  {id: 'hall-mollifier', slot: 'mollifier', symbol: '∑'},
  {id: 'hall-2026', slot: 'research', symbol: '⅔'},
  {id: 'hall-critical', slot: 'critical', symbol: '½'}
];
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
export { isHallLocation };

export function renderHallScene(id) {
  if (!isHallLocation(id)) return '';
  if (id === 'critical-line-exhibit') return renderExhibit();
  if (getLocation(id)?.type === 'exhibit') return renderLabExhibit(id);
  const chambers = ROOMS.map(({id: roomId, slot, symbol}) => {
    const room = getLocation(roomId);
    return `<button class="hall-room hall-room-${slot} ${id===roomId?'hall-room-active':''}" data-navigate="${roomId}" aria-label="Enter ${esc(room.name)}" aria-current="${id===roomId?'location':'false'}"><span class="hall-room-glyph" aria-hidden="true">${symbol}</span><strong>${esc(room.name)}</strong><small>${esc(room.subtitle)}</small><span class="hall-room-entry">EXPLORE ↗</span></button>`;
  }).join('');
  return `<section class="hall-plan" aria-label="Interactive Great Hall floor plan">
    <div class="hall-plan-head"><span>THE ZETA CITADEL / INTERIOR ATLAS</span><h2>THE GREAT HALL</h2><p>Five chambers around a central nave. Their arrangement is architectural illustration, not mathematical implication.</p></div>
    <div class="hall-plan-frame">
      <div class="hall-plan-walls" aria-hidden="true"></div>
      <div class="hall-plan-grid">
        ${chambers}
        <div class="hall-plan-nave" aria-hidden="true"><span>✧</span><span>THE CENTRAL NAVE</span><span>✧</span></div>
      </div>
    </div>
    <div class="hall-plan-foot"><span>FLOOR PLAN / SCHEMATIC</span><span>SELECT A CHAMBER TO EXPLORE</span></div>
  </section>`;
}

function renderExhibit() {
  return `<section class="critical-exhibit" aria-label="Interactive coordinate exhibit">
    <div class="hall-plan-head"><span>GREAT HALL / CRITICAL LINE OBSERVATORY</span><h2>THE CRITICAL STRIP</h2><p>Move a point to explore the coordinates s = σ + it. This is a <strong>schematic diagram</strong>, not an evaluation of ζ(s) or a plot of zeros.</p></div>
    <div class="critical-exhibit-body">
      <svg id="critical-graph" viewBox="0 0 580 326" role="img" aria-labelledby="critical-title critical-desc">
        <title id="critical-title">The critical strip and selectable complex coordinate</title>
        <desc id="critical-desc">A coordinate grid with real part sigma from zero to one on the horizontal axis and illustrative imaginary part t from zero to forty vertically. A gold vertical line indicates sigma one-half. A point moves with two sliders; it is not a computed zeta zero.</desc>
        <rect x="70" y="38" width="440" height="233" class="critical-plot-fill" />
        <g class="critical-grid"><path d="M70 38V271 M180 38V271 M290 38V271 M400 38V271 M510 38V271 M70 271H510 M70 213H510 M70 155H510 M70 97H510 M70 38H510"/></g>
        <path class="critical-line" d="M290 38V271" />
        <g class="critical-axis-labels"><text x="70" y="290" text-anchor="middle">0</text><text x="290" y="290" text-anchor="middle">½</text><text x="510" y="290" text-anchor="middle">1</text><text x="290" y="315" text-anchor="middle">Re(s) = σ</text><text x="57" y="275" text-anchor="end">0</text><text x="57" y="43" text-anchor="end">40</text><text x="29" y="151" text-anchor="middle" transform="rotate(-90 29 151)">Im(s) = t (illustrative)</text></g>
        <text x="299" y="28" class="critical-line-label">CRITICAL LINE</text>
        <circle id="chosen-point-ring" cx="290" cy="155" r="13" class="critical-point-ring"/>
        <circle id="chosen-point" cx="290" cy="155" r="5" class="critical-point"/>
      </svg>
      <div class="critical-controls">
        <label for="critical-sigma">REAL PART σ <output id="sigma-output" for="critical-sigma">0.50</output></label>
        <input id="critical-sigma" type="range" min="0" max="1" step="0.01" value="0.5"/>
        <label for="critical-height">IMAGINARY PART t <output id="height-output" for="critical-height">20</output></label>
        <input id="critical-height" type="range" min="0" max="40" step="1" value="20"/>
        <p id="critical-coordinate" class="critical-coordinate" aria-live="polite">s = 0.50 + 20i — on the critical line.</p>
        <p class="critical-nonzero"><strong>Not a verified zero.</strong> The point is user-selected and has not been tested as a zero of ζ(s).</p>
        <p class="critical-disclaimer">The strip 0 &lt; Re(s) &lt; 1 contains the nontrivial zeros. RH claims that every one has Re(s) = ½. A chosen point, a picture, or any finite set of checks cannot prove that universal statement.</p>
      </div>
    </div>
  </section>`;
}

export function updateCriticalExplorer(root) {
  const sigma = root.querySelector('#critical-sigma');
  const height = root.querySelector('#critical-height');
  if (!sigma || !height) return;
  const s = Number(sigma.value), t = Number(height.value);
  const x = 70 + 440 * s, y = 271 - (233 * t / 40);
  for (const id of ['chosen-point', 'chosen-point-ring']) {
    const dot = root.querySelector('#' + id);
    dot.setAttribute('cx', String(x));
    dot.setAttribute('cy', String(y));
  }
  root.querySelector('#sigma-output').textContent = s.toFixed(2);
  root.querySelector('#height-output').textContent = String(t);
  const position = Math.abs(s - .5) < 0.0001 ? 'on the critical line' : s > 0 && s < 1 ? 'inside the critical strip, off the critical line' : 'on the boundary of the strip';
  root.querySelector('#critical-coordinate').textContent = `s = ${s.toFixed(2)} + ${t}i — ${position}. This does not establish a zeta zero.`;
}

export { updateLab };

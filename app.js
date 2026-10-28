import { EDITION, REGIONS, SUBNODES, getNode, getRegion } from './atlas.js';

const SVG_NS = 'http://www.w3.org/2000/svg';
const WIDTH = 1560;
const HEIGHT = 980;
const ASPECT = HEIGHT / WIDTH;
const HOME = { x: 0, y: 0, w: WIDTH, h: HEIGHT };
const state = { selected: null, view: { ...HOME }, animation: null, drag: null, moved: false, tourIndex: -1 };
const $ = (selector) => document.querySelector(selector);
const svg = $('#citadel-map');
const regionNav = $('#region-nav');
const storyContent = $('#story-content');
const markers = $('#subnode-markers');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// All narrative comes from the local, trusted atlas.js; still escape text before templating.
const escapeHTML = (value) => String(value ?? '').replace(/[&<>"']/g, (ch) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const safeURL = (url) => /^https:\/\//.test(url) ? url : '#';
const links = (items = []) => items.map((item) => `<a href="${escapeHTML(safeURL(item.url))}" target="_blank" rel="noopener noreferrer">${escapeHTML(item.name)}</a>`).join('');
const getParent = (id) => SUBNODES[id]?.parent || null;
const isSubnode = (id) => Boolean(SUBNODES[id]);
const animateEase = (t) => 1 - Math.pow(1 - t, 3);
const clamp = (n, lo, hi) => Math.max(lo, Math.min(hi, n));

function buildNav() {
  regionNav.innerHTML = REGIONS.map((r) => `<button class="region-nav-button" data-navigate="${r.id}" aria-label="Explore ${escapeHTML(r.name)}"><span class="nav-number">${r.number}</span><span><span class="nav-name">${escapeHTML(r.name)}</span><span class="nav-subtitle">${escapeHTML(r.subtitle)}</span></span><span class="nav-arrow">↗</span></button>`).join('');
}
function createStars() {
  const target = $('#stars');
  // Deterministic decorative starfield, no random layout changes across reloads.
  let seed = 111239;
  function next() { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 165; i++) {
    const x = 32 + next() * 1495; const y = 28 + next() * 917;
    const dist = Math.hypot(x - 780, y - 490);
    if (dist < 510 || dist > 900) continue;
    const star = document.createElementNS(SVG_NS, 'circle');
    star.setAttribute('cx', x.toFixed(1));star.setAttribute('cy', y.toFixed(1));star.setAttribute('r', (next() * 1.9 + .55).toFixed(1));
    star.setAttribute('fill','#d5c9a2');star.setAttribute('opacity',(next() * .35 + .14).toFixed(2));
    fragment.append(star);
  }
  target.append(fragment);
}
function showView() {
  const v = state.view;
  svg.setAttribute('viewBox', `${v.x.toFixed(3)} ${v.y.toFixed(3)} ${v.w.toFixed(3)} ${v.h.toFixed(3)}`);
  markers.style.display = state.selected && v.w < 680 && getRegion(getParent(state.selected) || state.selected)?.subnodes?.length ? '' : 'none';
}
function bounded(v) {
  const w = clamp(v.w, 155, WIDTH);
  const h = w * ASPECT;
  return {w, h, x: clamp(v.x, -25, WIDTH-w+25), y: clamp(v.y,-25,HEIGHT-h+25)};
}
function zoomTo(target, smooth = true) {
  const end = bounded(target);
  if (state.animation) cancelAnimationFrame(state.animation);
  state.animation = null;
  if (!smooth || reducedMotion) { state.view = end; showView(); return; }
  const start = { ...state.view };
  let begin;
  function tick(time) {
    if (begin === undefined) begin = time;
    const t = animateEase(Math.min(1, (time - begin) / 640));
    state.view = { x:start.x+(end.x-start.x)*t, y:start.y+(end.y-start.y)*t, w:start.w+(end.w-start.w)*t, h:start.h+(end.h-start.h)*t };
    showView();
    if (t < 1) state.animation = requestAnimationFrame(tick); else state.animation = null;
  }
  state.animation = requestAnimationFrame(tick);
}
function targetFor(id) {
  if (SUBNODES[id]) {const {x,y} = SUBNODES[id]; const w = 235;return {x:x-w/2,y:y-(w*ASPECT)/2,w,h:w*ASPECT};}
  const {x,y,w} = getRegion(id).focus;return {x:x-w/2,y:y-(w*ASPECT)/2,w,h:w*ASPECT};
}
function updateURL(id) {
  const path = id ? `#${encodeURIComponent(id)}` : window.location.pathname + window.location.search;
  if (id && window.location.hash === path) return;
  // A preview rendered in an opaque-origin sandbox may disallow history updates.
  try { history.replaceState(null, '', path); } catch { /* Navigation itself still works. */ }
}
function hideMobileMenu() {
  $('#guide').classList.remove('open');
  $('#mobile-guide').setAttribute('aria-expanded','false');
}
function select(id, options = {}) {
  if (id && !getNode(id)) return;
  state.selected = id || null;
  if (!options.keepView) zoomTo(id ? targetFor(id) : HOME, true);
  if (!options.noURL) updateURL(state.selected);
  document.querySelectorAll('[data-region]').forEach((el) => el.classList.toggle('active', el.getAttribute('data-region') === (getParent(id) || id)));
  document.querySelectorAll('.region-nav-button').forEach((el) => el.classList.toggle('active', el.dataset.navigate === (getParent(id) || id)));
  renderMarkers();
  renderStory();
  updateBreadcrumbs();
  $('#map-mode').textContent = id ? `FOCUSED / ${getNode(id).name.toUpperCase()}` : 'OVERVIEW / THE KNOWN & UNKNOWN';
  hideMobileMenu();
  if (window.matchMedia('(max-width: 660px)').matches && id) $('#story-panel').scrollIntoView({behavior:reducedMotion ? 'instant' : 'smooth', block:'nearest'});
}
function updateBreadcrumbs() {
  const id = state.selected;
  let html = '';
  if (id) {
    const parent = getParent(id);
    if (parent) html += `<span class="crumb-sep">/</span><button data-navigate="${parent}">${escapeHTML(getRegion(parent).name.toUpperCase())}</button>`;
    html += `<span class="crumb-sep">/</span><span class="crumb-name">${escapeHTML(getNode(id).name.toUpperCase())}</span>`;
  }
  $('#breadcrumbs').innerHTML = html;
}
function renderMarkers() {
  markers.replaceChildren();
  const parentId = getParent(state.selected) || state.selected;
  const parent = getRegion(parentId);
  if (!parent?.subnodes?.length) return;
  const fragment = document.createDocumentFragment();
  parent.subnodes.forEach((id, index) => {
    const node = SUBNODES[id];
    const g = document.createElementNS(SVG_NS,'g');
    g.classList.add('subsite');
    if (state.selected === id) g.classList.add('active');
    g.dataset.node = id;
    g.setAttribute('role','button'); g.setAttribute('tabindex','0'); g.setAttribute('aria-label',`Explore ${node.name}`);
    const circle = document.createElementNS(SVG_NS,'circle');circle.setAttribute('cx',node.x);circle.setAttribute('cy',node.y);circle.setAttribute('r','13');circle.classList.add('subsite-halo');
    const core = document.createElementNS(SVG_NS,'circle');core.setAttribute('cx',node.x);core.setAttribute('cy',node.y);core.setAttribute('r','3.5');core.classList.add('subsite-core');
    const text = document.createElementNS(SVG_NS,'text');text.setAttribute('x',node.x+17);text.setAttribute('y',node.y + (index%2 ? 5 : -9));text.textContent = `0${index+1}`;
    g.append(circle,core,text);fragment.append(g);
  });
  markers.append(fragment);
  showView();
}
function section(kicker, title, body, extraClass = '') {
  return `<section class="story-section"><h3><span>${kicker}</span>${title}</h3><p class="${extraClass}">${escapeHTML(body)}</p></section>`;
}
function renderStory() {
  const id = state.selected;
  if (!id) {
    storyContent.innerHTML = `<div class="story-head"><div class="story-eyebrow"><i></i>WELCOME TO THE ATLAS</div><h2>The mystery<br/>at the <em>centre.</em></h2><p class="story-subtitle">One question, many frontiers</p><p class="story-teaser">Every nontrivial zero of the Riemann zeta function is conjectured to lie on a single vertical line: Re(s) = ½. From this unresolved centre radiate entire fields of mathematics.</p><div class="overview-sigil"><svg viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="44" stroke="#d8bd87" stroke-opacity=".55"/><circle cx="50" cy="50" r="32" stroke="#d8bd87" stroke-opacity=".55"/><circle cx="50" cy="50" r="20" stroke="#d8bd87" stroke-opacity=".65"/><path d="M50 0V100M0 50H100" stroke="#d8bd87" stroke-opacity=".42"/><text x="50" y="63" text-anchor="middle" font-family="Georgia" font-size="37" fill="#d8bd87">ζ</text></svg></div></div><div class="story-section"><h3><span>01 /</span>THE READING KEY</h3><p>The outer rings describe broader mathematical settings. The fortress holds different kinds of progress on the original Riemann Hypothesis. Choose a region on the map or in the index to explore it.</p><div class="legend"><div class="legend-item"><i class="legend-dot horizon"></i> The mathematical horizons</div><div class="legend-item"><i class="legend-dot interior"></i> The citadel's four chambers</div><div class="legend-item"><i class="legend-dot sites"></i> Smaller sites discovered when you zoom in</div></div></div><div class="overview-card"><strong>THE CARTOGRAPHER'S WARNING</strong><p>The geography is a teaching metaphor, not a strict hierarchy of implication. Terms like Grand RH and Extended RH vary by author. Dates and sources are given for specific claims.</p></div><div class="story-actions"><button data-navigate="selberg">START EXPLORING ↗</button><button data-action="guide">MAP GUIDE ?</button></div>`;
    return;
  }
  const node = getNode(id), parent = getParent(id), region = getRegion(parent || id), subnode = Boolean(parent);
  const header = `<div class="story-head"><div class="story-eyebrow"><i></i>${subnode ? 'DEEP SITE' : region.kind==='horizon' ? 'THE MATHEMATICAL HORIZONS' : 'INSIDE THE CITADEL'} ${subnode ? '/ DETAIL' : `/ REGION ${region.number}`}</div><h2>${escapeHTML(node.name)}</h2><p class="story-subtitle">${escapeHTML(node.subtitle)}</p><p class="story-teaser">${escapeHTML(node.teaser || region.teaser)}</p><div class="story-status"><span class="status-icon">✦</span><div><small>CURRENT STATUS</small><b>${escapeHTML(node.status)}</b></div></div></div>`;
  let body = section('01 /','THE CONCEPT',node.concept);
  body += section('02 /','CURRENT STATE',node.progress);
  body += section('03 /','WHY IT MATTERS',node.stakes);
  if (!subnode && node.milestones?.length) body += `<section class="story-section"><h3><span>04 /</span>CHRONICLE</h3><ol class="timeline">${node.milestones.map((m)=>`<li><strong>${escapeHTML(m.year)}</strong>${escapeHTML(m.text)}</li>`).join('')}</ol></section>`;
  if (!subnode && node.subnodes?.length) {
    body += `<section class="story-section"><h3><span>↳ /</span>ZOOM DEEPER</h3><div class="subnode-list">${node.subnodes.map((key) => { const sub = SUBNODES[key];return `<button class="subnode-item" data-navigate="${sub.id}"><span class="subnode-icon">◇</span><span><strong>${escapeHTML(sub.name)}</strong><small>${escapeHTML(sub.subtitle)}</small></span></button>`;}).join('')}</div></section>`;
  }
  if (!subnode) body += section('※ /','CARTOGRAPHER’S NOTE',node.caution,'story-caution');
  body += `<section class="story-section"><h3><span>↗ /</span>PRIMARY SOURCES</h3><div class="story-sources">${links(node.sources)}</div></section>`;
  body += `<div class="story-actions"><button data-navigate="${parent || ''}">${parent ? '← PARENT REGION' : '← FULL ATLAS'}</button><button data-action="guide">READ THE MAP ?</button></div>`;
  storyContent.innerHTML = header + body;
}
function svgPoint(event) {
  const point = svg.createSVGPoint(); point.x = event.clientX; point.y = event.clientY;
  const matrix = svg.getScreenCTM();
  return matrix ? point.matrixTransform(matrix.inverse()) : {x:780,y:490};
}
function zoomStep(factor, at) {
  const current = state.view;
  const anchor = at || {x:current.x+current.w/2,y:current.y+current.h/2};
  const scale = clamp(current.w * factor,155,WIDTH) / current.w;
  zoomTo({x:anchor.x-(anchor.x-current.x)*scale,y:anchor.y-(anchor.y-current.y)*scale,w:current.w*scale,h:current.h*scale},true);
}
function targetClick(event) {
  if (state.moved) {state.moved = false;return;}
  const sub = event.target.closest('[data-node]');
  if (sub) {select(sub.dataset.node);return;}
  const region = event.target.closest('[data-region]');
  if (region) select(region.dataset.region);
}
function bindEvents() {
  document.addEventListener('click',(event)=>{
    const nav = event.target.closest('[data-navigate]');
    if(nav) { select(nav.getAttribute('data-navigate') || null);return; }
    if(event.target.closest('[data-action="guide"]')) showDialog();
  });
  svg.addEventListener('click',targetClick);
  svg.addEventListener('keydown',(event)=>{
    if ((event.key === 'Enter' || event.key === ' ') && (event.target.hasAttribute('data-region') || event.target.hasAttribute('data-node'))) {
      event.preventDefault();event.target.dispatchEvent(new MouseEvent('click',{bubbles:true}));
    }
    if(event.key==='Escape') {event.preventDefault();goBack();}
  });
  svg.addEventListener('wheel',(event)=>{event.preventDefault();const factor = event.deltaY<0 ? .82 : 1.21;zoomStep(factor,svgPoint(event));},{passive:false});
  svg.addEventListener('pointerdown',(event)=>{
    if(event.button !== 0) return;
    if(state.animation) cancelAnimationFrame(state.animation);
    state.animation = null;state.moved=false;
    state.drag={startX:event.clientX,startY:event.clientY,initial:{...state.view}};
    svg.setPointerCapture(event.pointerId);
  });
  svg.addEventListener('pointermove',(event)=>{
    if(!state.drag) return;
    const dx=event.clientX-state.drag.startX,dy=event.clientY-state.drag.startY;
    if(Math.abs(dx)+Math.abs(dy)>7) {state.moved=true;svg.classList.add('dragging');}
    if(!state.moved) return;
    const init=state.drag.initial;
    const ctm=svg.getScreenCTM();
    const scale=ctm ? ctm.a : (svg.clientWidth/init.w);
    state.view=bounded({x:init.x-dx/scale,y:init.y-dy/scale,w:init.w,h:init.h});showView();
  });
  function release(event) {
    state.drag=null;svg.classList.remove('dragging');
    if(svg.hasPointerCapture(event.pointerId)) svg.releasePointerCapture(event.pointerId);
    if(state.moved) {setTimeout(()=>{state.moved=false;},0);}
  }
  svg.addEventListener('pointerup',release);svg.addEventListener('pointercancel',release);
  $('#map-home').addEventListener('click',()=>select(null));
  $('#reset-view').addEventListener('click',()=>select(null));
  $('#zoom-in').addEventListener('click',()=>zoomStep(.72));
  $('#zoom-out').addEventListener('click',()=>zoomStep(1.39));
  $('#guided-tour').addEventListener('click',()=>{
    state.tourIndex = (state.tourIndex+1) % REGIONS.length;
    select(REGIONS[state.tourIndex].id);
    $('#guided-tour').querySelector('span:last-child').firstChild.textContent='Continue the guided journey';
  });
  $('#map-help').addEventListener('click',showDialog);
  $('#mobile-guide').addEventListener('click',()=>{const open=$('#guide').classList.toggle('open');$('#mobile-guide').setAttribute('aria-expanded',String(open));});
  $('#close-dialog').addEventListener('click',()=>$('#guide-dialog').close());
  $('#dialog-okay').addEventListener('click',()=>$('#guide-dialog').close());
  $('#guide-dialog').addEventListener('click',(event)=>{if(event.target === $('#guide-dialog')) $('#guide-dialog').close();});
  window.addEventListener('keydown',(event)=>{if(event.key==='Escape' && !$('#guide-dialog').open && state.selected) goBack();});
  window.addEventListener('hashchange',()=>{const id=decodeURIComponent(location.hash.slice(1));select(getNode(id)?id:null,{noURL:true});});
}
function goBack() {select(getParent(state.selected) || null);}
function showDialog() {$('#guide-dialog').showModal();}
function boot() {
  $('#edition').textContent = EDITION;
  buildNav();createStars();bindEvents();
  const hash = decodeURIComponent(location.hash.slice(1));
  if (hash && getNode(hash)) select(hash,{noURL:true}); else {showView();renderStory();updateBreadcrumbs();}
}
boot();

import {renderProjectContext} from './project-context.js';
import {profile, projects} from './content.js';
import {renderFeatureGym} from './feature-gym.js';
import {renderAeoliadaDiagrams} from './aeoliada-diagrams.js';
import {renderHorrorDiagrams} from './horror-diagrams.js';
const $ = selector => document.querySelector(selector);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = value => {
  if (!value) return '';
  try { const url = new URL(value, location.href); return ['http:', 'https:'].includes(url.protocol) ? escape(url.href) : ''; } catch { return ''; }
};
const link = (url, label, cls = 'text-link') => safeUrl(url) ? `<a class="${cls}" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>` : '';
$('#intro').textContent = profile.intro;
$('#year').textContent = new Date().getFullYear();
$('#hero-links').innerHTML = (profile.resume ? '<a class='+String.fromCharCode(34)+'text-link'+String.fromCharCode(34)+' href='+String.fromCharCode(34)+safeUrl(profile.resume)+String.fromCharCode(34)+' download>Resume (PDF)</a>' : '') + link(profile.github, 'GitHub') + link(profile.linkedin, 'LinkedIn');
$('#contact-links').innerHTML = (profile.email ? `<a class="button" href="mailto:${escape(encodeURIComponent(profile.email))}">Email me ↗</a>` : '') + link(profile.github, 'GitHub') + link(profile.linkedin, 'LinkedIn') + (profile.resume ? '<a class='+String.fromCharCode(34)+'text-link'+String.fromCharCode(34)+' href='+String.fromCharCode(34)+safeUrl(profile.resume)+String.fromCharCode(34)+' download>Resume (PDF)</a>' : '');
if (!$('#contact-links').children.length) $('#contact-links').innerHTML = '<p class="pending">Contact details will be added before launch.</p>';
$('#projects').innerHTML = projects.map((p, i) => `<article class="project project-${i}"><button class="project-visual" data-project="${p.id}" aria-label="Explore ${escape(p.name)}">${safeUrl(p.media) ? `<img src="${safeUrl(p.media)}" alt="${escape(p.name)} gameplay" loading="lazy">` : `<div class="technical-art" aria-hidden="true"><span class="art-label">${['FEATURED PROJECT / PROTOTYPES','DIALOGUE FLOW','VIRTUAL EXPERIENCE','INTERACTION FRAMEWORK'][i]}</span><span class="art-title">${['COMBO<br>+ PARKOUR','NPC<br>↔ PLAYER','VIRTUAL<br>AURUDU','INTERACT<br>/ CARRY'][i]}</span><span class="media-placeholder-label">${i === 0 ? '▶ GAMEPLAY VIDEO PLACEHOLDER' : 'GAMEPLAY SCREENSHOT PLACEHOLDER'}</span><span class="art-caption">${['INPUT → STATE → ACTION','CONTEXT → RESPONSE','SRI LANKAN FESTIVAL','DETECT → FOCUS → INTERACT'][i]}</span><span class="art-grid"></span></div>`}<span class="visual-corner">View project</span></button><div class="project-meta"><span>${escape(p.category)}</span></div><h3><button data-project="${p.id}">${escape(p.title)}</button></h3><p>${escape(p.summary)}</p></article>`).join('');
const dialog = $('#project-dialog');
let trigger;
function projectMedia(p) {
  const items = (p.gallery || []).filter(item => p.id !== 'aeolida' || item.url);
  const videos = items.filter(item => item.type === 'video' || item.type === 'gif');
  const images = items.filter(item => item.type === 'image');
  return `<section class="case-section"><div class="gallery-heading"><h3>Gameplay in motion</h3><span>${videos.length} DEMONSTRATIONS</span></div><div class="video-gallery">${videos.map(renderMedia).join('')}</div></section><section class="case-section"><div class="gallery-heading"><h3>A closer look</h3><span>SCREENSHOT GALLERY</span></div><div class="image-gallery">${images.map(renderMedia).join('')}</div></section>`;
}
function renderMedia(item, index) {
  const url = safeUrl(item.url);
  let player = '';
  if (url && item.type === 'gif') {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    player = `<div class="gallery-animation"><img src="${safeUrl(reduced ? item.poster : item.url)}" alt="${escape(item.title)} gameplay" loading="lazy"><button type="button" class="gif-toggle" data-gif="${url}" data-still="${safeUrl(item.poster)}" aria-pressed="${!reduced}">${reduced ? 'Play animation' : 'Pause animation'}</button></div>`;
  }
  if (url && item.type === 'image') player = `<img src="${url}" alt="${escape(item.title)}" loading="lazy">`;
  if (url && item.type === 'video') {
    const parsed = new URL(item.url, location.href);
    const id = parsed.hostname === 'youtu.be' ? parsed.pathname.slice(1) : /(^|\.)youtube\.com$/.test(parsed.hostname) ? (parsed.searchParams.get('v') || parsed.pathname.match(/\/(?:shorts|embed)\/([\w-]+)/)?.[1]) : '';
    if (id && /^[\w-]{11}$/.test(id)) {
      const params = new URLSearchParams();
      if (Number.isInteger(item.start) && item.start >= 0) params.set('start',item.start);
      if (Number.isInteger(item.end) && item.end > (item.start || 0)) params.set('end',item.end);
      player = `<iframe src="https://www.youtube-nocookie.com/embed/${id}${params.size?'?'+params:''}" title="${escape(item.title)}" loading="lazy" allow="fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    }
    else if (/\.(mp4|webm)$/i.test(parsed.pathname)) player = `<video controls preload="metadata" playsinline ${safeUrl(item.poster) ? `poster="${safeUrl(item.poster)}"` : ''} src="${url}" aria-label="${escape(item.title)}"></video>`;
    else player = `<a class="external-video" href="${url}" target="_blank" rel="noopener noreferrer"><span class="play-outline" aria-hidden="true">▶</span>Watch ${escape(item.title)} ↗</a>`;
  }
  return `<figure class="gallery-item">${player || `<div class="gallery-placeholder"><span class="slot-index">${String(index + 1).padStart(2,'0')} / ${item.type === 'video' ? 'VIDEO' : 'IMAGE'}</span><span class="slot-symbol" aria-hidden="true">${item.type === 'video' ? '▷' : '▧'}</span><strong>${escape(item.title)}</strong><span>${item.type === 'video' ? 'Gameplay video' : 'Screenshot'} placeholder</span></div>`}<figcaption><h4>${escape(item.title)}</h4><p>${escape(item.caption || '')}</p></figcaption></figure>`;
}
function renderActivity(a) {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  return `<article>${safeUrl(a.gif) ? `<figure class="activity-animation"><img src="${safeUrl(reduced ? a.poster : a.gif)}" alt="${escape(a.name)} ${escape(a.mediaKind || 'cinematic excerpt')}" loading="lazy"><button type="button" class="gif-toggle" data-gif="${safeUrl(a.gif)}" data-still="${safeUrl(a.poster)}" aria-pressed="${!reduced}">${reduced ? 'Play animation' : 'Pause animation'}</button></figure>` : ''}<h4>${escape(a.name)}</h4><p>${escape(a.description)}</p>${a.gif ? `<p class="activity-credit">${escape(a.credit || 'Cinematic excerpt · RAM Studios')}</p>` : ''}</article>`;
}
document.addEventListener('click', event => {
  const button = event.target.closest('.gif-toggle');
  if (!button) return;
  const playing = button.getAttribute('aria-pressed') === 'true';
  button.closest('figure').querySelector('img').src = playing ? button.dataset.still : button.dataset.gif;
  button.setAttribute('aria-pressed', String(!playing));
  button.textContent = playing ? 'Play animation' : 'Pause animation';
});
function renderSections(p) {
  return p.sections.map(([title,body]) => `<section class="detail-section"><h3>${escape(title)}</h3><p>${escape(body)}</p></section>`).join('');
}
function showProject(id) {
  const p = projects.find(p => p.id === id); if (!p) return;
  dialog.classList.toggle('feature-gym-dialog', id === 'prototypes');
  dialog.classList.toggle('aeoliada-dialog', id === 'aeolida');
  $('#project-detail').innerHTML = `<span class="eyebrow">${escape(p.category)} / ${escape(p.name)}</span><h2 id="project-title">${escape(p.title)}</h2><p class="detail-summary">${escape(p.summary)}</p>${renderProjectContext(id)}${p.store ? `<div class="actions">${link(p.store,'View on Steam','button')}</div><p class="pending">Game overview and artwork: official Steam page. My contributions are detailed separately below.</p>` : ''}${p.store && safeUrl(p.media) ? `<img class="official-game-art" src="${safeUrl(p.media)}" alt="${escape(p.name)} official Steam artwork">` : ''}${p.jam ? `<div class="actions">${link(p.jam,'View game jam','button')}${link(p.source,'View source','button')}</div>` : ''}${projectMedia(p)}${id === 'aeolida' ? renderSections(p) : ''}${p.activities ? `<section class="case-section"><div class="gallery-heading"><h3>Awurudu games</h3><span>TEAM PROJECT · FESTIVAL ACTIVITIES</span></div><div class="activity-grid">${p.activities.map(renderActivity).join('')}</div></section>` : ''}<div class="tags">${p.tags.map(t=>`<span>${escape(t)}</span>`).join('')}</div>${p.diagram.length ? `<ol class="flow" aria-label="System overview">${p.diagram.map(t=>`<li>${escape(t)}</li>`).join('')}</ol>` : ''}${id === 'aeolida' ? renderAeoliadaDiagrams() : ''}${id === 'horror-jam' ? renderHorrorDiagrams() : ''}${p.conceptArt ? `<section class="case-section team-concepts"><div class="gallery-heading"><h3>Team concept art &amp; progress</h3><span>ART TEAM · WORK IN PROGRESS</span></div><p class="aeo-intro">The team is exploring the visual direction while I develop gameplay systems. These images show the art team’s work, separate from my programming contribution. The game title and final designs are still undecided.</p><div class="image-gallery">${p.conceptArt.map(renderMedia).join('')}</div></section>` : ''}${id === 'aeolida' ? '' : renderSections(p)}${p.references ? `<section class="detail-section"><h3>Technical reference</h3>${p.references.map(r=>link(r.url,escape(r.title))).join('')}</section>` : ''}<div class="actions">${link(p.video,'Watch gameplay','button')}${p.jam ? '' : link(p.source,'View source')}${link(p.build,'Download build')}</div>${!p.video && !p.gallery.some(item => (item.type === 'video' || item.type === 'gif') && item.url) ? '<p class="pending">Gameplay footage will be added before launch.</p>' : ''}`;
  if (id === 'prototypes') $('#project-detail').innerHTML = renderFeatureGym();
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
function syncProjectFromUrl() {
  const id = location.hash.startsWith('#project-') ? location.hash.slice(9) : '';
  if (projects.some(p => p.id === id)) {
    if (!dialog.open || dialog.dataset.project !== id) {
      showProject(id);
      dialog.dataset.project = id;
    }
  } else if (dialog.open) {
    dialog.close();
  }
}
function closeProject() {
  if (history.state?.portfolioProject === location.hash) {
    history.back();
  } else {
    // A directly opened project link has no in-page entry to return to.
    history.replaceState(null, '', '#work');
    syncProjectFromUrl();
  }
}
document.addEventListener('click', event => {
  const button = event.target.closest('[data-project]');
  if (!button || !projects.some(p => p.id === button.dataset.project)) return;
  trigger = button;
  const hash = '#project-' + button.dataset.project;
  if (location.hash !== hash) history.pushState({portfolioProject: hash}, '', hash);
  syncProjectFromUrl();
});
$('#close-dialog').addEventListener('click', closeProject);
dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
window.addEventListener('popstate', syncProjectFromUrl);
window.addEventListener('hashchange', syncProjectFromUrl);

dialog.addEventListener('click',event=> {
  const anchor = event.target.closest('.gym-nav a');
  if (!anchor) return;
  event.preventDefault();
  dialog.querySelector(anchor.getAttribute('href'))?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',block:'start'});
});
dialog.addEventListener('click',event=> { if(event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) closeProject(); } });
dialog.addEventListener('close', () => {
  // A queued close event must not clear a project reopened by rapid navigation.
  if (dialog.open) return;
  dialog.querySelectorAll('video').forEach(video => video.pause());
  $('#project-detail').innerHTML = '';
  delete dialog.dataset.project;
  trigger?.focus({preventScroll: true});
});
syncProjectFromUrl();

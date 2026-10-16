import {profile, projects} from './content.js';
const $ = selector => document.querySelector(selector);
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl = value => {
  if (!value) return '';
  try { const url = new URL(value, location.href); return ['http:', 'https:'].includes(url.protocol) ? escape(url.href) : ''; } catch { return ''; }
};
const link = (url, label, cls = 'text-link') => safeUrl(url) ? `<a class="${cls}" href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${label} ↗</a>` : '';
$('#intro').textContent = profile.intro;
$('#year').textContent = new Date().getFullYear();
$('#hero-links').innerHTML = link(profile.resume, 'Resume') + link(profile.github, 'GitHub');
$('#contact-links').innerHTML = (profile.email ? `<a class="button" href="mailto:${escape(encodeURIComponent(profile.email))}">Email me ↗</a>` : '') + link(profile.github, 'GitHub') + link(profile.linkedin, 'LinkedIn') + link(profile.resume, 'Resume');
if (!$('#contact-links').children.length) $('#contact-links').innerHTML = '<p class="pending">Contact details will be added before launch.</p>';
$('#projects').innerHTML = projects.map((p, i) => `<article class="project project-${i}"><button class="project-visual" data-project="${p.id}" aria-label="Explore ${escape(p.name)}">${safeUrl(p.media) ? `<img src="${safeUrl(p.media)}" alt="${escape(p.name)} gameplay" loading="lazy">` : `<div class="technical-art" aria-hidden="true"><span class="art-label">${['GAMEPLAY SYSTEMS','DIALOGUE FLOW','VEHICLE FRAMEWORK','VIRTUAL EXPERIENCE'][i]}</span><span class="art-title">${['COMBO<br>+ PARKOUR','NPC<br>↔ PLAYER','BIKE<br>/ LORRY','VIRTUAL<br>AURUDU'][i]}</span><span class="media-placeholder-label">GAMEPLAY SCREENSHOT PLACEHOLDER</span><span class="art-caption">${['INPUT → STATE → ACTION','CONTEXT → RESPONSE','INHERIT → CONFIGURE → TEST','SRI LANKAN FESTIVAL'][i]}</span><span class="art-grid"></span></div>`}<span class="visual-corner">${p.number} / VIEW PROJECT ↗</span></button><div class="project-meta"><span>${escape(p.category)}</span><span>${p.number}</span></div><h3><button data-project="${p.id}">${escape(p.title)} <span aria-hidden="true">↗</span></button></h3><p class="project-name">${escape(p.name)}</p><p>${escape(p.summary)}</p><div class="tags">${p.tags.map(t=>`<span>${escape(t)}</span>`).join('')}</div></article>`).join('');
const dialog = $('#project-dialog');
let trigger;
function projectMedia(p) {
  const watch = safeUrl(p.video);
  const image = safeUrl(p.media);
  return `<figure class="detail-media">${image ? `<img src="${image}" alt="${escape(p.name)} gameplay screenshot">` : `<div class="media-empty"><span class="play-outline" aria-hidden="true">▶</span><strong>${escape(p.name)} gameplay</strong><span>VIDEO / SCREENSHOT PLACEHOLDER</span></div>`}<figcaption>${watch ? `<a class="button" href="${watch}" target="_blank" rel="noopener noreferrer">Watch gameplay ↗</a>` : 'Gameplay footage to be added'}</figcaption></figure>`;
}
function showProject(id) {
  const p = projects.find(p => p.id === id); if (!p) return;
  $('#project-detail').innerHTML = `<span class="eyebrow">${escape(p.category)} / ${escape(p.name)}</span><h2 id="project-title">${escape(p.title)}</h2><p class="detail-summary">${escape(p.summary)}</p>${projectMedia(p)}<div class="tags">${p.tags.map(t=>`<span>${escape(t)}</span>`).join('')}</div>${p.diagram.length ? `<ol class="flow" aria-label="System overview">${p.diagram.map(t=>`<li>${escape(t)}</li>`).join('')}</ol>` : ''}${p.sections.map(([title,body])=>`<section class="detail-section"><h3>${escape(title)}</h3><p>${escape(body)}</p></section>`).join('')}<div class="actions">${link(p.video,'Watch gameplay','button')}${link(p.source,'View source')}${link(p.build,'Download build')}</div>${!p.video ? '<p class="pending">Gameplay footage will be added before launch.</p>' : ''}`;
  if (!dialog.open) dialog.showModal();
  dialog.scrollTop = 0;
}
document.addEventListener('click', event => { const button = event.target.closest('[data-project]'); if(button) { trigger = button; showProject(button.dataset.project); history.replaceState(null, '', `#project-${button.dataset.project}`); } });
$('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=> { if(event.target === dialog) { const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog.addEventListener('close',()=> { history.replaceState(null, '', '#work'); trigger?.focus(); });
if(location.hash.startsWith('#project-')) showProject(location.hash.slice(9));

import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {profile,projects} from '../assets/content.js';
import {renderFeatureGym} from '../assets/feature-gym.js';
import {renderAeoliadaDiagrams} from '../assets/aeoliada-diagrams.js';
const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
assert.equal(new Set(projects.map(p=>p.id)).size,projects.length,'Project IDs must be unique');
assert.equal(projects.length,4);
for(const p of projects){assert(p.title&&p.summary&&p.sections.length); for(const field of ['video','source','build']) if(p[field])assert.equal(new URL(p[field]).protocol,'https:');}
for(const match of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)) await access(new URL('../'+match[1],import.meta.url));
for(const match of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${match[1]}"`),`Missing anchor ${match[1]}`);
assert(!html.includes('href="#"'),'No dummy links');
assert(profile.github);
const gym = renderFeatureGym();
for (const match of gym.matchAll(/(?:src|poster)="(assets\/[^"]+)"/g)) await access(new URL('../'+match[1],import.meta.url));
for (const match of gym.matchAll(/href="#([^"]+)"/g)) assert(gym.includes(`id="${match[1]}"`), `Missing Feature Gym section ${match[1]}`);
assert.equal((gym.match(/class="gym-animation"/g)||[]).length,7,'Feature Gym should include seven animated mechanics');
for (const match of gym.matchAll(/data-still="(assets\/[^"]+)"/g)) await access(new URL('../'+match[1],import.meta.url));
for (const p of projects) {
  assert(p.gallery.filter(item => item.type === 'video').length >= 2, `${p.id} needs multiple videos`);
  for (const activity of p.activities || []) {
    for (const path of [activity.gif, activity.poster]) if (path) await access(new URL('../'+path,import.meta.url));
    if (activity.gif) assert(activity.poster, 'Animated activities need a still image');
  }
  for (const item of p.gallery) {
    assert(['video', 'image'].includes(item.type) && item.title && item.caption);
    if (item.url) assert(['https:', 'http:'].includes(new URL(item.url, 'https://portfolio.invalid/').protocol));
    for (const path of [item.url,item.poster]) if(path?.startsWith('assets/')) await access(new URL('../'+path,import.meta.url));
  }
}
console.log('Passed: project content, unique IDs, local assets, section anchors, and configured URLs.');

const aeoliada = renderAeoliadaDiagrams();
assert.equal((aeoliada.match(/<svg /g)||[]).length,4);
for (const match of aeoliada.matchAll(/aria-labelledby="([^"]+)"/g)) {
  for (const id of match[1].split(' ')) assert(aeoliada.includes(`id="${id}"`), 'Missing diagram label');
}

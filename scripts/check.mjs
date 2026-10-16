import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {profile,projects} from '../assets/content.js';
const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
assert.equal(new Set(projects.map(p=>p.id)).size,projects.length,'Project IDs must be unique');
assert.equal(projects.length,4);
for(const p of projects){assert(p.title&&p.summary&&p.sections.length); for(const field of ['video','source','build']) if(p[field])assert.equal(new URL(p[field]).protocol,'https:');}
for(const match of html.matchAll(/(?:src|href)="(assets\/[^"]+)"/g)) await access(new URL('../'+match[1],import.meta.url));
for(const match of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${match[1]}"`),`Missing anchor ${match[1]}`);
assert(!html.includes('href="#"'),'No dummy links');
assert(profile.github);
console.log('Passed: project content, unique IDs, local assets, section anchors, and configured URLs.');

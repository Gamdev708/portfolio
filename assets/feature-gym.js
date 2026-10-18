// Mechanic-led case study based on Pasindu's supplied layout and gameplay recording.
const esc = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const node = (x,y,w,label) => `<rect x="${x}" y="${y}" width="${w}" height="36" rx="5"/><text x="${x+w/2}" y="${y+22}">${esc(label)}</text>`;
const arrow = (x1,y1,x2,y2) => `<path d="M${x1} ${y1} L${x2} ${y2}" marker-end="url(#gym-arrow)"/>`;
function svg(title, width, height, body) {
  return `<figure class="gym-diagram"><svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${esc(title)}"><defs><marker id="gym-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#91a9d0"/></marker></defs><text class="diagram-title" x="${width/2}" y="27">${esc(title)}</text>${body}</svg><figcaption>System flow · simplified for presentation</figcaption></figure>`;
}
function flow(title, labels) {
  const body = labels.map((label,i)=>node(35,52+i*61,250,label)+(i<labels.length-1?arrow(160,88+i*61,160,110+i*61):'')).join('');
  return svg(title,320,labels.length*61+60,body);
}
function architecture() {
  let body='';
  [['Climbing','Surface / ledge detection'],['Vaulting','Obstacle detection','Obstacle analysis'],['Sliding','Input conditions','Movement state']].forEach((labels,i)=>{
    labels.forEach((label,j)=>{body+=node(20+i*200,60+j*65,180,label);if(j<labels.length-1)body+=arrow(110+i*200,96+j*65,110+i*200,122+j*65);});
    const last=60+(labels.length-1)*65+36;
    body+=`<path d="M${110+i*200} ${last} V285 H310"/>`;
  });
  body+=arrow(310,285,310,318)+node(220,325,180,'Character movement')+arrow(310,361,310,387)+node(220,394,180,'Animation / traversal');
  return svg('PARKOUR PLUGIN',620,455,body);
}
function vaultDiagram() {
  let body=['Player input','Obstacle detection','Valid obstacle?','Measure entry / exit','Classify distance'].map((label,i)=>node(65,50+i*51,230,label)+(i<4?arrow(180,86+i*51,180,99+i*51):'')).join('');
  body+='<path d="M180 290 V310 H60 V330 M180 310 V330 M180 310 H300 V330"/>';
  [['Short',10],['Medium',130],['Long',250]].forEach(([label,x])=>{body+=node(x,330,100,label)+`<path d="M${x+50} 366 V390 H180"/>`;});
  body+=arrow(180,390,180,413)+node(65,420,230,'Select montage')+arrow(180,456,180,481)+node(65,488,230,'Motion-warp traversal');
  return svg('PLAYER VAULTING LOGIC',360,545,body);
}
function comboDiagram() {
  let body=node(30,65,130,'Idle')+node(235,65,130,'Running')+node(440,65,130,'Attacking');
  body+=arrow(160,83,230,83)+arrow(365,83,435,83)+node(235,155,130,'Death');
  body+='<path d="M95 101 V173 H228 M300 101 V149 M505 101 V173 H372"/>';
  body+='<text class="diagram-note" x="195" y="66">Moving</text><text class="diagram-note" x="400" y="66">Attacking</text><text class="diagram-note" x="300" y="137">IsDead</text>';
  body+='<text class="diagram-subtitle" x="155" y="245">COMBAT STYLE SELECTION</text>';
  body+=node(25,275,120,'1st form')+node(180,275,120,'2nd form')+node(25,365,120,'3rd form')+node(180,365,120,'4th form');
  body+=arrow(148,293,175,293)+arrow(148,383,175,383)+arrow(85,315,85,360)+arrow(240,315,240,360);
  body+='<text class="diagram-subtitle" x="465" y="245">ATTACK STATE MACHINE</text>';
  body+=node(390,275,150,'Idle')+node(390,365,150,'Dynamic attack');
  body+=arrow(455,311,455,360)+'<path d="M540 383 H570 V293 H547" marker-end="url(#gym-arrow)"/>';
  body+='<text class="diagram-note" x="400" y="340">Correct input</text><text class="diagram-note" x="465" y="427">End / failed → idle</text>';
  body+=arrow(305,337,382,337)+'<text class="diagram-note" x="345" y="320">Style</text>';
  return svg('DYNAMIC COMBO SYSTEM',600,455,body);
}
function clip(file,title,caption) {
  return `<figure class="gym-clip"><video controls loop muted playsinline preload="none" poster="assets/media/feature-gym/${file}.jpg" aria-label="${esc(title)}"><source src="assets/media/feature-gym/${file}.mp4" type="video/mp4"></video><figcaption><strong>${esc(title)}</strong><span>${esc(caption)}</span></figcaption></figure>`;
}
function copy(kicker,title,body) { return `<div class="gym-copy"><span class="eyebrow">${esc(kicker)}</span><h3>${esc(title)}</h3>${body}</div>`; }
export function renderFeatureGym() {
  return `<div class="feature-gym">
    <header class="gym-heading"><span class="eyebrow">PERSONAL PROJECT / UNREAL ENGINE / C++</span><h2 id="project-title">Feature Gym</h2><p>A playground for character movement and combat. Two C++ plugins, explained through the mechanics they power.</p><div class="tags"><span>Custom character movement</span><span>Animation integration</span><span>State machines</span></div></header>
    <nav class="gym-nav" aria-label="Feature Gym mechanics"><a href="#gym-architecture">Architecture</a><a href="#gym-slide">Sliding</a><a href="#gym-vault">Vaulting</a><a href="#gym-traversal">Wall run & climbing</a><a href="#gym-combo">Combat</a></nav>
    <section id="gym-architecture" class="gym-section gym-overview">${architecture()}${copy('01 / SYSTEM OVERVIEW','Parkour plugin architecture','<p>I built the parkour plugin around a single custom character movement component. Climbing, vaulting, and sliding feed into the same movement and animation pipeline.</p><p>Detection and movement conditions determine which traversal state can run. Blueprint-exposed settings connect the C++ implementation to animation and gameplay configuration.</p>')}</section>
    <section id="gym-slide" class="gym-section gym-three">${copy('02 / TRAVERSAL','Sliding','<p>I implemented sliding as an additional traversal option, allowing the player to transition from normal movement into a lower-profile movement state.</p><p>The movement component checks whether a slide can start, adjusts the collision dimensions, and handles the custom sliding physics before returning to normal movement.</p>')}${clip('slide-under-obstacle','Slide under an obstacle','Gameplay capture · 6.2 seconds · loop available')}${flow('PLAYER SLIDE LOGIC',['Player moving','Slide input','Check slide conditions','Enter slide state','Adjust collision / movement','Update sliding physics','Exit slide state'])}</section>
    <section id="gym-vault" class="gym-section gym-three gym-vault">${vaultDiagram()}<figure class="gym-clip gym-vault-placeholder"><div class="gym-missing"><span aria-hidden="true">▷</span><strong>Vaulting demonstration</strong><p>A dedicated vaulting clip will be added here.</p></div><figcaption>Video placeholder · reserved for a clear vault sequence</figcaption></figure>${copy('03 / TRAVERSAL','Vaulting','<p><strong>Detect.</strong> Trace for a valid obstacle and a landing position.</p><p><strong>Measure.</strong> Determine the entry and exit points, then measure the distance between them.</p><p><strong>Select.</strong> Match that distance to a configured montage range. Short, medium, and long are the conceptual categories in the diagram.</p><p><strong>Traverse.</strong> Set the motion-warp targets and use the animation’s root motion to carry the character across the obstacle.</p>')}</section>
    <section id="gym-traversal" class="gym-section"><div class="gym-section-intro">${copy('04 / TRAVERSAL','Wall-running & climbing','<p>Sideways wall-running, upward wall-running, and climbing are shown separately so each movement behavior is easy to assess. The upward run shows the character reaching the top of the wall.</p>')}</div><div class="gym-two">${clip('wall-run-clean','Sideways wall run','A cleaner continuous run along the wall · 5.4 seconds')}${clip('wall-run-up','Upward wall run','Run up the wall and reach the top · 3.8 seconds')}${clip('climbing-and-ledge','Climbing toward a ledge','Surface traversal and ledge approach · 8.5 seconds')}</div></section>
    <section id="gym-combo" class="gym-section gym-overview gym-combo">${comboDiagram()}${copy('05 / COMBAT','Dynamic combo system','<p>I created the combo plugin using the state-machine design pattern, inspired by action games such as Devil May Cry, Yakuza, Shenmue, and Sifu.</p><p>The design separates the character’s base state, combat style selection, and the current attack state. Each style groups its own set of combos.</p><p>The attack implementation separates held buttons from a buffered command. Animation notifies coordinate combo windows, charge behavior, and attack completion.</p>')}<div class="gym-two gym-combat-clips">${clip('combat-sequence','Combat attack sequence','Attacks demonstrated in the gameplay test environment · 8 seconds')}${clip('combo-attack-delayed','Combo attack — delayed','Delayed combo sequence from 3:10 in the recording · 5.2 seconds')}${clip('heavy-attack','Heavy attack','A focused heavy-attack demonstration · 6 seconds')}</div></section>
    <footer class="gym-end"><h3>My contribution</h3><p>Created the combo and parkour plugins in C++, with Blueprint and animation integration. Footage is captured from my Feature Gym test environment. Diagrams simplify the implementation to explain the mechanics.</p><p class="pending">The source recording’s debug overlays remain visible. Vaulting footage is still to be added.</p></footer>
  </div>`;
}

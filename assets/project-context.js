const contexts = {
  prototypes: {
    status: 'PERSONAL PROJECT · GAMEPLAY PROTOTYPE',
    title: 'A gameplay playground for combat and parkour systems.',
    description: 'Feature Gym is my personal Unreal Engine C++ project for building, testing and refining reusable combo and character-movement plugins.',
    role: 'Gameplay programmer · C++ plugin development',
    stage: 'Playable systems prototype · ongoing iteration',
    preview: 'Mechanic GIFs, system diagrams and implementation explanations'
  },
  aeolida: {
    status: 'TEAM PROJECT · ACTION RPG',
    title: 'Aeoliada combines melee combat with rhythm mechanics.',
    description: 'An action RPG by Arcanion. My contribution focuses on core gameplay logic, NPC dialogue, relationships and quest UI, with exposed controls for designers.',
    role: 'Gameplay programmer · dialogue, relationships & quest UI',
    stage: 'Team development · dialogue intended for release',
    preview: 'Official trailer, UI architecture and contribution diagrams'
  },
  'virtual-aurudu': {
    status: 'TEAM PROJECT · STUDIO INTERNSHIP',
    title: 'A virtual celebration of Sri Lankan New Year.',
    description: 'Virtual Awurudu is a RAM Studios festival experience presented through SriVerse. During my internship, I checked individual festival games and fixed sequence-playback replication issues.',
    role: 'Game programming intern · multiplayer debugging',
    stage: 'Studio internship contribution',
    preview: 'Festival footage, activity GIFs and the replication fix'
  },
  'horror-jam': {
    status: 'WORK IN PROGRESS · TEAM GAME JAM',
    title: 'An untitled horror game, currently in development.',
    description: 'Created for the WHAT ARE YOU AFRAID OF? jam. The team is developing the demo and exploring its visual direction.',
    role: 'Gameplay programmer',
    stage: 'Gameplay prototype & concept development',
    preview: 'Greybox gameplay tests and team concept art'
  }
};
const esc = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function renderProjectContext(id) {
  const c = contexts[id];
  if (!c) return '';
  return `<aside class="project-context-banner" aria-label="Project status and my role"><span class="context-status">${esc(c.status)}</span><h3>${esc(c.title)}</h3><p>${esc(c.description)}</p><dl><div><dt>My role</dt><dd>${esc(c.role)}</dd></div><div><dt>Current stage</dt><dd>${esc(c.stage)}</dd></div><div><dt>What you’ll see</dt><dd>${esc(c.preview)}</dd></div></dl></aside>`;
}

export const profile = {
  name: 'Pasindu Siriwardana',
  email: '',
  github: 'https://github.com/Gamdev708',
  linkedin: '',
  resume: '',
  intro: 'I build character gameplay and reusable systems with Unreal Engine and C++. My work spans combat, traversal, AI-powered NPC dialogue, and vehicle gameplay.',
};

// Only add public media and source links you have permission to share.
// Media accepts a local image path or an HTTPS image URL. Video is a watch-page URL.
export const projects = [
  {
    id: 'prototypes', number: '01', title: 'Combat & traversal', name: 'Prototypes',
    category: 'Personal project', tags: ['Unreal Engine', 'C++', 'Plugins'],
    summary: 'A gameplay playground built around two reusable plugins: a combo system and an advanced parkour system.',
    focus: 'Character gameplay / Plugin architecture',
    media: '', video: '', source: '', build: '',
    sections: [
      ['My contribution', 'Created the combo and parkour plugins, implementing combat behavior and custom character traversal in C++.'],
      ['Combo system', 'The attack state machine separates held buttons from a single buffered attack command. Animation notifies route charge, combo-window, and attack-completion events to the active action.'],
      ['Parkour system', 'A custom UCharacterMovementComponent defines wall-running, climbing, and sliding movement modes. The code also includes wall jumps, vault checks, motion-warp targets, and configurable montage selection.'],
      ['C++ and Blueprint integration', 'Blueprint-callable functions, exposed properties, and movement delegates provide integration points for gameplay and animation configuration.'],
    ],
    diagram: ['Player input', 'Attack / movement state', 'Animation & motion', 'Gameplay response'],
  },
  {
    id: 'aeolida', number: '02', title: 'Conversations with character', name: 'Aeolida',
    category: 'Team project', tags: ['Unreal Engine', 'C++', 'NPC dialogue'],
    summary: 'An AI-powered NPC dialogue system developed in a team project, alongside gameplay bug fixing.',
    focus: 'Dialogue integration / Collaboration',
    media: '', video: '', source: '', build: '',
    sections: [
      ['My contribution', 'Worked with the team to create the AI-powered NPC dialogue system and resolve bugs.'],
      ['Dialogue architecture', 'The project separates character interaction into a component and conversation display into a world subsystem. Completion actions coordinate topic selection, chat requests, and conversation endings.'],
      ['Character configuration', 'The dialogue component exposes personality, speech style, AI-provider settings, and relationship information. Conversation history supplies context for NPC interactions.'],
      ['Working with a team', 'My focus was dialogue integration and bug fixing. The project includes contributions from other team members; this page does not claim authorship of the entire game or the underlying AI models.'],
    ],
    diagram: ['Player message', 'Dialogue interaction', 'AI provider', 'NPC dialogue UI'],
  },
  {
    id: 'safe-drive', number: '03', title: 'Different vehicles. Shared foundations.', name: 'UForSafeDriveV1',
    category: 'RAM Studios · Internship', tags: ['Unreal Engine', 'Vehicles', 'Testing'],
    summary: 'Reused parent classes and created bike and lorry subclasses, with separate configurations tuned through manual testing.',
    focus: 'Inheritance / Vehicle configuration',
    media: '', video: '', source: '', build: '',
    sections: [
      ['My contribution', 'During my internship at RAM Studios in Sri Lanka, reused parent classes, created subclasses for bike and lorry vehicles, and supplied separate configurations after manually testing both.'],
      ['Shared behavior and specialization', 'The work used inheritance to retain common behavior while allowing different vehicle configurations. The available two-wheeled vehicle class derives from AWheeledVehiclePawn and binds throttle, brake, and steering input.'],
      ['Validation', 'Manual testing informed the separate bike and lorry configurations. No performance or test-coverage claims are made here.'],
    ],
    diagram: ['Shared vehicle parent', 'Bike / lorry subclasses', 'Separate configurations', 'Manual testing'],
  },
  {
    id: 'virtual-aurudu', number: '04', title: 'A festival, experienced virtually.', name: 'Virtual Aurudu',
    category: 'RAM Studios · Internship', tags: ['Unreal Engine', 'Festival experience'],
    summary: 'Contributed to a virtual Sri Lankan Aurudu festival experience during an internship at RAM Studios.',
    focus: 'Studio experience / Cultural experience',
    media: '', video: '', source: '', build: '',
    sections: [
      ['Project context', 'Virtual Aurudu is a virtual festival experience based on Sri Lankan Aurudu, developed during my internship at RAM Studios in Sri Lanka.'],
      ['Contribution scope', 'I contributed as an intern. A detailed breakdown of my individual responsibilities and approved project footage will be added after review.'],
    ],
    diagram: [],
  },
];

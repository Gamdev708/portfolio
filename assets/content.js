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
    id: 'prototypes', number: '01', title: 'Feature Gym — Combat & traversal', name: 'Feature Gym',
    category: 'Personal project', tags: ['Unreal Engine', 'C++', 'Plugins'],
    summary: 'A gameplay playground built around two reusable plugins: a combo system and an advanced parkour system.',
    focus: 'Character gameplay / Plugin architecture',
    media: 'assets/media/feature-gym/wall-run-and-jump.jpg', video: '', source: '', build: '',
    gallery: [
      {
        "type": "video",
        "title": "Combat overview",
        "caption": "A continuous look at the combo system in play.",
        "url": ""
      },
      {
        "type": "video",
        "title": "Combo timing & charged attacks",
        "caption": "A focused demonstration of attack input, combo windows, and charge behavior.",
        "url": ""
      },
      {
        "type": "video",
        "title": "Parkour traversal",
        "caption": "Wall-running, climbing, sliding, and vaulting in a traversal sequence.",
        "url": ""
      },
      {
        "type": "video",
        "title": "Plugin configuration",
        "caption": "An editor walkthrough of exposed gameplay and animation settings.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Combat in action",
        "caption": "A frame showing a combo or charged attack.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Traversal in action",
        "caption": "A frame showing a parkour mechanic.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Editor configuration",
        "caption": "Plugin properties or a Blueprint integration view.",
        "url": ""
      }
    ],
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
    gallery: [
      {
        "type": "video",
        "title": "NPC conversation",
        "caption": "A complete player-to-NPC conversation.",
        "url": ""
      },
      {
        "type": "video",
        "title": "Dialogue flow & topic selection",
        "caption": "Show how a conversation progresses through the interface.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Conversation interface",
        "caption": "NPC dialogue and player choices.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Dialogue configuration",
        "caption": "Character settings or system architecture.",
        "url": ""
      }
    ],
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
    gallery: [
      {
        "type": "video",
        "title": "Bike gameplay",
        "caption": "Demonstrate bike handling and controls.",
        "url": ""
      },
      {
        "type": "video",
        "title": "Lorry gameplay",
        "caption": "Demonstrate the separate lorry configuration.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Bike configuration",
        "caption": "Vehicle settings used for the bike.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Lorry configuration",
        "caption": "Vehicle settings used for the lorry.",
        "url": ""
      }
    ],
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
    gallery: [
      {
        "type": "video",
        "title": "Festival walkthrough",
        "caption": "A walkthrough of the virtual Aurudu experience.",
        "url": ""
      },
      {
        "type": "video",
        "title": "Contribution spotlight",
        "caption": "Highlight your individual work once confirmed.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Festival environment",
        "caption": "An approved image from the experience.",
        "url": ""
      },
      {
        "type": "image",
        "title": "Gameplay moment",
        "caption": "An approved screenshot of a festival activity.",
        "url": ""
      }
    ],
    sections: [
      ['Project context', 'Virtual Aurudu is a virtual festival experience based on Sri Lankan Aurudu, developed during my internship at RAM Studios in Sri Lanka.'],
      ['Contribution scope', 'I contributed as an intern. A detailed breakdown of my individual responsibilities and approved project footage will be added after review.'],
    ],
    diagram: [],
  },
];

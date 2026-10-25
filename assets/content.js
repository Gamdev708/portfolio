export const profile = {
  name: 'Pasindu Siriwardana',
  email: '',
  github: 'https://github.com/Gamdev708',
  linkedin: 'https://www.linkedin.com/in/pasindu-siriwardana-a39727219/',
  resume: 'assets/Pasindu-Siriwardana-CV-Portfolio.pdf',
  intro: 'I build character gameplay and reusable systems with Unreal Engine and C++. My work spans combat, traversal, AI-powered NPC dialogue, and vehicle gameplay.',
};

// Only add public media and source links you have permission to share.
// Media accepts a local image path or an HTTPS image URL. Video is a watch-page URL.
export const projects = [
  {
    id: 'prototypes', number: '01', title: 'Feature Gym — Combat & traversal', name: 'Feature Gym',
    category: 'Personal project', tags: ['Unreal Engine', 'C++', 'Plugins'],
    summary: 'I developed reusable C++ combat and parkour plugins, with configurable combo branches, held attacks and custom character movement.',
    focus: 'Character gameplay / Plugin architecture',
    media: 'assets/media/feature-gym/wall-run-clean.jpg', video: '', source: 'https://github.com/Gamdev708/FeatureGym', build: '',
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
    id: 'aeolida', number: '02', title: 'Aeoliada — NPC dialogue & gameplay', name: 'Aeoliada',
    category: 'Arcanion · Team project', tags: ['Unreal Engine', 'C++', 'MVVM-inspired UI'],
    summary: 'Contributed NPC dialogue, relationship interactions, quest UI and gameplay bug fixes to Arcanion’s rhythm-focused action RPG.',
    focus: 'Dialogue integration / Collaboration',
    media: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3813780/10479372b7b509bf2f00d749de9c04f3445069ef/header.jpg?t=1778387369', video: '', source: '', build: '',
    store: 'https://store.steampowered.com/app/3813780/Aeoliada/',
    gallery: [
      {
        type: 'video', title: 'Aeoliada — First Look Trailer',
        caption: 'Official game trailer · Arcanion · includes the full game presentation, beyond my individual contribution.',
        url: 'assets/media/aeoliada/aeoliada-trailer.mp4',
        poster: 'assets/media/aeoliada/trailer-poster.jpg'
      },
      {
        type: 'gif', title: 'Dialogue interface & topic choices',
        caption: 'A 3-second excerpt showing the NPC greeting reveal, speaker portrait and topic choices. My contribution is dialogue integration and UI; game art and other systems are team work.',
        url: 'assets/media/aeoliada/dialogue-gameplay.gif',
        poster: 'assets/media/aeoliada/dialogue-gif-poster.jpg'
      },
      {
        type: 'image', title: 'Typed dialogue interface',
        caption: 'NPC greeting, speaker portrait and player message field in the game. The Speak button label alone does not demonstrate voice input.',
        url: 'assets/media/aeoliada/dialogue-gameplay.png'
      },
      {
        "type": "image",
        "title": "Dialogue settings exposed to designers",
        "caption": "Blueprint Details panel: character identity, personality, relationship descriptions and shared history can be configured without editing C++.",
        "url": "assets/media/aeoliada/dialogue-blueprint-settings.png"
      },
      {
        "type": "image",
        "title": "Relationship settings & state",
        "caption": "Blueprint Details panel: heart limits, topic preferences and the difficulty curve sit alongside visible wounded-state and cracked-heart information. This example uses a maximum of 50 relationship hearts.",
        "url": "assets/media/aeoliada/relationship-blueprint-settings.png"
      }
    ],
    sections: [
      [
            "My contribution",
            "I developed the dialogue widget, conversation manager and interaction component for typed AI conversations, integrating an existing AI plugin. My wider contributions included relationship feedback, quest UI and gameplay bug fixes. The game and AI plugin are team and third-party work; this case study focuses on my integration and UI work."
      ],
      [
            "The requirement: from scripted choices to typed conversation",
            "The existing dialogue system selected predefined lines from data tables according to player choices. The new requirement was to let players select a topic, type their own messages and receive an in-character NPC response. I adapted the dialogue flow to handle generated responses rather than only stepping through authored lines."
      ],
      [
            "My decision: separate conversation flow from presentation",
            "I treated the AI plugin as a service for model requests. The interaction component prepares conversation context and handles responses; the manager coordinates the interface and conversation steps; the widget presents speaker portraits, text and topic choices. This separation let me reuse the same widget across characters instead of tying each interface directly to model requests."
      ],
      [
            "Reuse and iteration",
            "I reused the existing character-by-character text-reveal function rather than rebuilding it. Its completion event helps coordinate the next conversation step. I tested the shared widget with three characters, changing the displayed portrait to identify the speaker. I also reorganized parts of the layout with Overlays and Size Boxes; I did not measure a performance improvement."
      ],
      [
            "Conversation history and manual testing",
            "The interface keeps a display history for browsing earlier dialogue, separate from the conversation context sent to the AI. In my playtests, I could browse earlier messages, return to the latest exchange and continue typing. I also observed earlier entries remaining available when sending while viewing an older message. These are my manual observations; a later source review raised an indexing concern that has not been independently reproduced or resolved."
      ],
      [
            "What still needed refinement",
            "Generated replies sometimes included unwanted action descriptions such as laughing. The team refined the prompt and observed fewer occurrences, but the behavior was not completely eliminated. I tested typed conversations across three characters; I do not have retained transcripts or a separate accuracy evaluation for topic analysis and scoring. Voice input belongs to another version and is outside the implementation described here."
      ],
      [
            "Working with designers and the team",
            "I exposed character and gameplay settings through Blueprints and data assets so designers could configure content without editing the core C++ logic. This work also taught me to document changes and provide clear, step-by-step instructions for teammates. My quest UI follows MVVM-inspired separation; the dialogue flow uses a manager rather than strict automatic MVVM binding."
      ],
      [
            "Confidentiality",
            "This project is covered by an NDA. No project source code or code excerpts are included in this case study."
      ]
],
    diagram: ['Player message', 'Dialogue interaction', 'AI provider', 'NPC dialogue UI'],
  },
  {
    id: 'virtual-aurudu', number: '03', title: 'Virtual Awurudu — Festival & multiplayer', name: 'Virtual Awurudu',
    category: 'RAM Studios · Internship', tags: ['Unreal Engine 5.1', 'Multiplayer', 'Sequencer'],
    summary: 'Contributed to RAM Studios’ virtual Sri Lankan New Year experience, checking individual festival games and fixing multiplayer sequence-playback replication issues.',
    focus: 'Studio experience / Cultural experience',
    media: 'https://i.ytimg.com/vi/yzVl4EppNAo/hqdefault.jpg', video: 'https://www.youtube.com/watch?v=yzVl4EppNAo', source: '', build: '',
    activities: [
      {name: 'Festival exploration', gif: 'assets/media/virtual-awurudu/exploration.gif', poster: 'assets/media/virtual-awurudu/exploration.jpg', mediaKind: 'gameplay excerpt', credit: 'Gameplay capture · KAVEE NIRMAL / Game · RAM Studios', description: 'Player movement through the festival grounds and activity areas.'},
      {name: 'Emote wheel', gif: 'assets/media/virtual-awurudu/emote-wheel.gif', poster: 'assets/media/virtual-awurudu/emote-wheel.jpg', mediaKind: 'gameplay excerpt', credit: 'Gameplay capture · KAVEE NIRMAL / Game · RAM Studios', description: 'The radial menu used to select character emotes.'},
      {name: 'Kana Mutti', gif: 'assets/media/virtual-awurudu/kana-mutti.gif', poster: 'assets/media/virtual-awurudu/kana-mutti.jpg', description: 'The traditional pot-breaking game, represented in the festival experience.'},
      {name: 'Kotta Pora', gif: 'assets/media/virtual-awurudu/kotta-pora.gif', poster: 'assets/media/virtual-awurudu/kotta-pora.jpg', description: 'A pillow-fighting festival game built around balance and competition.'},
      {name: 'Kamba Adima', description: 'Tug-of-war, bringing a familiar team competition into the virtual festival.'},
      {name: 'Lissana Gaha', gif: 'assets/media/virtual-awurudu/lissana-gaha.gif', poster: 'assets/media/virtual-awurudu/lissana-gaha.jpg', description: 'The traditional greased-pole climbing challenge.'},
      {name: 'Rabana', gif: 'assets/media/virtual-awurudu/rabana.gif', poster: 'assets/media/virtual-awurudu/rabana.jpg', description: 'Traditional group drumming featured in the festival cinematic.'}
    ],
    references: [{title: 'Epic Games · UE 5.1 LevelSequenceActor: Replicate Playback', url: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/python-api/class/LevelSequenceActor?application_version=5.1'}],
    gallery: [
      {
        "type": "video",
        "title": "Virtual Awurudu — Official cinematic teaser",
        "caption": "RAM Studios’ SriVerse festival presentation. Cinematic footage, rather than a technical demonstration of my fix.",
        "url": "https://www.youtube.com/watch?v=yzVl4EppNAo"
      },
      {
        "type": "video",
        "title": "Virtual Awurudu — Gameplay walkthrough",
        "caption": "Festival exploration and character interactions. Gameplay capture by KAVEE NIRMAL; game by RAM Studios.",
        "url": "https://www.youtube.com/watch?v=BVmiMy6Y9_8",
        "start": 140
      },
      {
        "type": "image",
        "title": "Festival environment",
        "caption": "Festival square and activity areas. Frame from KAVEE NIRMAL’s gameplay video; game by RAM Studios.",
        "url": "assets/media/virtual-awurudu/festival-square.jpg"
      },
      {
        "type": "image",
        "title": "Lakeside environment",
        "caption": "The lakeside area during exploration. Frame from KAVEE NIRMAL’s gameplay video; game by RAM Studios.",
        "url": "assets/media/virtual-awurudu/lakeside.jpg"
      }
    ],
    sections: [
      [
            "Project context and my role",
            "Virtual Awurudu is a Sri Lankan New Year festival experience by RAM Studios, presented through SriVerse. During my internship, much of my work involved research and development. This example focuses on investigating multiplayer sequence playback in Unreal Engine 5.1. The festival footage shows the wider team project, not a before-and-after recording of my fix."
      ],
      [
            "Problem: NPC activities appeared out of sync",
            "While testing with multiple players in the Unreal Editor, I observed NPC festival actions appearing out of sync between clients. I was still learning Unreal replication and needed to understand what was driving these actions before deciding how to synchronize them."
      ],
      [
            "Investigation and team constraint",
            "I explored variable replication and experimented with C++ approaches to some mechanics. The team needed a Blueprint-based workflow that remained accessible on the development machines available to the interns. Investigating the repeated NPC actions revealed that they were driven by Level Sequences, which led me to research sequence-playback replication in the Unreal documentation."
      ],
      [
            "Fix: configure the sequence actors",
            "I checked each festival activity and enabled Replicate Playback on its relevant Level Sequence Actors. This addressed synchronization at the system driving those NPC actions, rather than requiring a separate C++ rewrite of each activity."
      ],
      [
            "Validation and observed result",
            "I tested using multiple players in the Unreal Editor. After the change, I observed the sequence-driven actions progressing across all connected clients. This was a manual editor check; I did not measure timing differences or establish behavior under production network conditions."
      ],
      [
            "Scope and remaining work",
            "The result described here concerns NPC sequence playback. I also investigated separate player-replication issues, including unexpected movement snapping, but that work remained partially unresolved. I do not attribute those player issues to the same cause or claim that enabling Replicate Playback fixed every multiplayer problem."
      ],
      [
            "What I learned",
            "This investigation taught me to identify the system responsible for a visible behavior before choosing a replication approach. Researching the existing sequence settings led to a focused change that fit the team workflow."
      ]
],
    diagram: ['Server starts sequence', 'Replicate Playback enabled', 'Playback state synchronizes', 'Clients play sequence'],
  },
  {
    id: 'horror-jam', number: '04', title: 'Untitled horror game — Gameplay programming', name: 'Untitled horror game',
    category: 'WORK IN PROGRESS · Team game jam project', tags: ['Unreal Engine 5.4', 'C++', 'Blueprint interfaces'],
    summary: 'A work-in-progress horror game being made by a team for the WHAT ARE YOU AFRAID OF? game jam. The title is still undecided. I am responsible for gameplay programming, building the interaction, carrying and room-camera systems.',
    focus: 'Reusable gameplay / Designer iteration',
    media: 'assets/media/horror-jam/interaction-debug.jpg', video: '', source: 'https://github.com/Gamdev708/WAUAFHorrorGameJam26', build: '',
    jam: 'https://itch.io/jam/what-are-you-afraid-of-',
    gallery: [
      {type: 'gif', title: 'Room-camera transitions', caption: 'Fixed camera views change while moving through the greybox test area · 5.4 seconds.', url: 'assets/media/horror-jam/camera-transitions.gif', poster: 'assets/media/horror-jam/camera-transitions.jpg'},
      {type: 'gif', title: 'Item interaction', caption: 'A test object is removed through an object-specific response to the shared interaction interface · 3.9 seconds.', url: 'assets/media/horror-jam/item-interaction.gif', poster: 'assets/media/horror-jam/item-interaction.jpg'},
      {type: 'gif', title: 'Carrying & release', caption: 'A carryable test object is attached to the character and released. Debug shapes show the interaction scan · 4 seconds.', url: 'assets/media/horror-jam/carry-and-release.gif', poster: 'assets/media/horror-jam/carry-and-release.jpg'},
      {type: 'image', title: 'Interaction debugging', caption: 'My gameplay capture: the debug scan visualizes interaction detection in the greybox prototype.', url: 'assets/media/horror-jam/interaction-debug.jpg'},
      {type: 'image', title: 'Greybox test area', caption: 'A test environment for checking item interactions and camera views before the demo level is finalized.', url: 'assets/media/horror-jam/greybox-overview.jpg'}
    ],
    conceptArt: [
      {type: 'image', title: 'Character outfit exploration', caption: 'Team concept art · work in progress. Outfit and colour variations explored by the art team; not my artwork or a final design.', url: 'assets/media/horror-jam/character-outfit-concepts.png'},
      {type: 'image', title: 'Character silhouette & hairstyle exploration', caption: 'Team concept art · work in progress. Alternative character designs developed by the art team.', url: 'assets/media/horror-jam/character-hair-concepts.png'},
      {type: 'image', title: 'Creature design exploration', caption: 'Team concept art · work in progress. Creature studies explore the game’s visual direction; these are not implemented enemy mechanics.', url: 'assets/media/horror-jam/creature-concepts.png'}
    ],
    sections: [
      [
            "Project context and my role",
            "An early team prototype for the WHAT ARE YOU AFRAID OF? horror game jam. The story and gameplay loop are still being explored, so I started with simple, reusable mechanics that we could try in a greybox level. I am responsible for gameplay programming; the concept art shown here is the art team’s work."
      ],
      [
            "Decision: shared C++ foundations, Blueprint responses",
            "I wanted programmers to share one interaction path and designers to define what each object does without editing the core C++. I implemented the detection and interaction flow in C++ and exposed a shared interface for object-specific Blueprint responses. The character scans for eligible objects and sends the interaction to the selected object; each object supplies its own behavior. This separates common interaction handling from the gameplay we are still experimenting with."
      ],
      [
            "Concrete reuse: doors and removable objects",
            "I used the same interaction interface for doors that open and close and for test objects that disappear when interacted with. These have different responses but use the same player interaction key and shared detection path. I manually tested opening and closing the doors and removing the test objects in the prototype. Object removal alone does not demonstrate an inventory or item-effect system."
      ],
      [
            "Why I chose this approach",
            "The Unreal Fest talk about Clair Obscur: Expedition 33 inspired me to think about a shared workflow for programmers and designers. I applied that idea through my own C++ foundations and Blueprint interaction responses. New objects can define their responses in Blueprints, while changes to the shared detection rules still belong in the C++ layer."
      ],
      [
            "Supporting gameplay foundations",
            "I also implemented socket-based carrying and release, basic inventory add/remove/clear operations, and room-camera triggers. The triggers select an assigned camera and broadcast room and spawn-point tags for other systems to handle. Designers can configure interaction range, carry sockets and camera assignments. These are supporting prototype systems, not a completed puzzle or level-streaming system."
      ],
      [
            "Current scope and next step",
            "The footage shows early interactions and camera behavior while the team works out the story and mechanics. The door and object-removal checks demonstrate reuse across two behaviors; they are not comprehensive gameplay validation. The next step is to use these foundations in the team’s chosen gameplay loop and evaluate what needs to change."
      ]
],
    references: [
      {
            "title": "The Technical Journey of Clair Obscur: Expedition 33 | Unreal Fest Stockholm 2025 — Unreal Engine",
            "url": "https://www.youtube.com/watch?v=t1CrbTx6O6w"
      }
],
    diagram: [],
  },
];

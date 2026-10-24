export const profile = {
  name: 'Pasindu Siriwardana',
  email: '',
  github: 'https://github.com/Gamdev708',
  linkedin: 'https://www.linkedin.com/in/pasindu-siriwardana-a39727219/',
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
    media: 'assets/media/feature-gym/wall-run-clean.jpg', video: '', source: '', build: '',
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
      ['About the game', 'Aeoliada is an action RPG by Arcanion combining melee combat with rhythm mechanics. The official Steam page presents the game and its public media.'],
      ['My contribution', 'Worked with the team to create AI-powered NPC dialogue intended for the game’s release, and resolved gameplay bugs. I implemented the core C++ logic for dialogue interaction, relationship feedback, quest state and UI controllers. I exposed configuration through Blueprints, data tables and data assets so designers could tune behavior and content without editing the underlying C++ logic.'],
      ['UI design approach', 'I use MVVM principles to separate presentation from gameplay state. Quest widgets handle the view, a widget controller tracks selection and forwards updates, and the quest subsystem manages progress. Dialogue follows a manager-mediated flow rather than strict automatic MVVM binding.'],
      ['Dialogue architecture', 'The project separates character interaction into a component and conversation display into a world subsystem. Completion actions coordinate topic selection, chat requests, and conversation endings.'],
      ['Built for designer iteration', 'I provided editable settings for NPC personality, speech style, characteristic phrases, reference dialogue, topic preferences, relationship limits and response curves. Quest data assets expose objective descriptions, types, targets, required amounts and navigation options. Designers can create and tune content using these exposed controls while the core gameplay logic remains in C++.'],
      ['Working with a team', 'My focus was dialogue integration and bug fixing. The project includes contributions from other team members; this page does not claim authorship of the entire game or the underlying AI models.'],
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
      ['Project context', 'Virtual Awurudu is a Sri Lankan New Year festival experience by RAM Studios, presented through SriVerse. I contributed during my internship in Sri Lanka, working in Unreal Engine 5.1.'],
      ['My contribution — multiplayer bug fixing', 'Checked each festival game individually for sequence-playback replication issues. For affected sequences across multiple games, enabled Replicate Playback on the relevant Level Sequence Actors so server-side playback synchronized across clients.'],
      ['Why this setting matters', 'A Level Sequence can play locally without synchronizing to other players. UE 5.1 exposes Replicate Playback specifically for synchronizing server playback to clients. This describes the sequence-playback fix, rather than a claim that one setting replicates every gameplay system or animated actor.'],
      ['Festival games', 'The project includes Kana Mutti, Kotta Pora, Kamba Adima, and Lissana Gaha. These sections provide context for the team’s game; my highlighted contribution is the replication bug fix.'],
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
      {type: 'gif', title: 'Item interaction', caption: 'An item-consumption example demonstrates an object-specific response through the shared interaction interface · 3.9 seconds.', url: 'assets/media/horror-jam/item-interaction.gif', poster: 'assets/media/horror-jam/item-interaction.jpg'},
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
      ['Project context', 'A team horror game being developed for the WHAT ARE YOU AFRAID OF? jam on itch.io, hosted by earacorn. The game title is still undecided. I am responsible for gameplay programming; the team develops the art, design and other disciplines together. The jam invites creators to explore their personal fears through horror. My current work establishes reusable interaction and room-camera systems in a greybox test level while the team plans the demo gameplay loop and final level design.'],
      ['My role — gameplay programmer', 'I am in charge of gameplay programming for the team. I implemented the C++ interaction scan, carrying component, basic inventory operations, and room-transition trigger logic. I exposed Blueprint interaction events and editable settings so designers can create object-specific responses and configure the level without rewriting the shared C++ behavior.'],
      ['One interaction interface, different objects', 'The character performs a forward sphere sweep, checks which actors support the shared interface, and evaluates whether they can be interacted with. Focus events let object Blueprints respond when targeted, while an interaction action passes the player to the selected object. The interface also exposes prompt text and carry eligibility.'],
      ['Carrying and inventory', 'The carrying component checks whether an object is carryable, attaches it to a configured character socket, and detaches it on release. This is socket-based carrying. A separate inventory component supplies basic add, remove and clear operations for item references.'],
      ['Room transitions & camera selection', 'A configurable overlap trigger selects an assigned camera and broadcasts destination-room and spawn-point tags for other systems or Blueprints to handle. Designers can set a default camera and choose one-way or repeatable activation. Broadcasting those tags is a hook for progression, rather than a claim that this component performs level streaming itself.'],
      ['Built for iteration', 'Designers can tune interaction range and sweep radius, choose a carry socket, implement object behavior and focus feedback in Blueprints, and assign transition cameras and room tags per trigger. I test the systems by playing the prototype and inspecting on-screen debug output.'],
      ['Current scope', 'The footage shows prototype interactions and camera behavior, not a finished horror level. Generator, fuse-box, gear and wiring puzzles are design ideas under discussion with the team. This page highlights the implemented foundations rather than presenting those ideas as completed mechanics.']
    ],
    diagram: [],
  },
];

const codexData = {
  "codex": [
    { 
      "slug": "initiative", 
      "title": "Initative", 
      "description":"The action in Savage Worlds is fast and furious. To help the Game Master keep track of who goes in what order and add a little randomness to the game, we use a single deck of playing cards with both Jokers left in to determine everyone’s initiative."
    },
    { 
      "slug": "hold",
      "title": "Hold", 
      "description": "Hold A hero may choose to wait and see what happens by taking a Hold action. He may then go later in the round if he chooses. A Held action lasts until it’s used. If a character has a Held card when a new round starts, he’s not dealt in. If a character is Shaken while on Hold, he immediately loses"
    },
    { 
      "slug": "movement", 
      "title": "Movement",
      "description": "Movement Characters may move their full Pace (usually 6” for humans) in a round. This is considered a free action and doesn’t inflict a penalty to any other actions, such as firing a weapon or taunting a foe.",
      "include": ["crawling", "crouching", "going-prone", "difficult-ground", "jumping", "running"] 
    },
    { 
      "slug": "crawling",
      "title": "Crawling", 
      "description": "Description of crawling"
    },
    { 
      "slug": "going-prone",
      "title": "Going prone", 
      "description": "Description of going prone",
      "include": ["prone"]
    },
    { 
      "slug": "prone",
      "title": "Prone", 
      "description": "Details of how it is to be proned"
    },
    { 
      "slug": "difficult-ground",
      "title": "Difficult ground", 
      "description": "Description of moving on diffucult ground"
    },
    { 
      "slug": "jumping",
      "title": "Jumping", 
      "description": "Description of jumping"
    },
    { 
      "slug": "running",
      "title": "Running", 
      "description": "Description of running",
      "include": ["group-running"]
    },
    { 
      "slug": "group-running",
      "title": "Group running", 
      "description": "Description of group running"
    }
  ],

  "guides": [
    {
      "slug": "combat",
      "title": "Combat",
      "firstSteps": ["combat-initiative"],
      "steps": [
        { 
          "title": "Actions",
          "slug": "combat-actions",
          "description": "Start of by resolving combat initiative for each participant.",
          "include": ["initiative", "hold"],
          "nextSteps":["actions"] 
        },
        { 
          "title": "Initiative",
          "slug": "combat-initiative",
          "description": "Start of by resolving combat initiative for each participant.",
          "include": ["initiative", "hold"],
          "nextSteps":["actions"] 
        }
      ]
    }
  ]

};

export default codexData;


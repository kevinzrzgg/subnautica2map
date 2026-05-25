export const siteUrl = 'https://subnautica2map.click';

export type GuideItem = { slug: string; name: string; type: string; category: string; intent: string; summary: string; biome: string; depth: string; priority: string };

export const guideItems: GuideItem[] = [
  {
    "slug": "repair-tool",
    "name": "Repair Tool",
    "type": "Blueprint",
    "category": "Tools",
    "intent": "subnautica 2 repair tool location",
    "summary": "Find Repair Tool fragments, scan route, crafting materials, and checklist.",
    "biome": "Early-game wreck areas",
    "depth": "~80-180m",
    "priority": "P0"
  },
  {
    "slug": "conduit-crystal",
    "name": "Conduit Crystal",
    "type": "Material",
    "category": "Resources",
    "intent": "subnautica 2 conduit crystal location",
    "summary": "Locations and uses for Conduit Crystal in recipes and upgrades.",
    "biome": "Crystal formations",
    "depth": "TBD",
    "priority": "P0"
  },
  {
    "slug": "creature-enamel",
    "name": "Creature Enamel",
    "type": "Material",
    "category": "Resources",
    "intent": "subnautica 2 creature enamel",
    "summary": "How to get Creature Enamel and what recipes need it.",
    "biome": "Creature drop / biome TBD",
    "depth": "TBD",
    "priority": "P1"
  },
  {
    "slug": "habitat-builder",
    "name": "Habitat Builder",
    "type": "Blueprint",
    "category": "Tools",
    "intent": "habitat builder subnautica 2",
    "summary": "Unlock the Habitat Builder and start base construction.",
    "biome": "Starter progression",
    "depth": "TBD",
    "priority": "P1"
  },
  {
    "slug": "vehicle-fabricator",
    "name": "Vehicle Fabricator",
    "type": "Blueprint",
    "category": "Vehicles",
    "intent": "subnautica 2 vehicle fabricator location",
    "summary": "Fragment locations and unlock path for the Vehicle Fabricator.",
    "biome": "Vehicle progression",
    "depth": "TBD",
    "priority": "P1"
  },
  {
    "slug": "tadpole",
    "name": "Tadpole",
    "type": "Vehicle",
    "category": "Vehicles",
    "intent": "subnautica 2 tadpole upgrades",
    "summary": "Tadpole unlocks, upgrades, depth module, and repair notes.",
    "biome": "Mid-game vehicle route",
    "depth": "TBD",
    "priority": "P1"
  },
  {
    "slug": "silver",
    "name": "Silver",
    "type": "Material",
    "category": "Resources",
    "intent": "subnautica 2 silver locations",
    "summary": "Where to find Silver and what to craft with it.",
    "biome": "Resource nodes",
    "depth": "TBD",
    "priority": "P1"
  },
  {
    "slug": "lead",
    "name": "Lead",
    "type": "Material",
    "category": "Resources",
    "intent": "subnautica 2 where to find lead",
    "summary": "Lead locations and early crafting uses.",
    "biome": "Resource nodes",
    "depth": "TBD",
    "priority": "P1"
  }
];

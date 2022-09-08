const heroes = [
    {
        name: "Hanzo",
        type: "range assasin",
        origin: "Overwatch",
        heroic: {
            ability1: "Stun Arrow",
            ability2: "DragonStrike"
        }
    },
    {
        name: "Orphea",
        type: "range assasin",
        origin: "HOTS",
        heroic: {
            ability1: "Eternal Feast",
            ability2: "Claws"
        }
    },
    {
        name: "Alarak",
        type: "melee assasin",
        origin: "StarCraft",
        heroic: {
            ability1: "CounterStrike",
            ability2: "DeadlyCharge"
        }
    },
]

heroes.map(({name, heroic, heroic: {ability1, ability2}}) => console.log(name, ability1, ability2, Object.values(heroic)));


console.log(heroes);
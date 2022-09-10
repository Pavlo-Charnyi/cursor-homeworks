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

// heroes.map(({name, heroic, heroic: {ability1, ability2}}) => console.log(name, ability1, ability2, Object.values(heroic)));

// console.log(heroes);

//------
const names = ["Sam", "Dean", "Bobby"];
const lastNames = ["LastOne", "SDOOO", "Surename"];

const objFromArrays = names.reduce((acc, curr, index) => {
  acc[index] = {
    firstName: curr,
    lastName: lastNames[index],
  };

  return acc;
}, []);

//or same as this:
const arrayFromForLoop = [];

for (let i = 0; i < names.length; i++) {
  arrayFromForLoop[i] = {
    firstName: names[i],
    lastName: lastNames[i],
  };
}

//---------------------

const hero1 = {
    name: "Alarak",
    type: "melee assasin",
    origin: "StarCraft",
    heroic: {
        ability1: "CounterStrike",
        ability2: "DeadlyCharge"
    },
    sayMyName(param = "My name is: "){
        return param + this.name;
    }
}

const hero2 = { ...hero1 };

for (const key in hero2) {
        if (typeof hero2[key] === "object") {
            hero2[key] = { 
                ability1:hero2[key].ability1, 
                ability2:hero2[key].ability2 
            }
        } 
    }

hero2.heroic.ability1 = "Smile!"
hero2.heroic.ability2 = "Wink!"

console.log(hero1);
console.log(hero2);

console.log(hero2.sayMyName());

//---------------

const arr = ["Smile!", "Smile!", "Smile!", "Smile!", "Wink!", "Wink!", "Wink!", "Wink!", "Cry", "Laugh", "Laugh", "Laugh", "Laugh", "Laugh", "Laugh", "Kick"]

const getUnique = (arr) => {
    return arr.reduce((accum, curr) => {
        if(!accum.includes(curr)) {
            accum.push(curr)
        }
        return accum
    }, [])
}

const getUnique2 = (arr) => {
    const obj = arr.reduce((accum, curr ) => {
        if(accum.hasOwnProperty(curr)){
            accum[curr] ++
        } else {
            accum[curr] = 1;
        }
        return accum
    }, {});

    const arrayOfUniques = []
    
    for (const key in obj) {
        arrayOfUniques.push([key, obj[key]])
    }

    arrayOfUniques.sort((a,b) => {
        return b[1] - a[1]
    }) 

    const sortedObj = {} 
    arrayOfUniques.forEach(el => {
        sortedObj[el[0]] = el[1]
    })
    
    return sortedObj

}

console.log(getUnique(arr));
console.log(getUnique2(arr));
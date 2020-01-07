
function createCharacter(name, nickname, race, origin, attack, defense, weapon) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        weapon,
        describe() {
            console.log(`${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}.`);
        },
        evaluateFight(character) {
            let result1 = 0;
            let result2 = 0;
            if (character.defense < this.attack) {  // 1  10
                result1 = Math.abs(character.defense - this.attack);
            } 
            else if (this.defense < character.attack) {
                result2 = Math.abs(this.defense - character.attack);
            }
            return `Your opponent takes ${result1} damage and you receive ${result2} damage`;
        }
    }
}

<<<<<<< HEAD
const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
                    createCharacter('Bilbo Baggins', 'biblo', 'Hobbit', 'The Shire', 2, 1),
                    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
                    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
                    createCharacter('Legolas', 'legolas', 'Elf', 'Wooland realm', 8, 5),
                    createCharacter('Arwen Undomiel', 'elfie', 'Half-elf', 'Rivendell', 12, 22),
                    ];

//console.log(characters);
const aragorn = characters.find(person => person['nickname'] === 'aragorn').describe();
=======
const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'Staff'),
                    createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'Ring'),
                    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
                    createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
                    createCharacter('Legolas', 'legolas', 'Elf', 'Wooland realm', 8, 5, 'Bow'),
                    createCharacter('Arwen Undomiel', 'elfie', 'Half-elf', 'Rivendell', 12, 22, 'Hadhafang')
                    ];

console.log(characters);                    
const legolas = characters.find(person => {return person['nickname'] === 'legolas'}).describe();
const hobbits = characters.filter(character => character['race'] === 'Hobbit');
console.log(hobbits);
const strongAttack = characters.filter(character => character['attack'] > 5);
console.log(strongAttack);

>>>>>>> 2d8d4e2a4e3445412a4e3792b70eda6aa376314e

// const frodo = createCharacter('Frodo', 'froyo', 'hobbit', 'the shire', 220, 10);
// const gimli = createCharacter('gimli', 'dwarf', 'dwarf', 'the mountain', 22, 2220);

// const whosWins = frodo.evaluateFight(gimli);
// console.log(whosWins);

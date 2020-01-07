function createCharacter(name, nickname, race, origin, attack, defense) {
    return {
        name,
        nickname,
        race,
        origin,
        attack,
        defense,
        describe() {
            console.log(`${this.name} is a ${this.race} from ${this.origin}.`);
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

const characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
                    createCharacter('Bilbo Baggins', 'biblo', 'Hobbit', 'The Shire', 2, 1),
                    createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
                    createCharacter('Aragon son of Arathorn', 'aragon', 'Man', 'Dunnedain', 6, 8),
                    createCharacter('Legolas', 'legolas', 'Elf', 'Wooland realm', 8, 5),
                    createCharacter('Arwen Undomiel', 'elfie', 'Half-elf', 'Rivendell', 12, 22),
                    ];

console.log(characters);

// const frodo = createCharacter('Frodo', 'froyo', 'hobbit', 'the shire', 220, 10);
// const gimli = createCharacter('gimli', 'dwarf', 'dwarf', 'the mountain', 22, 2220);

// const whosWins = frodo.evaluateFight(gimli);
// console.log(whosWins);
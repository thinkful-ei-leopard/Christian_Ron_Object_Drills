const stringToDecode = 'craft block argon meter bells brown croon droop';
    const cipher = {
        a: 1,
        b: 2,
        c: 3,
        d: 4
    };

function decodeString(string) {
  const stringSplitArr = string.split(' ');
  const newArr = [];
  stringSplitArr.forEach(character => newArr.push(decodeCharacter(character)));
  return newArr.join('');
}

function decodeCharacter(word) {
    if (Object.keys(cipher).find(key => key === word.charAt(0))) {
        return word[cipher[word.charAt(0)]];
    } else {
        return ' ';
    }
}
console.log(decodeString(stringToDecode));
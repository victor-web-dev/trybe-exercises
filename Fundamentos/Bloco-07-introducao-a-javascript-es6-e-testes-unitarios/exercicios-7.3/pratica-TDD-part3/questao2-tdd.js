const assert = require('assert');

const removeVowels = (word) => {
  const characters = word.split('');
  const results = [];
  let count = 1;
  for (let index = 0; index < characters.length; index += 1) {
    
    if (characters[index] === 'a') {
      characters[index] = count;
      count++;
    }

    if (characters[index] === 'o') {
      characters[index] = count;
      count++;
    }

    if (characters[index] === 'i') {
      characters[index] = count;
      count++;
    }

    if (characters[index] === 'e') {
      characters[index] = count;
      count++;
    }

    if (characters[index] === 'u') {
      characters[index] = count;
      count++;
    }

    results.push(characters[index]); 
  }
  let r = results.join('');
  return r;
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof (removeVowels), 'function');
assert.strictEqual(removeVowels(parameter), result);
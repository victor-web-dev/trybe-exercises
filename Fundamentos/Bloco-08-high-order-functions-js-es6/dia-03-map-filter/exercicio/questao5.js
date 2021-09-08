const assert = require('assert');
const books = require('./books');

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia. 

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  return books.filter((e) => e.genre === 'Fantasia' || e.genre === 'Ficção Científica' )
  .map((e) => `${e.author.name}` )
  .sort();
}

assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);
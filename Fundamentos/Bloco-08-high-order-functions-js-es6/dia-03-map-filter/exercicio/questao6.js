const assert = require('assert');
const books = require('./books');

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  const date = new Date();
  const old = books.filter((e) => date.getFullYear() - e.releaseYear > 60)
  .map((e) => `${e.name}`);
  return old;
}

assert.deepStrictEqual(oldBooks(), expectedResult);
const assert = require('assert');
const books = require('./books');

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
}

assert.deepStrictEqual(oldBooks(), expectedResult);
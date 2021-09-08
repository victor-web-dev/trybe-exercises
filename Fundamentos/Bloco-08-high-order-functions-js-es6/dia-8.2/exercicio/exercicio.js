const books = require('./books');
const assert = require('assert');

// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947
function authorBornIn1947() {
  // escreva aqui o seu código
  const author = books.find((element) => element.author.birthYear === 1947 );
  return author.author.name;
}

assert.strictEqual(authorBornIn1947(), 'Stephen King');


// Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = '';
  const sortedBook = books.sort((a,b) => a.name.length - b.name.length);
  // escreva aqui o seu código
  nameBook = sortedBook[0].name;
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}

assert.strictEqual(smallerName(), 'Duna');

// Encontre o primeiro livro cujo nome possui 26 caracteres
let expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook() {
  // escreva seu código aqui
  return books.find((element) => element.name.length === 26);
}

assert.deepStrictEqual(getNamedBook(), expectedResult);

// Ordene os livros por data de lançamento em ordem decrescente.
 expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];

function booksOrderedByReleaseYearDesc() {
  // escreva aqui seu código
  return books.sort((a,b) => b.releaseYear - a.releaseYear );
}

assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);


/* 
const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

// retorna undefined
const { nationality } = person;

*/

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

// caso a chave nao exista, adiciona o valor padrao definido
const { nationality = 'Brazilian' } = person;
console.log(nationality); // Brazilian
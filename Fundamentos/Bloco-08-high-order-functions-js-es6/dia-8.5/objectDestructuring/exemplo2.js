const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};
// usando nomes de referencia pra cada chave do objeto
const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática
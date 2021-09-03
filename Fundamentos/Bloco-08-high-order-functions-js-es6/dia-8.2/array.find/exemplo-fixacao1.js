//  Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  // Adiciona seu código aqui
  return numbers.find((element) => element % 5 === 0 && element % 3 === 0 );
}

console.log(findDivisibleBy3And5())

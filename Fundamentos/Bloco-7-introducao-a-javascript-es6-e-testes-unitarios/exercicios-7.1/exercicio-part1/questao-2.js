const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortArray = (array) => {
  let arraySorteado = oddsAndEvens.sort((a,b) => {
    return a-b;
  });
  return arraySorteado;
}

console.log(`Os números ${sortArray()} se encontram ordenados de forma crescente!`);
/* 
  Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

    Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

*/

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const isEqual = (a,b) =>{
  if (a === b) { return 1; }
  if (!(a === b)) { return -0.5; }
  if (!(a === b) && b === 'N.A') { return }
};

const correctAnswers = (array1, array2, callback) => {
  let count = 0;
  for (const key in array1) {
    count += callback(array1, array2);
  }
  count *= -1;
  return console.log(count);
}

correctAnswers(RIGHT_ANSWERS, STUDENT_ANSWERS, isEqual);
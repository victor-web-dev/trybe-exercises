let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ; 

// for(let i of numbers){
//   console.log(i);
// }

//-------------

//2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado; 
// let sum = 0;
// for(let i of numbers){
//   sum += i; 
// }
// console.log(sum);

//-------------

//3 -  Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let total = numbers.length,
//     sum = 0;
//     media = 0;
//  for(let i of numbers){
//    sum += i; 
//  }

//  media = sum/total;
//  console.log(media);

//-------------------------

//4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// if(media > 20){
//   console.log('valor maior que 20');
// }
// else{
//   console.log('valor menor que 20');
// }

//---------------------------

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// let maior = 0;
// for(let i of numbers){
//   if(i > maior){
//     maior = i;
//   }
// }

// console.log(maior);

// ------------------------

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let cont = 0;
// for(let i of numbers){
//   if(i%2 !== 0){
//     cont++;
//   }
// }
// console.log(cont);

//----------------------------

// 7 - Utilizando for , descubra qual o menor valor contido no array e imprima-o;


// let menor = numbers[0];
// for(let i of numbers){
//   if(menor > i){
//     menor = i;
//   }
// }

// console.log(menor);

//----------------------------

//8 - Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado; 

// let arr = [];

// for(let i=1;i<=25;i++){
//   arr.push(i);
// }
// console.log(arr);

// --------------------------

//9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 . 


// let arr = [];

// for(let i=1;i<=25;i++){
//   arr.push(i);
// }

// for(let i of arr){
//   console.log(i/2);
// }

//---------------------------------------

//Bonus

// for(let i = 1; i < numbers.length; i++){

//   for(let j = 0;j < i; j++){

//     if(numbers[i] < numbers[j]){ //entre crescente e decrescente eh so trocar os sinais > ou <
//       let aux = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = aux;
//     }

//   }

// }
// console.log(numbers);

// Bonus, 3 - Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push .

let arr = [];
for(let i=0;i<numbers.length;i++){
  if(!numbers[i+1]){
    arr.push(numbers[i]*2);
  }else{
    arr.push(numbers[i]*numbers[i+1]);
  }
}
console.log(arr);

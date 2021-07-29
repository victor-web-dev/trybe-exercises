let a,b,c;
//let isEqual = false;
//let cont = 0;

//while(!isEqual){

a = parseInt((Math.random()*10));
b = parseInt((Math.random()*10));
c = parseInt((Math.random()*10));
//compara maior, questao 2
if(a > b){
  console.log(`${a} eh maior que ${b}` );
  //cont++;
}else if(a == b){
  console.log(`${a} eh igual a ${b}`);
  //cont++;
  //isEqual = true;
} else{
  console.log(`${a} eh menor que ${b}`);
  //cont++;
}
//}
//console.log(cont);

//questao 3, maior que 3 variaveis

if(a > b && a > c){
  console.log(`${a} eh maior que ${b} e ${c}`);
}
else if(b > a && b > c){
  console.log(`${b} eh maior que ${a} e ${c}`);
}
else if(c > a && c > b){
  console.log(`${c} eh maior que ${a} e ${b}`);
}
else {
  console.log(`${a} , ${b} e ${c} sao iguais por algum milagre`);
}

//ta com bug

// questao 04
//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário. 

let num = (-1);

if(num > 0){
  console.log("valor positivo");
}
else if(num < 0){
  console.log("valor negativo");
}
else{
  console.log("valor igual a 0");
}   

 
//questao 05
//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro. 


let lado1 = 60,
    lado2 = 60,
    lado3 = 60,
    soma = lado1 + lado2 + lado3,
    isValid = null;

isValid = (soma === 180)?true:false;

console.log(isValid);


// questao 06
//
let chessPiece = 'pawn',
    piece = chessPiece.toLowerCase();
// options: pawn, rook, bishop, knight, king, queen

switch(piece){
  case 'pawn':
    console.log('move-se sempre na vertical, 1 casa');
    break;

  case 'rook':
    console.log('move-se na vertical e horizontal, quantas casas for possivel.');
    break;

  case 'bishop':
    console.log('move-se na diagonal, quantas casa for possivel');
    break;

  case 'knight':
    console.log('move-se na vertical e horizontal, podendo pular por cima de outra peça, 3 casas em forma de L. Se o movimento for vertical - anda-se 2 casa na vertical e a 3 precisa ser na horizontal. Se o movimento for horizontal - anda-se 2 casa na horizontal e a 3 precisa ser na vertical.');
    break;

  case 'king':
    console.log('move-se em qualquer direcao 1 casa.');
    break;

  case 'queen':
    console.log('move-se em qualquer direção seja vertical, horizontal ou diagonal.');
    break;
  
  default:
    console.log('valor invalido');
    break;
}
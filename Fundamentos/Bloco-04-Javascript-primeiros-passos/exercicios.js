let a,b,c;
//let isEqual = false;
//let cont = 0;

//while(!isEqual){

a = (Math.random()*10).toFixed(0);
b = (Math.random()*10).toFixed(0);
c = (Math.random()*10).toFixed(0);
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


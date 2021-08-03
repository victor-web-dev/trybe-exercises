// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for

// function palindromo(text){
//   let isTrue = false;
//   let reversedText = text.split('').reverse().join('');

//   if(text == reversedText){
//     isTrue = true;
//   }else{
//     isTrue = false;
//   }

//   return isTrue;
// }
// console.log(palindromo('arara'));

// console.log(palindromo('desenvolvimento'));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let array = [2,3,4,7,10,1];

// function maiorValorIndice(array){
//   let maior = {
//     valor: 0,
//     indice: 0
//   }

//   for(let key in array){
//     if(array[key] > maior.valor){
//       maior.valor = array[key];
//       maior.indice = key;
//     }
//   }

//   return maior.indice;
// }

// console.log(maiorValorIndice(array));


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor. 

// let array = [2, 4, 6, 7, 10, 0, -3];

// function maiorValorIndice(array){
//   let menor = {
//     valor: array[0],
//     indice: 0
//   }

//   for(let key in array){
//     if(array[key] < menor.valor){
//       menor.valor = array[key];
//       menor.indice = key;
//     }
//   }

//   return menor.indice;
// }

// console.log(maiorValorIndice(array));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. 

// let array =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; 

// function maiorChar(array){
//   let maiorChar = 0,
//       maiorNome = '';
//   for(let key in array){
//     if(array[key].length > maiorChar){
//       maiorChar = array[key].length;
//       maiorNome = array[key];
//     }
//   }
//   return maiorNome;
// }

// console.log(maiorChar(array));

// 5- Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. 

let array = [2, 3, 2, 5, 8, 2, 3];

//pega cada elemento do array e compara com todo o resto
// contabilizando cada repeticao e retorna o valor que mais se 
//repetiu
function maiorRepeticao(array){
  
  let maiorRepetido = {
        valor: null,
        rep: 0
      };

  for(let i = 0; i < array.length; i++){
    let cont = 0;

    for(let j = 1; j < array.length; j++){
      if(array[i] === array[j]){
        cont++;
        
      }
      
    }

    if(cont > maiorRepetido.rep){
      maiorRepetido.valor = array[i];
      maiorRepetido.rep = cont;
    }
    
  }
  return maiorRepetido.valor;
}

console.log(maiorRepeticao(array));
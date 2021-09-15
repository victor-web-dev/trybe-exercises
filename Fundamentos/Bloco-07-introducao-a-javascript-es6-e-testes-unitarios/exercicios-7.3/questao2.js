const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
const array = [1, 2, 3, 4];
assert.deepEqual(myRemove(array, 3), [1, 2, 4]); //deepEqual compara os valores internos do array ou objeto
assert.notDeepEqual(myRemove(array, 3), array);
assert.deepEqual(myRemove(array), array);
assert.deepEqual(myRemove(array,5), array);



/* 
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  Verifique se o array passado por parâmetro não sofreu alterações
  Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado

*/
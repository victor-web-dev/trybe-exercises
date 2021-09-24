const myRemove = require('./questao2');

describe('Questao 2', () => {
  const arr = [1, 2, 3, 4];
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove(arr,3)).toEqual([1,2,4]);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove(arr,3)).not.toEqual(arr);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove(arr,5)).toEqual(arr);
  });
});

const { encode, decode } = require('./questao4');


describe('Questao 4', () => {
  
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toMatch('function');
    expect(typeof decode).toMatch('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {

  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {

  });

  it('Teste se as demais letras/números não são convertidos para cada caso', () => {

  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {

  });

});
const { encode, decode } = require('./questao4');


describe('Questao 4', () => {
  
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toMatch('function');
    expect(typeof decode).toMatch('function');
  });

  it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a,e,i,o,u')).toMatch('1,2,3,4,5');
  });

  it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('1,2,3,4,5')).toMatch('a,e,i,o,u');
  });

  describe('Teste se as demais letras/números não são convertidos para cada caso', () => {
    it('verifica se a letra b sera convertida', () => {
      expect(encode('b')).toMatch('b');
      expect(decode('b')).toMatch('b');
    });

    it('verifica se a letra t sera convertida', () => {
      expect(encode('t')).toMatch('t');
      expect(decode('t')).toMatch('t');
    });

    it("verifica se a frase com numeros 'Foi 50 reais' sera convertida", () => {
      expect(encode('Foi 50 reais')).not.toMatch('Foi 50 reais');
      expect(encode('Foi 50 reais')).toMatch('F43 50 r213s');
    });
  });

  it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('Otto')).toHaveLength(4);
  });

});
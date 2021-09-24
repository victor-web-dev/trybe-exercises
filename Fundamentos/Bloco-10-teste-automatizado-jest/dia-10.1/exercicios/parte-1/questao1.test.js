const sum = require('./questao1');

describe('Teste da funcao sum', () => {

  it('testa se o retorno de sum(4,5) eh 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('Testa se o retorno de sum(0,0) eh 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  it('Testa se a funcao lanca erro quando o tipo de um valor for String', () => {
    expect(() => sum(4,'5')).toThrow();
  });

  it("Testa se a mensagem de erro eh 'parameters must be numbers' ", () => {
    expect(() => sum(4,'5')).toThrow('parameters must be numbers');
  });

});
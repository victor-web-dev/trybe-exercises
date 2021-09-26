const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

describe('testa funcao uppercase', () => {

  it('verifica se retorna a palavra em caixa alta', (done) => {
    uppercase('casa', (result) => {
      
      try {
        expect(result).toMatch('CASA');
        done();
      } catch (error) {
        done(error);
      }
      
    });
  });

});
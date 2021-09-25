/* test('Não deveria passar!', () => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
  }, 500);
}); */

//  Nesse caso o fluxo eh interrompido antes que o done() seja executado. 
/* test('Não deveria passar!', (done) => {
  setTimeout(() => {
    expect(10).toBe(5);
    console.log('Deveria falhar!');
    done();
  }, 500);
});
*/

// forma correta de usar 
// o setTimeOut esta sendo usado somente para simular uma callback
// na real implementacao nao se usa o setTimeOut
test('Não deveria passar!', (done) => {
  setTimeout(() => {
    try {
      expect(10).toBe(5);
      console.log('Deveria falhar!');
      done();
    } catch (error) {
      done(error); 
    }
  }, 500);
});

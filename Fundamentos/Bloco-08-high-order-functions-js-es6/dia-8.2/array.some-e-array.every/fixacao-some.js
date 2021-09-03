//  Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((element) => element === name); 
}

console.log(hasName(names, 'Ana'));
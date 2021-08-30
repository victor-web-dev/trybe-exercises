//Maior palavra em uma frase

const maiorPalavra = (string) => {
  const palavras = string.split(' ');
  let maior = '';
  for (value of palavras) {
    value.length > maior.length ? maior = value : '';
  }
  return maior;
}

const a = 'Antônio foi no banheiro e não sabemos o que aconteceu'
console.log(maiorPalavra(a));

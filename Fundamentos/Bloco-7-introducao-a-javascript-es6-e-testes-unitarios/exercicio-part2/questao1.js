// Fatorial

const fatorial = (value) => {
  return value <= 1 ? 1 : value * fatorial(value - 1);
}

console.log(fatorial(6));
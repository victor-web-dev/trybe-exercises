let names = {
  person1: 'joao',
  person2: 'maria',
  person3: 'jorge'
};

for(let key in names){
  console.log('Ola ' + names[key]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (const key in car) {
  console.log(key, car[key]);
}


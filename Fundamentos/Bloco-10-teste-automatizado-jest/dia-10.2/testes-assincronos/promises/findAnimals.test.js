const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject(new Error('Não possui esse tipo de animal.'));
    }, 100);
  })
);

// uso do teste com o then/catch
describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', () => (
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  ));
});

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => (
    findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ))
  ));
});

// uso do teste com matchers resolves/rejects

describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      return expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => (
      expect(findAnimalsByType('Lion'))
        .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
    ));
  });
});
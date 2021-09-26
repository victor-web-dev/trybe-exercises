const users = [
  { id: 1, name: 'Mark' },
  { id: 2, name: 'Paul' },
];

const findUserById = (id) => new Promise((resolve, reject) => {
  const result = users.find((user) => user.id === id);

  if (result) {
    return resolve(result);
  }

  return reject(new Error(`User with ${id} not found.`));
});

const getUserName = (userId) => findUserById(userId).then((user) => user.name);

describe('questao 2', () => {

  it('deve retornar o nome do usuario', () => {
    return expect(getUserName(1)).resolves.toBe('Mark');
  });

  it('deve retornar um erro quando usuario nao existe', () => {
    return expect(getUserName(5)).rejects.toEqual(new Error('User with 5 not found.'));
  });

});

describe('Questao 3', () => {

  it('deve retornar o nome do usuario', async () => {
    await expect(getUserName(2)).resolves.toBe('Paul');
  });

  it('forma com rejects para pegar o erro', async () => {
    await expect(getUserName(5)).rejects.toEqual(new Error('User with 5 not found.'));
  });

  it('forma com try catch para pegar erro', async () => {
    try {
      await getUserName(5);
    } catch (error) {
      expect(error.message).toBe('User with 5 not found.');
    }
  });
});
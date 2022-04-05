const connection = require('./connection');

const getAll = async () => {

  const [authors] = await connection.execute('SELECT * FROM authors');

  return authors;
};

const getById = async (id) => {
  const [ author ] = await connection.execute('SELECT * FROM authors WHERE id = ?', [id]);

  return author;
};

module.exports = {
  getAll,
  getById,
}
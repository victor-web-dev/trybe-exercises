const connection = require('./connection');

const getAllBooks = async () => {
  const query = 'SELECT title FROM books';
  const [ books ] = await connection.execute(query);

  return books;
};

module.exports = {
  getAllBooks,
};
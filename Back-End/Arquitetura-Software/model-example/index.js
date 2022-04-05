const express = require('express');
const { getAll, getById } = require('./models/Author');
const Books = require('./models/Books');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/authors/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const author = await getById(id);

    if (author.length < 1) return res.status(400).end();

    return res.status(200).json(author);
  } catch (error) {
    return res.status(500).end();
  }
});

app.get('/authors', async (_req, res) => {
  try {
    const authors = await getAll();
    return res.status(200).json(authors);
  } catch (error) {
    return res.status(500).end();
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Books.getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(PORT, () => {
  console.log(`App iniciado na porta ${PORT}`);
});
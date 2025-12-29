const express = require('express');
const Book = require('./book');
const authenticateToken = require('./auth')

const app = express();
app.use(express.json());

// endpoity
app.get('/api/books', async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});

app.get('/api/books/:id', async(req, res) => {
    const book = await  Book.findByPk(req.params.id);

    if(!book) {
        return res.status(404).json({ message: 'Nie znaleziono książki'});
    }
    res.json(book);
});

app.post('/api/books', authenticateToken, async(req, res) => {
    const {title, author, year} = req.body;
    const newBook = await Book.create({ title, author, year });
    res.status(201).json({ id: newBook.id});
});

app.delete('/api/books/:id', authenticateToken, async (req, res) => {
    const book = await Book.findByPk(req.params.id)
    if (!book) {
        return res.status(404).json({ message: 'Nie znaleziono książki'})
    }
    await book.destroy();
    res.json({ menubar: 'Usunięto książkę'});
});

app.listen(3001, () => {
    console.log('Books service włączono na porcie 3001');
})
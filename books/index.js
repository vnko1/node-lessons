const fs = require("fs/promises");
const { nanoid } = require("nanoid");
const path = require("path");

const booksPath = path.join(__dirname, "books.json");

const getAll = async () => {
  const response = await fs.readFile(booksPath);

  return JSON.parse(response);
};

const getById = async (id) => {
  const books = await getAll();

  const book = books.find((book) => book.id === id);

  return book || null;
};

const addBook = async (bookData) => {
  const books = await getAll();
  const newBook = { ...bookData, id: nanoid() };
  books.push(newBook);

  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return newBook;
};

const updateBook = async (id, bookData) => {
  const updatedBook = { ...bookData, id };

  const books = await getAll();
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return null;
  books[index] = updatedBook;
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  return books[index];
  //   books.splice(index, 1, updatedBook);
};

const deleteBook = async (id) => {
  const books = await getAll();
  const index = books.findIndex((book) => book.id === id);
  if (index === -1) return null;

  const [result] = books.splice(index, 1);
  await fs.writeFile(booksPath, JSON.stringify(books, null, 2));

  return result;
};

module.exports = { getAll, getById, addBook, updateBook, deleteBook };

// const getAll = async () => {
//   try {
//     const response = await fs.readFile(booksPath);
//     // const response = await fs.readFile(`${__dirname}/books.json`);

//     return JSON.parse(response);
//   } catch (err) {
//     console.log(err);
//   }
// };

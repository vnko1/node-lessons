const { getAll, getById, addBook, updateBook, deleteBook } = require("./books");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const { program } = require("commander");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "read":
      const allBooks = await getAll();
      return console.log(allBooks);

    case "getById":
      const book = await getById(id);
      return console.log(book);

    case "addBook":
      const newBook = await addBook({ title, author });
      return console.log(newBook);

    case "updateBook":
      const updatedBook = await updateBook(id, { author, title });
      return console.log(updatedBook);

    case "deleteBook":
      const deletedBook = await deleteBook(id);
      return console.log(deletedBook);

    default:
      return console.log("Unknown action");
  }
};

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-t, --title, <type>")
  .option("-at, --author, <type>");

program.parse();

const options = program.opts();

invokeAction(options);

// const invokeAction = async ({ action, id, title, author }) => {
//   const normalizedId = id + "";
//   switch (action) {
//     case "read":
//       const allBooks = await getAll();
//       return console.log(allBooks);

//     case "getById":
//       const book = await getById(normalizedId);
//       return console.log(book);

//     case "addBook":
//       const newBook = await addBook({ title, author });
//       return console.log(newBook);

//     case "updateBook":
//       const updatedBook = await updateBook(normalizedId, { author, title });
//       return console.log(updatedBook);

//     case "deleteBook":
//       const deletedBook = await deleteBook(normalizedId);
//       return console.log(deletedBook);

//     default:
//       return console.log("Unknown action");
//   }
// };

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);

// console.log(arr);
// console.log(argv);

// node index --action deleteBook --id CTHE0f1kkWwqS5sL2tI8_

// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   //   console.log(action);
//   invokeAction({ action });
// }

/* invokeAction({
  action: "deleteBook",
  id: "lVdzJkhjLC3GfRsl168IF",
  author: "Ivan Franko",
});
invokeAction({ action: "getById", id: "e1Tpn_I3wBkLREY6wG0lb" });
invokeAction({
  action: "addBook",
  author: "Schevchenko",
  title: "Cobsar",
});

invokeAction({
  action: "updateBook",
  id: "lVdzJkhjLC3GfRsl168IF",
  author: "Ivan Franko",
  title: "Virshi zbirka",
}); */

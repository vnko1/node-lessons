// import users from "./commonExport.mjs";

// const Andrii = require("./commonExport");
// console.log(Andrii);
// const { name } = require("./commonExport");
// const { admin, user } = require("./data");

// const value = require("./data").foo();

// console.log(value);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(3);

// console.log(name);
// console.log(admin, user);
// console.log(users);

// const fs = require("fs");
// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// const fs = require("fs/promises");
const fs = require("fs").promises;
// fs.readFile("./files/file.txt").then(console.log).catch(console.log);

async function readFile() {
  try {
    // const buffer = await fs.readFile("./files/file.txt");
    // console.log(buffer);
    // const text = buffer.toString();
    // console.log(text);
    const text = await fs.readFile("./files/file.txt", "utf-8");
    console.log(text);
  } catch (error) {
    console.log(error);
  }
}
readFile();

// async function addText() {
//   await fs.appendFile("./files/file.txt", "\nHello Andrii");
// }

// addText();

async function replaceText() {
  await fs.writeFile("./files/file.txt", "New data");
}
replaceText();

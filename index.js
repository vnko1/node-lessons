const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_HOST)
  .then(() => console.log("Database connect success"))
  .catch(console.log);

const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

const todosController = require("./controllers/todos");
app.use(parser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

app.use("/", todosController);

app.listen(3000, () => {
  console.log("running on port 3000");
});

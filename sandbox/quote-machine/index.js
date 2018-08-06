const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

let quotes = [
  {
    author: "Darth Vader",
    text: "I find your lack of faith disturbing."
  },
  {
    author: "Princess Leia Organa of Alderahn",
    text: "Help me, Obi-Wan Kenobi, You`re my only hope."
  },
  {
    author: "Count Dooku",
    text:
      "What if I told you that the Republic was now under the control of a Dark Lord of the Sith?"
  },
  {
    author: "Padmé Amidala",
    text: "So this is how liberty dies. With thunderous applause."
  },
  {
    author: "Chirrut Îmwe",
    text: "I’m one with the Force. The Force is with me."
  }
];

app.get("/", (req, res) => {
  res.render("quotes", { quotes: quotes });
});

// app.get("/", (req, res) => {
//   res.send("Hello world!");
// });

//create a new quote route
app.post("/quotes", (req, res) => {
  //get form data from user
  //create new quote object with that data
  let newQuote = {
    author: req.body.author,
    text: req.body.text
  };
  quotes.push(newQuote);
  res.redirect("/");
  //put new quote object into our quotes array
  //send user back to read all quotes
});

app.get("/:anything", (req, res) => {
    res.render("error");
  });

app.listen(3000, () => console.log("running on port 3000"));

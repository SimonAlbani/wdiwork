const express = require("express");
const router = express.Router();
const Todo = require("../db/connection").Todos;

router.get("/", (req, res) => {
  Todo.findAll()
    .then(todos => {
      res.render("index", { todos });
    })
    .catch(err => console.error(err));
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.get("/:id", (req, res) => {
  Todo.findById(req.params.id).then(todo => {
    res.render("show", { todo });
  });
});

router.post("/", (req, res) => {
  Todo.create(req.body).then(() => {
    res.redirect("/");
  });
});

router.get("/edit/:id", (req, res) => {
  Todo.findById(req.params.id).then(todo => {
    res.render("edit", { todo });
  });
});

router.put("/:id", (req, res) => {
  req.body.complete = req.body.complete ? true : false;
  Todo.findById(req.params.id).then(todo => {
    return todo.updateAttributes(req.body);
  }).then(todo => {
      res.redirect('/');
  });
});

router.delete("/:id", (req, res) => {
    Todo.findById(req.params.id)
      .then(todo => {
        todo.destroy();
      })
      .then(() => {
        res.redirect("/");
      });
  });

module.exports = router;

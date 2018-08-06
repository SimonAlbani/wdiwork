const Sequelize = require("sequelize");

//USE librarydb;
const sequelize = new Sequelize("librarydb", "inclassuser", "Hartford1810", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false
});

sequelize.authenticate().then(() => {
  console.log("connected");
});

/*
CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  nationality VARCHAR(255),
  birth_year INTEGER
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  publication_date INTEGER,
  author_id INTEGER
);
*/

const Author = sequelize.define("author", {
  name: {
    type: Sequelize.STRING
  },
  nationality: {
    type: Sequelize.STRING
  },
  birthYear: {
    type: Sequelize.INTEGER
  }
});

const Book = sequelize.define("book", {
  title: {
    type: Sequelize.STRING
  },
  publicationDate: {
    type: Sequelize.INTEGER
  },
  authorId: {
    type: Sequelize.INTEGER
  }
});

Author.sync({ force: true }).then(() => {});

Book.sync({ force: true }).then(() => {
  process.exit();
});

// Unless otherwise stated, all queries should return all columns

// Get all information about all authors
Author.findAll();

// Get just the name and birth year of all authors
Author.findAll({ attributes: ["name", "birthYear"] });

// Get all authors born in the 20th centruy or later
Author.findAll({
  where: {
    birthYear: {
      [Sequelize.Op.gt]: 1900
    }
  }
});

// Get all authors born in the USA
Author.findAll({
  where: {
    nationality: {
      [Sequelize.Op.eq]: "United States of America"
    }
  }
});

// Get all books published on 1985
Book.findAll({
  where: {
    publicationDate: {
      [Sequelize.Op.eq]: 1985
    }
  }
});

// Get all books published before 1989
Book.findAll({
  where: {
    publicationDate: {
      lt: 1989
    }
  }
});

// Get just the title of all books.

// Get just the year that 'A Dance with Dragons' was published
// Cry when you realize how long it's been

// Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)

// Add yourself as an author
Author.create({
  name: "Ali",
  nationality: "USA",
  birthYear: 1900
});

// Add two books that you'd like to write (you can hard-code your id as the author id)

// Update one of your books to have a new title
Book.find({ name: "myBookName" }).then(book => {
  book.name = "myNewBookName";
  book.save();
});

// Delete your books
Book.find({ name: "myBookName" }).then(book => {
book.destroy();
  });



// Delete your author entry

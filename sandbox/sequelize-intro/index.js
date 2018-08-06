const Sequelize = require("sequelize");

// USE generalassembly;
const sequelize = new Sequelize(
  "generalassembly",
  "inclassuser",
  "Hartford1810",
  {
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
  }
);

sequelize.authenticate().then(() => {
  console.log("connected");
});

/*
CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  quote TEXT,
  birthday VARCHAR(255),
  ssn INT NOT NULL,
  UNIQUE(ssn)
);
*/

const Student = sequelize.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quote: {
    type: Sequelize.TEXT
  },
  birthday: {
    type: Sequelize.STRING
  },
  ssn: {
    type: Sequelize.INTEGER,
    unique: true
  }
});

Student.sync({ force: true }).then(() => {
  // INSERT INTO students (first_name, last_name, quote, birthday, ssn) VALUES ('Andy', 'Whitely', 'Two goldfish are in a tank. One says, "Know how to drive this thing?"', 'April 7', 8675309);
  Student.create({
    firstName: "Ali",
    lastName: "Spittel",
    quote: "hello, world",
    birthday: "July 14th",
    ssn: 100010
  }).then(() => {
    Student.findAll().then(function(students) {
      console.log(students);
    });

    Student.find({ firstName: "Ali" }).then(function(ali) {
      ali.firstName = "Alison";
      ali.lastName = "Spit";
      ali.save();
    });

    Student.find({ firstName: "Ali" }).then(function(ali) {
      ali.destroy();
    });
  });

  // SELECT * FROM students;

  // UPDATE students SET first_name = 'Andrew' WHERE first_name = 'Andy';

  // DELETE FROM students WHERE first_name = 'Andrew';

  // SELECT first_name, last_name FROM students;
  Student.findAll({ attributes: ["firstName", "lastName"] });

  //   process.exit();
});
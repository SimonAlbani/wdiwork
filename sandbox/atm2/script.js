// class Atm {
//   constructor(type) {
//     this.type = type;
//     this.money = 0;
//     this.transactionHistory = [];
//   }
//   withdraw(amt) {
//     this.money -= amt;
//     this.transactionHistory.push(-amt);
//   }
//   deposit(amt) {
//     this.money += amt;
//     this.transactionHistory.push(amt);
//   }
//   showBalance() {
//     console.log(this.money);
//   }
// }

// let savings = new Atm("savings");
// let checking = new Atm("checking");
// savings.deposit(10);
// checking.withdraw(20);
// savings.showBalance();
// checking.showBalance();

// //animals

// class Animal {
//   constructor(name, colour) {
//     this.name = name;
//     this.colour = colour;
//   }
//   eat(food) {
//     console.log("eating " + food);
//   }
// }
// class Dog extends Animal {
//   constructor(name, colour, breed) {
//     super(name, colour);
//     this.breed = breed;
//   }
//   bark() {
//     console.log("woof woff");
//   }
// }

// class Cat extends Animal {
//   constructor(name, colour, numLives) {
//     super(name, colour);
//     this.numLives = numLives;
//   }
//   meow() {
//     console.log("meow");
//   }
// }

// var goat = new Animal("Gregory", "white");
// let maddie = new Dog("Maddie", "black", "lab");
// let whiskers = new Cat("Whiskers", "orange", 9);

class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  changePassword(newPassword) {
    this.password = newPassword;
  }
}

class Admin extends User {
  constructor(userName, password, accessLevel) {
    super(userName, password);
    this.accessLevel = accessLevel;
  }
  overridePassword(user, password) {
    user.changePassword(password);
  }
}

var simon = new User("SimonAlbani", "dogsareawesome");
var superSimon = new Admin("SuperSimon", "newpassword", 9000);

superSimon.overridePassword(simon, "hiiii");

console.log(superSimon);
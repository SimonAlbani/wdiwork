// //es 5
// function Car(make, model, color) {
//   this.make = make;
//   this.model = model;
//   this.color = color;
//   this.drive = function() {
//     console.log("vroom vroom");
//   };
//   this.wheels = 4;
// }

//es6
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("vroom vroom");
  }
}

var crv = new Car("Honda", "CRV", "gold");
var tesla = new Car("Tesla", "Model X", "green");

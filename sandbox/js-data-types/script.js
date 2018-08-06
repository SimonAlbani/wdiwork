let age = "two";

if (age < 18) {
  console.log("Come back when you are older.");
} else if (age < 21) {
    console.log("you can come in but you can't drink.");
}  else if (age >= 21) {
  console.log("You can go in");
} else if (typeof age !== "number") {
  console.log("error");
}

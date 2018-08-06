// function square(number) {
//   return number * number;
// }

// console.log(square(4));

// function exponentiate(number, power) {
//     return Math.pow(number, power);
// }
// console.log(exponentiate(4, 4));

// function fizzBuzz(number) {
//   for (let i = 0; i <= number; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }
// fizzBuzz(200);

// var words = ["hello", "what", "is", "up", "dude"];
// function lengths(arr) {
//   var newArray = words.map(words.length);
//   return console.log(lengths(arr));
// }

// var words = ["hello", "what", "is", "up", "dude"];

// function lengths(words) {
//     if (i = 0; i > words.length; i++;)
// words.length;
// console.log(lengths);
// }

console.log("homework===========================================");

//1)
function maxOfTwoNumbers(num1, num2) {
  if (num1 < num2) {
    console.log("The higher number is " + num2);
  } else if (num1 > num2) {
    console.log("The higher number is " + num1);
  } else {
    console.log(num1 + " and " + num2 + " are even");
  }
}
maxOfTwoNumbers(3, 4);

//2)
function maxOfThreeNumbers(num1, num2, num3) {
  return Math.max(num1, num2, num3);
}
maxOfThreeNumbers(99, 107, 108);

// 3)
function isCharacterAVowel(letter) {
  return ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(letter);
}
isCharacterAVowel("a");

//4)
function sumArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    sum = numbers.reduce(function(prev, curr) {
      return prev + curr;
    }, 0);
    return sum;
  }
}
console.log(sumArray([1, 2, 3, 4]));

function multiplyArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    total = numbers.reduce(function(prev, curr) {
      return prev * curr;
    });
    return total;
  }
}
console.log(multiplyArray([1, 2, 3, 4]));

// //5)
function numberOfArguments() {
  return arguments.length;
}
console.log(numberOfArguments(1, 2, 3, 4, 5, 8));

//6)
function reverseString(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
console.log(reverseString("jag testar"));

//7)
function findLongestWord(arr) {
  var longest = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest.length;
}
findLongestWord(["short", "longer", "longest"]);

//8)
//8)
function filterLongWords(arr, i) {
  var bigger = [i];
  var brain =[];
  for (index = 0; index < arr.length; index++) {
  if (arr[index].length < i) {
    var word = arr[index];
    brain.push(word);
  }
  }
  return brain;
} 
filterLongWords(["hello", "hi", "longest"], 3)
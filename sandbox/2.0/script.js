//1
let maxOfTwoNumbers = function(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num1 < num2) {
    return num2;
  }
};

//2
let maxOfThreeNumbers = function(num1, num2, num3) {
  return Math.max(num1, num2, num3);
};

//3
var isCharacterAVowel = function(char) {
  let result = char + " is a vowel";
  if (char === "a") {
    return;
  } else if (char === "e") {
    return true;
  } else if (char === "i") {
    return true;
  } else if (char === "o") {
    return true;
  } else if (char === "u") {
    return true;
  } else if (char === "A") {
    return true;
  } else if (char === "E") {
    return true;
  } else if (char === "I") {
    return true;
  } else if (char === "O") {
    return true;
  } else if (char === "U") {
    return true;
  } else {
    return false;
  }
};

//4
let arr = [1, 2, 3, 4];
function sumArray(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

function multiplyArray(arr) {
  return arr.reduce(function(a, b) {
    return a * b;
  });
}

//5
let numberOfArguments = function() {
  return arguments.length;
};

//6
let reverseString = function(str) {
  return str
    .split("")
    .reverse()
    .join("");
};

//7
let findLongestWord = function(arr) {
  var longestWord = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord.length;
};

//8
let filterLongWords = function(arr, i) {
  var longer = [];
  for (x = 0; x < arr.length; x++) {
    if (arr[x].length < i) {
      var word = arr[x];
      longer.push(word);
    }
  }
  return longer;
};

let str = "hello world";
let pig_it = function(str) {
  let pig = "ay";
  let last = str
    .split("")
    .slice(0, 1)
    .join("");
  let first = str
    .split("")
    .slice(1)
    .join("");
  return first + last + pig;
};

let pig_it = function(str) {
  let pig = [];
  let spl = str.split("");
  for (i = 0; i < spl.length; i++) {
    if (spl[i] == " ") {
      pig.push(spl.slice(1));
      pig.push(spl.slice(0, 1));
    }
  }
  return pig;
};

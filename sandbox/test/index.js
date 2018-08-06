// let arr = [1, 3, 5, 7, 9, 11, 13];

// function binarySearch(arr, item, first = 0, last = null) {
//   if (!last) last = arr.length;
//   let midpoint = Math.floor((last - first) / 2) + first;

//   if (arr[midpoint] === item) return midpoint;
//   if (arr[midpoint] > item) return binarySearch(arr, item, first, midpoint);
//   if (arr[midpoint] < item) return binarySearch(arr, item, midpoint, last);
// }
// console.log(binarySearch(arr, 9));

// ```js
let input = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
totalOne = 0;
totalTwo = 0;
totalThree = 0;
totalFour = 0;
totalFive = 0;
totalSix = 0;
totalSeven = 0;
totalEight = 0;
totalNine = 0;

function oddInt(input) {
  for (let index in input) {
    console.log(input[index]);
    if (input[0] === input[index]) {
      totalOne++;
    } else if (input[1] === input[index]) {
      totalTwo++;
    } else if (input[2] === input[index]) {
      totalThree++;
    } else if (input[3] === input[index]) {
      totalFour++;
    } else if (input[4] === input[index]) {
      totalFive++;
    } else if (input[5] === input[index]) {
      totalSix++;
    } else if (input[6] === input[index]) {
      totalSeven++;
    } else if (input[7] === input[index]) {
      totalEight++;
    } else if (input[8] === input[index]) {
      totalNine++;
    }
  } if (totalOne % 2 == 1) {
      alert(input[0], " is odd")
  } else if (totalTwo % 2 == 1) {
    alert(input[1], " is odd")
} else if (totalThree % 2 == 1) {
    alert(input[2], " is odd")
} else if (totalFour % 2 == 1) {
    alert(input[3], " is odd")
} else if (totalFive % 2 == 1) {
    alert(input[4], " is odd")
} else if (totalSix % 2 == 1) {
    alert(input[5], " is odd")
} else if (totalSeven % 2 == 1) {
    alert(input[6], " is odd")
} else if (totalEight % 2 == 1) {
    alert(input[7], " is odd")
} else if (totalNine % 2 == 1) {
    alert(input[8], " is odd")
}
}
// ```
oddInt(input);
console.log("one ", totalOne);
console.log("two ", totalTwo);
console.log("three ", totalThree);
console.log("four ", totalFour);
console.log("five ", totalFive);
console.log("six ", totalSix);
console.log("seven ", totalSeven);
console.log("eight ", totalEight);
console.log("nine ", totalNine);

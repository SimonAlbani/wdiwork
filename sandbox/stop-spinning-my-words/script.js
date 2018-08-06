// function reverseString(str) {
//   return str
//     .split("")
//     .reverse()
//     .join("");
// }
// console.log(reverseString("jag testar"));

// function findLongestWord(arr) {
//   var longest = arr[0];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest.length) {
//       longest = arr[i];
//     }
//   }
//   return longest.length;
// }
// console.log(findLongestWord(["short", "longer", "longest"]));

// function reverse(str) {
//   return str.split("");
//   for (i = 0; i < str.length; ++i)
//     if (str.length > 5) {
//       str.reverse("").join("");
//     } else {
//       return str;
//     }
// }
// console.log("hello darkness my old friend");

function reverseWords(str) {
  if (str.length > 5) {
    return str
      .split("")
      .reverse()
      .join("");
  } else {
    return str;
  }
}
console.log(reverseWords("hello world"));

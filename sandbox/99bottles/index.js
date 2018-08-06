// const express = require("express");
// const app = express();

// app.get("/", (request, response) => {
//   response.send(
//     `<h1> 99 bottles of beer on te wall</h1><p><a href="/98">take one down pass it around...</a></p>`
//   );
// });

// app.get("/:number", (request, response) => {
//   if (request.params.number === "0") {
//     response.send(
//       `<h1>${
//         request.params.number
//       } Bottles of beer on the wall!</h1><p><a href="/">Start Over!</a> </p>`
//     );
//   } else {
//     response.send(
//       `<h1>${
//         request.params.number
//       } Bottles of beer on the wall</h1><p><a href="/${request.params.number -
//         1}">Take one down, pass it around...</a> </p>`
//     );
//   }
// });

// app.listen(1234, () => {
//   console.log("listening on port 1234");
// });

// //Ali's code------------------------------------------------------------------------
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let hello = "hello";
  response.send(
    `<h1>99 Bottles of beer on the wall</h1><a href="/98">take one down, pass it around</a>`
  );
});

app.get("/0", (request, response) => {
  response.send(
    `<h1>No Bottles of beer on the wall</h1><a href="/">take one down, pass it around</a>`
  );
});

app.get("/:number_of_bottles", (request, response) => {
  response.send(
    `<h1>${
      request.params.number_of_bottles
    } Bottles of beer on the wall</h1><a href="/${request.params
      .number_of_bottles - 1}">take one down, pass it around</a>`
  );
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});

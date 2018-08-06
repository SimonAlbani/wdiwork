const express = require("express");
const app = express();

app.get("/:greeting/:name", (request, response) => {
  
    response.send(`<h1>${request.params.greeting} ${request.params.name}</h1>`);
});

app.listen(4000, () => {
  console.log("listening on port 4000");
});

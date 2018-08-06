var newHomes = [
  {
    address: "27569 Cedarwood Drive",
    sf: "2,535",
    bedrooms: 3,
    baths: 2.5,
    price: "$496,500"
  },
  {
    address: "316 Annandale Drive",
    sf: "1,326",
    bedrooms: 4,
    baths: 2,
    price: "$275,000"
  },
  {
    address: "251 Grandview Road",
    sf: "3,800",
    bedrooms: 3,
    baths: 2,
    price: "$699,900"
  },
  {
    address: "28571 Manitoba",
    sf: "2,960",
    bedrooms: 4,
    baths: 3.5,
    price: "$775,000"
  }
];

$(function() {
  $("#addHome")
    .removeClass("btn-danger")
    .addClass("btn-success");

  $("table").on("click", ".btn-danger", function(evt) {
    $(this)
      .parent()
      .parent()
      .hide(1000);
  });
  // $("#addHome").on("click", function() {
  //   const newRow = $("<tr>");
  //   $("tbody:last-child").append(newRow);
  //   // $("tr").append("<td><td><td><td><td>");
  //   // var home = $("newHomes").shift();
  // });
  $("#addHome").on("click", function(evt) {
    console.log("addHome fired off");

    var home = newHomes.shift();
    console.log(home);

    $(`<tr>
<td>${home.address}</td>
<td>${home.sf}</td>
<td>${home.bedrooms}</td>
<td>${home.baths}</td>
<td>${home.price}</td>
<td>
    <button class="btn btn-xs btn-danger">Remove</button>
</td>
</tr>`)
      .hide()
      .appendTo("tbody")
      .fadeIn(1000);

    if (!newHomes.length) {
      $("#addHome").attr("disabled", "disabled");
    }
  });

  const restore = $("<button>");
  restore.addClass("btn btn-success restore").text("Restore All");
  $("div").append(restore);
  $(".restore").on("click", function(evt) {
    $("tr").show(2000);
  });
});

// $("newHomes").add;

// $(".btn-success").on("click", function(evt) {
//   $(this)
//     .parent()
//     .parent()
//     .add(newHomes)
//     .eq(1);
// });

// $("#addHome").on("click", function() {
//   console.log(this);
// });

//user clicks on "add home" button
//add click event listener on "add home" button
//add new home to the page
//get first home from the newHomes array and remove it

//take that homes object, create a <tr> DOM element add <td> children

//insert data from the object as values into the newly created element

//append to <tbody>

//if there is no more homes,

console.log("main.js loaded");

$(function() {
  //the DOM has loaded, ready to run JS
  $("h1")
    .text("jQuery is nifty")
    .css("color", "tomato")
    .css("background-color", "lightgreen");

  console.log("$(ul)", $("ul").length);

  $("ul")
    .eq(1)
    .css("color", "red");

  $(".numbers").css("color", "blue");

  console.log(
    $(".words li")
      .eq(2)
      .text()
  );
  $(".words li")
    .eq(2)
    .text("this used to be three");

  const newContainer = $("<ul>");
  newContainer.html("<li>Javascript</li>");

  $("#new-content").append(newContainer);

  const languages = ["Ruby", "Perl", "Go", "PHP", "Java"];
  languages.forEach(language => {
    let li = $("<li>").text(language);

    $("#new-content ul").append(li);
  });
});

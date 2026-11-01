$(document).ready(function () {
  // Task 0: setup
  console.log("jQuery is ready!");
  $("#ready-status").text("jQuery is ready! (see console)").addClass("ok");

  // Task 1: selectors & CSS
  $("#btn-text").on("click", function () {
    $("#demo-title").text("Text changed with .text() (selector: #id)");
  });

  $("#btn-html").on("click", function () {
    $(".note").html("<strong>Bold</strong> and <em>italic</em> inserted with .html() (selector: .class)");
  });

  $("#btn-css").on("click", function () {
    $("li").css({ color: "#fff", "background-color": "#4f46e5", padding: "6px 10px", "border-radius": "6px" });
  });

  $("#btn-reset").on("click", function () {
    $("#demo-title").text('I am an h3 with id="demo-title"');
    $(".note").each(function (i) { $(this).text('Paragraph with class "note" (' + (i + 1) + ")"); });
    $("li").removeAttr("style");
  });
});

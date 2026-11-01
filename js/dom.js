$(document).ready(function () {
  // Task 5: add & remove
  let count = 2;
  $("#btn-add").on("click", function () {
    count++;
    $("#item-list").append("<li>Item " + count + "</li>");
  });
  $("#btn-prepend").on("click", function () {
    count++;
    $("#item-list").prepend("<li>Item " + count + " (prepended)</li>");
  });
  $("#btn-remove").on("click", function () {
    $("#item-list li:last").remove();
  });

  // Task 6: attributes
  const images = ["images/pic1.svg", "images/pic2.svg", "images/pic3.svg"];
  let imgIndex = 0;
  $("#btn-src").on("click", function () {
    imgIndex = (imgIndex + 1) % images.length;
    $("#attr-img").attr("src", images[imgIndex]);
    $("#src-out").text(images[imgIndex]);
  });

  const links = [
    { href: "https://api.jquery.com", text: "jQuery API" },
    { href: "https://www.w3schools.com/jquery/", text: "W3Schools jQuery" }
  ];
  let linkIndex = 0;
  $("#btn-href").on("click", function () {
    linkIndex = (linkIndex + 1) % links.length;
    $("#attr-link").attr("href", links[linkIndex].href).text(links[linkIndex].text);
    $("#href-out").text($("#attr-link").attr("href"));
  });

  // Task 7: live form
  $("#in-name").on("input", function () {
    $("#out-name").text($(this).val() || "\u2014");
  });
  $("#in-email").on("input", function () {
    $("#out-email").text($(this).val() || "\u2014");
  });
});

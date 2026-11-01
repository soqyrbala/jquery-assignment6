$(document).ready(function () {
  // Task 2: visibility
  $("#btn-hide").on("click", function () { $("#vis-text").hide(); });
  $("#btn-show").on("click", function () { $("#vis-text").show(); });
  $("#btn-toggle").on("click", function () { $("#vis-text").toggle(400); });

  // Task 3: fade
  $("#btn-fadein").on("click", function () { $("#fade-img").fadeIn(800); });
  $("#btn-fadeout").on("click", function () { $("#fade-img").fadeOut(800); });
  $("#btn-fadetoggle").on("click", function () { $("#fade-img").fadeToggle(800); });

  // Task 4: slide
  $("#btn-slideup").on("click", function () { $("#panel").slideUp(500); });
  $("#btn-slidedown").on("click", function () { $("#panel").slideDown(500); });
  $("#btn-slidetoggle, #panel-head").on("click", function () { $("#panel").slideToggle(500); });
});

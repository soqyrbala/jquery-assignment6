$(document).ready(function () {
  const $thumbs = $(".thumb");

  // Thumbnails fade in one by one
  $thumbs.hide().each(function (i) {
    $(this).delay(i * 150).fadeIn(500);
  });

  // Fade on hover
  $thumbs.on("mouseenter", function () { $(this).find("img").stop(true).fadeTo(150, 0.6); })
         .on("mouseleave", function () { $(this).find("img").stop(true).fadeTo(150, 1); });

  // Filter with fadeOut / fadeIn
  $(".filter").on("click", function () {
    const f = $(this).data("filter");
    $(".filter").addClass("secondary");
    $(this).removeClass("secondary");
    $thumbs.stop(true, true).fadeOut(250).promise().done(function () {
      (f === "all" ? $thumbs : $thumbs.filter('[data-cat="' + f + '"]')).fadeIn(400);
    });
  });
  $('.filter[data-filter="all"]').removeClass("secondary");

  // Enlarge on click (lightbox)
  $thumbs.on("click", function () {
    $("#lb-img").attr({ src: $(this).data("full"), alt: $(this).data("title") }).css("width", 260);
    $("#lb-cap").text($(this).data("title"));
    $("#lightbox").fadeIn(300);
    $("#lb-img").animate({ width: 640 }, 400);
  });

  function closeBox() { $("#lightbox").fadeOut(300); }
  $("#lightbox").on("click", closeBox);
  $(document).on("keydown", function (e) { if (e.key === "Escape") closeBox(); });
});

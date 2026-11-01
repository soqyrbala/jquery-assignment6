$(document).ready(function () {
  const START = { left: 0, top: 0, width: 80, height: 80, opacity: 1 };

  // Task 8: basic animation (size + position)
  $("#btn-grow").on("click", function () {
    $("#box8").stop(true).animate({ width: 140, height: 140, left: 150, top: 30 }, 800);
  });
  $("#btn-reset8").on("click", function () {
    $("#box8").stop(true).animate(START, 600);
  });

  // Task 9: sequential animations (jQuery queues chained animate calls)
  $("#btn-seq").on("click", function () {
    const $box = $("#box9");
    if ($box.is(":animated")) return;
    $box
      .animate({ left: 200 }, 600)                       // move right
      .animate({ top: 100 }, 600)                        // move down
      .animate({ width: 40, height: 40 }, 600)           // shrink
      .animate({ left: 0, top: 0, width: 80, height: 80 }, 800); // return
  });

  // Task 10: combined animation in one call
  $("#btn-combo").on("click", function () {
    $("#box10").stop(true).animate({ opacity: 0.4, width: 150, height: 150, left: 200, top: 40 }, 1000);
  });
  $("#btn-reset10").on("click", function () {
    $("#box10").stop(true).animate(START, 600);
  });
});

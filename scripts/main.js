$(document).ready(function () {

  $(".word").click(function () {
    // Unhighlight previously selected word
    $(".word").css({
      "background-color": "transparent",
      "border": "0",
    });
    // Hide previous popover
    $(".word").not($(this)).popover('hide');

    if ($(this).attr('data-content')) {
      // Highlight clicked word
      $(this).css({
        "background-color": "#ffff00",
        "border": "2px solid #ffff00",
        "border-radius": "8px"
      });

      // show comments on clicked word
      $(this).popover('show');
    }
  });

  // Init popovers
  $('[data-toggle="popover"]').popover({
    placement: 'bottom',
    html: true,
    trigger: 'manual'
  });

  $(".word").attr("data-content").css({
    "border-bottom": "2px solid #ffff00"
  });
});

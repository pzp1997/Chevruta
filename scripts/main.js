$(document).ready(function() {

  // Initialize popovers
  $(".word").popover({
    trigger: 'manual',
    placement: 'bottom',
    html: true,
    title: 'Add a Comment',
    content: '<form class="form-inline"><input type="text" class="form-control"><button type="submit" class="btn btn-primary">Add</button></form>'
  });

  // Highlight selected word
  $(".word").on("click", function(e) {
    e.stopPropagation();
    if (!$(this).hasClass("highlight")) {
      $(".highlight").popover("hide");
      $(".highlight").removeClass("highlight");
      $(this).popover("show");
      $(this).addClass("highlight");
    }
  });

  // Unhighlight selected word
  $(window).on("click", function(e) {
    if (!$(e.target).closest(".popover").length) {
      $(".highlight").popover("hide");
      $(".highlight").removeClass("highlight");
    }
  });

  // Underline words with comments
  $(".word[data-content]").css({
    'border-bottom': '4px solid #ffff00'
  });

});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".click").click(function() {
    $("#hide-img").toggle();
    $("#show-img").toggle();
  });
});
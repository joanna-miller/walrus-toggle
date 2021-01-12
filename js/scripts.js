$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".click").click(function() {
    $("#hide-img").toggle();
    $("#show-img").toggle();
  });

  $("button#invert").click(function() {
    $("body").removeClass();
    $("body").addClass("invert-background");
  });

  $("button#revert").click(function() {
    $("body").removeClass();
    $("body").addClass("revert-background");
  });
});
$(document).ready(function() {
  $(".quick-add-to-cart-form").find("form").submit(function() {
    $.post($(this).attr("action"), $(this).serialize(), null, "script");
    return false;
  })
});

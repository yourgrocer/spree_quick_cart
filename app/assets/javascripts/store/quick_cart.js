$(document).ready(function() {
  $(".quick-add-to-cart-form").find("form").submit(function() {
    Spree.ajax({
      url: $(this).attr("action"),
      type: "POST",
      data: $(this).serialize(),
      success: function(data, textStatus, jqXHR) {
      },
      error: function(jqXHR, textStatus, errorThrown) {
      }
    });
    return false;
  })
});

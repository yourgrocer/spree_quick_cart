function SpreeQuickCart() {

  var that = this;

  this.initializeQuickCartForm = function() {
    $(".quick-add-to-cart-form").find("form").submit(function() {
      that.current_order_path = $(this).closest(".quick-add-to-cart-form").find('.current-order-path').text();
      Spree.ajax({
        url: $(this).attr("action"),
        type: "POST",
        data: $(this).serialize(),

        success: function(data, textStatus, jqXHR) {
          that.replaceCartInformation();
        },
        error: function(data, textStatus, jqXHR) {
          that.showFlashMessage('There was a problem adding the item to the cart. Please reload the page and try again.', false);
        }
      });
      return false;
    });
  };

  this.showFlashMessage = function(message, success) {
    var messageClass;
    if (success == true){ messageClass = 'success'} else { messageClass = 'error' };
    $('#content').prepend("<div class='flash " + messageClass + "'>" + message + "</div>");
    timeoutID = window.setTimeout(function(){
      $('#content').find(".flash.success").remove();
    }, 3000);
  };

  this.replaceCartInformation = function() {
    Spree.ajax({
      url: that.current_order_path,
      type: "GET",
      cache: false,
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        total = data.display_total;
        items_count = data.total_quantity;
        $('#link-to-cart .cart-info').html("Cart: (" + items_count + ") <span class='amount'>" + total + "</span>")
        that.showFlashMessage('Item added to the cart successfully.', true);
      },
      error: function(data, textStatus, jqXHR) {
        that.showFlashMessage('There was a problem adding the item to the cart. Please reload the page and try again.', false);
      }
    });
  };

}

$(document).ready(function() {
  var quickCart = new SpreeQuickCart();
  quickCart.initializeQuickCartForm();
});

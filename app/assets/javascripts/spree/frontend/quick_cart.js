function SpreeQuickCart() {

  var that = this;

  this.initializeQuickCartForm = function() {
    $(".quick-add-to-cart-form").find("form").submit(function() {
      that.order_path = $(this).closest(".quick-add-to-cart-form").find('.order-path').text();

      that.submitButton = $(this).find("button");
      that.buttonEnabled(false);

      Spree.ajax({
        url: $(this).attr("action"),
        type: "POST",
        data: $(this).serialize(),

        success: function(data, textStatus, jqXHR) {
          that.replaceCartInformation();
        },
        error: function(data, textStatus, jqXHR) {
          that.showFlashMessage('There was a problem adding the item to the cart. Please reload the page and try again.', false);
        },
        complete: function() {
          that.buttonEnabled(true);
        }
      });
      return false;
    });
  };

  this.showFlashMessage = function(message, success) {
    var messageClass;
    if (success == true){ messageClass = 'success'} else { messageClass = 'error' };
    $('#default').prepend("<div class='quick-cart-flash " + messageClass + "'>" + message + "</div>");
    timeoutID = window.setTimeout(function(){
      $('#default').find(".quick-cart-flash.success").remove();
    }, 3000);
  };

  this.replaceCartInformation = function() {
    Spree.ajax({
      url: that.order_path,
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

  this.buttonEnabled = function(enabled) {
    if (enabled == false){
      that.submitButton.attr("disabled", "disabled");
      that.submitButton.text("Adding..");
    } else {
      that.submitButton.removeAttr("disabled");
      that.submitButton.text("Add to cart");
    }
  };

}

$(document).ready(function() {
  var quickCart = new SpreeQuickCart();
  quickCart.initializeQuickCartForm();
});

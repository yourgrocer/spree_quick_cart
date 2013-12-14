function SpreeQuickCart() {

  var that = this;

  this.initializeQuickCartForm = function() {
    $(".quick-add-to-cart-form").find("form").submit(function() {
      Spree.ajax({
        url: $(this).attr("action"),
        type: "POST",
        data: $(this).serialize(),

        success: function(data, textStatus, jqXHR) {
          that.replaceCartInformation();
        },
        error: function(data, textStatus, jqXHR) {
          console.log('error adding to cart' + data)
        }
      });
      return false;
    });
  };

  this.replaceCartInformation = function() {
    Spree.ajax({
      url: '/shop/api/orders/current',
      type: "GET",
      cache: false,
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        total = data.item_total;
        items_count = data.item_count;
        $('#link-to-cart .cart-info').html("Cart: (" + items_count + ") <span class='amount'>$" + total + "</span>")
      },
      error: function(data, textStatus, jqXHR) {
        console.log('error getting order info' + data)
      }
    });
  }

}

$(document).ready(function() {
  var quickCart = new SpreeQuickCart();
  quickCart.initializeQuickCartForm();
});

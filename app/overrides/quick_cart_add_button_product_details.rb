Deface::Override.new(:virtual_path => "spree/products/show",
                     :name => "quick_cart_add_button_product_details",
                     :replace => "[data-hook='cart_form']",
                     :partial => "spree/products/quick_add_to_cart_form",
                     :disabled => false)

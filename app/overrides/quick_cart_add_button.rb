Deface::Override.new(:virtual_path => "spree/shared/_products",
                     :name => "quick_cart_add_button",
                     :insert_after => "#products span.price",
                     :partial => "spree/shared/quick_cart_add_button",
                     :disabled => false)

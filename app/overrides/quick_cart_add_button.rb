Deface::Override.new(:virtual_path => "spree/shared/_products",
                     :name => "quick_cart_add_button",
                     :insert_bottom => "[data-hook='products_list_item']",
                     :partial => "spree/shared/quick_cart_add_button",
                     :disabled => false)

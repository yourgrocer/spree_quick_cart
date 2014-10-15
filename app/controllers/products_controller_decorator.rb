Spree::ProductsController.class_eval do
  before_filter { |c| c.current_order(create_order_if_necessary: true) }
end

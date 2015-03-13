Spree::StoreController.class_eval do

  before_filter :get_current_order

  private

  def get_current_order
    @quick_cart_current_order = current_order(create_order_if_necessary: true, lock: true)
    if @quick_cart_current_order.user && @quick_cart_current_order.user != try_spree_current_user
      raise "order not belonging to current user: #{@quick_cart_current_order.number} - #{try_spree_current_user.id}"
    end
  end
end

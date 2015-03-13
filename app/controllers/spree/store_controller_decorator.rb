Spree::StoreController.class_eval do

  before_filter :get_current_order

  private

  def get_current_order
    @current_order = current_order(create_order_if_necessary: true)
    if @current_order.user && @current_order.user != try_spree_current_user
      raise "order not belonging to current user: #{@current_order.number} - #{try_spree_current_user.id}"
    end
  end
end

Spree::Api::OrdersController.class_eval do

  def current
    if session[:order_id]
      @current_order = Spree::Order.find(session[:order_id])
    else
      @current_order = nil
    end
  end

end

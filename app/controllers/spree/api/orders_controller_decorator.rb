Spree::Api::OrdersController.class_eval do

  include Spree::Core::ControllerHelpers::Order

  def current
    current_order
    render :current
  end

end

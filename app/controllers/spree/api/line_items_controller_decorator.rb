Spree::Api::LineItemsController.class_eval do

  #Changed to allow options to be passed to orders contents
  def create
    variant = Spree::Variant.find(params[:line_item][:variant_id])
    @line_item = order.contents.add(
      variant, 
      params[:line_item][:quantity] || 1,
      line_item_params[:options] || params[:options] || {}
    )

    if @line_item.errors.empty?
      respond_with(@line_item, status: 201, default_template: :show)
    else
      invalid_resource!(@line_item)
    end
  end

end

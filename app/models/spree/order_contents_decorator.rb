Spree::OrderContents.class_eval do

  def add(variant, quantity = 1, options = {})
    line_item = add_to_line_item(variant, quantity, options)
    if options[:quick_add]
      simple_after_add_or_remove(line_item, options)
    else
      after_add_or_remove(line_item, options)
    end
  end

  private

  def simple_after_add_or_remove(line_item, options = {})
    reload_totals
    line_item
  end

end

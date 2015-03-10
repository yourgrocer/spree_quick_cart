module Spree
  module Api            
    class QuickOrdersController < Spree::Api::BaseController

      before_action :find_order

      def show
        authorize! :show, @order, order_token
        respond_with(@order)
      end

      private


      def find_order(lock = false)
        @order = Spree::Order.lock(lock).find_by!(number: params[:id])
      end

      def order_id
        super || params[:id]
      end

    end
  end
end

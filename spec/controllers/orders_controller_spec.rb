require 'spec_helper'

describe Spree::Api::OrdersController do

  describe 'current' do

    before :each do
      session.stub(:[]).with(anything).and_return nil
    end

    it 'should return 200' do
      spree_get :current
      response.status.should == 200
    end

    it 'should assign be empty if session has no order' do
      spree_get :current
      assigns(:current_order).should be_nil
    end

    it 'should return order in session' do
      current_order = double(Spree::Order, id: 666)
      Spree::Order.should_receive(:find).and_return current_order

      session.stub(:[]).with(:order_id).and_return 666

      spree_get :current, format: :json
      assigns(:current_order).should == current_order
    end

  end

end

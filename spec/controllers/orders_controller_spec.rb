require 'spec_helper'

describe Spree::Api::OrdersController do

  let(:user) { mock_model Spree::User, :last_incomplete_spree_order => nil, :has_spree_role? => true, :spree_api_key => 'fake' }
  before :each do
    controller.stub :spree_current_user => user
    controller.stub :check_authorization
  end

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
      controller.should_receive(:current_order).at_least(:once)

      spree_get :current, format: :json
    end

  end

end

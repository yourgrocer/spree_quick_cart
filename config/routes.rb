Spree::Core::Engine.routes.draw do

  namespace :api do
    resources :quick_orders, only: [:show]
  end

end

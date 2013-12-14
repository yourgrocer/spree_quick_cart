Spree::Core::Engine.routes.draw do
  namespace :api do
    resources :orders do
      collection do
        get :current
      end
    end
  end
end

Spree::Core::Engine.routes.draw do
  namespace :api do
    get '/current_order', to: 'orders#current'
  end
end

Spree::Core::Engine.routes.append do
  namespace :api do
    get '/current_order', to: 'orders#current'
  end
end

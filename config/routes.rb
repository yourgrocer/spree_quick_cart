Spree::Core::Engine.routes.draw do
  get "/orders/current" => "orders#current"
end

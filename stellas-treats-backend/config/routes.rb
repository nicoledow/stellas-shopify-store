Rails.application.routes.draw do
  get '/products', to: 'products#index'
  post '/products', to: 'products#create'
end

Rails.application.routes.draw do
  get '/products', to: 'products#index'
  post '/products', to: 'products#create'

  delete '/products/:id', to: 'products#destroy'
end

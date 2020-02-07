Rails.application.routes.draw do
  get '/products', to: 'products#index'
  post '/products', to: 'products#create'

  get '/products/:id', to: 'products#show'
  patch '/products/:id', to: 'products#update'
  delete '/products/:id', to: 'products#destroy'
end

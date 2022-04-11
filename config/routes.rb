Rails.application.routes.draw do
  
  resources :users, only: [:index, :show, :create, :update, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'clients#show'

  # Defines the root path route ("/")
  # root "articles#index"
end

Rails.application.routes.draw do
  resources :weather_apis
  resources :favorites
  resources :user_favs
  
  resources :users, only: [:index, :show, :create, :update, :destroy]

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'clients#show'

  get '/test/:id', to: 'weather_apis#test'
  
  # Defines the root path route ("/")
  # root "articles#index"
end

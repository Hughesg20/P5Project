Rails.application.routes.draw do
  resources :movies
  resources :watch_laters
  resources :favorites
  
  resources :users, only: [:index, :show, :create, :update, :destroy]

  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  
  # Defines the root path route ("/")
  # root "articles#index"
end

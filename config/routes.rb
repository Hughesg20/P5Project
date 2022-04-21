Rails.application.routes.draw do
  resources :movies, only: [:show,:index]
  resources :watch_laters, only: [:show,:index,:destroy,:create]
  resources :favorites, only: [:show,:destroy,:create]
  
  resources :users, only: [:index, :show, :create, :update, :destroy]


  get '/favoritemovies',to: 'favorites#indexmovies'
  get '/showfavoritemovies',to: 'favorites#showindexmovies'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'
  get '/me', to: 'users#show'
  get '/favorites', to: 'favorites#show'
  post '/fav', to: 'favorites#create'
  # Defines the root path route ("/")
  # root "articles#index"
end

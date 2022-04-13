class FavoritesController < ApplicationController
    t.references :weather_api
    t.references :user_fav,through: :user
end

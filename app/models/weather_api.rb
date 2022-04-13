class WeatherApi < ApplicationRecord
    has_many :favorites
    has_many :users, through: :favorites
    has_many :user_favs, through: :users
end

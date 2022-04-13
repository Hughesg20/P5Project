class User < ApplicationRecord
    has_secure_password
    has_many :user_favs
    has_many :favorites
    has_many :weather_apis, through: :favorites
end

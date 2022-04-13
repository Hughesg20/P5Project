class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :weather_api
end

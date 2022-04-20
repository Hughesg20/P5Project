class Movie < ApplicationRecord
    has_many :watch_later
    has_many :favorites
    has_many :users, through: :favorites
end

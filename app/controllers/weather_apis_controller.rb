require 'rest-client'
class WeatherApisController < ApplicationController
  skip_before_action :authorize, only: [:test]
  API_KEY = ENV['weather_api_key']

  def test
    render json: RestClient.get("https://api.weatherbit.io/v2.0/current?key=#{ENV['weather_api_key']}&country=US&postal_code=#{params[:id]}", headers={})
    
  end

end
    
require "test_helper"

class WeatherApisControllerTest < ActionDispatch::IntegrationTest
  setup do
    @weather_api = weather_apis(:one)
  end

  test "should get index" do
    get weather_apis_url, as: :json
    assert_response :success
  end

  test "should create weather_api" do
    assert_difference("WeatherApi.count") do
      post weather_apis_url, params: { weather_api: { name: @weather_api.name, url: @weather_api.url } }, as: :json
    end

    assert_response :created
  end

  test "should show weather_api" do
    get weather_api_url(@weather_api), as: :json
    assert_response :success
  end

  test "should update weather_api" do
    patch weather_api_url(@weather_api), params: { weather_api: { name: @weather_api.name, url: @weather_api.url } }, as: :json
    assert_response :success
  end

  test "should destroy weather_api" do
    assert_difference("WeatherApi.count", -1) do
      delete weather_api_url(@weather_api), as: :json
    end

    assert_response :no_content
  end
end

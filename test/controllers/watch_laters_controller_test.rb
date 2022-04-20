require "test_helper"

class WatchLatersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @watch_later = watch_laters(:one)
  end

  test "should get index" do
    get watch_laters_url, as: :json
    assert_response :success
  end

  test "should create watch_later" do
    assert_difference("WatchLater.count") do
      post watch_laters_url, params: { watch_later: {  } }, as: :json
    end

    assert_response :created
  end

  test "should show watch_later" do
    get watch_later_url(@watch_later), as: :json
    assert_response :success
  end

  test "should update watch_later" do
    patch watch_later_url(@watch_later), params: { watch_later: {  } }, as: :json
    assert_response :success
  end

  test "should destroy watch_later" do
    assert_difference("WatchLater.count", -1) do
      delete watch_later_url(@watch_later), as: :json
    end

    assert_response :no_content
  end
end

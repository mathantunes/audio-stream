require 'test_helper'

class Api::V1::SearchSongcdControllerTest < ActionDispatch::IntegrationTest
  test "should get .." do
    get api_v1_search_songcd_.._url
    assert_response :success
  end

end

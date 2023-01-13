require "test_helper"

class RecLetterControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rec_letter_index_url
    assert_response :success
  end
end

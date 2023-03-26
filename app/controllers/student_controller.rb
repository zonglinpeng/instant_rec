
class StudentController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_student!

  def index
  end

  def create_student_request
    params = JSON.parse(request.body.string)
    params["student_id"] = current_student.student_id
    @rec_letters = RecLetter.create_request(params)
    if @rec_letters.save
      render json: @rec_letters
    else
      render json: @rec_letters.errors
    end
  end

  def get_professor_id_list
    @professor_id_list = Professor.all
    render json: @professor_id_list
  end
end

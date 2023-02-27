require 'json'

class StudentController < ApplicationController
  def index
  end

  def get_professor_id_list
    @professor_id_list = Professor.all
    render json: @professor_id_list
  end

  def get_school_id_list
    @school_id_list = School.all
    render json: @school_id_list
  end

  def create_student_requst
    params = JSON.parse(request.body.string)
    @rec_letter = Student.create_requst(params)
    if @rec_letter.save
      render json: @rec_letter
    else
      render json: @rec_letter.errors
    end
  end

end

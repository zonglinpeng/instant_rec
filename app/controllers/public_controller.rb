class PublicController < ApplicationController

  def is_student_signed_in
    render json: student_signed_in?
  end

  def is_professor_signed_in
    render json: professor_signed_in?
  end
end

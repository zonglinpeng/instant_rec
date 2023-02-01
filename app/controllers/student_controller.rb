require 'json'

class StudentController < ApplicationController
  def index
  end



  def get_professor_id_list
    @professor_id_list = Professor.all
    render json: @professor_id_list
  end

  def create_requst
    params = JSON.parse(request.body.string)
    professor_id = Professor.where(name: rec_letter_params["professor_name"])

    @rec_letter = RecLetter.new({
      "due_date": rec_letter_params["due_date"],
      "professor_id": professor_id # TODO
    })

    if @rec_letter.save
      render json: @rec_letter
    else
      render json: @rec_letter.errors
    end
  end

end

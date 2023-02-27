class Student < ApplicationRecord
  def create_requst(rec_letter_params)
    professor_id = Professor.where(name: rec_letter_params["professor_name"])

    RecLetter.new({
      "due_date": rec_letter_params["due_date"],
      "professor_id": professor_id # TODO
    })

    
  end
end

class RecLetter < ApplicationRecord
  belongs_to :student, optional: true
  belongs_to :professor, optional: true
  class << self
    def create_request(rec_letter_params)
      rec_letter = RecLetter.new(
        due_date: rec_letter_params["due_date"],
        professor_id_id: rec_letter_params["professor_id_id"],
        student_id_id: rec_letter_params["student_id"],
        comment: rec_letter_params["comment"]
      )

    end
  end
end

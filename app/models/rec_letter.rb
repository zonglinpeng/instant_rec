class RecLetter < ApplicationRecord
  class << self
    def create_request(rec_letter_params)
      RecLetter.new(
        due_date: rec_letter_params["due_date"],
        professor_id_id: rec_letter_params["professor_id_id"],
        comment: rec_letter_params["comment"]
      )
    end
  end
end

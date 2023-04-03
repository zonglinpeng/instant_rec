class Professor < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :rec_letters, dependent: :delete_all
  has_one :school
  self.primary_key = :professor_id

  class << self
    def search_rec_letter(id)
      [].tap do |array|
        array << RecLetter.find_by(professor_id_id: id)
      end
    end

    private

    def result(id, &block) # TODO define response message json
      Result.success id, yield
    rescue StandardError => exception
      Rails.logger.error exception
      Result.fail id, exception.message
    end
  end
end

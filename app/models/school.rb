class School < ApplicationRecord
  has_many :rec_letters, dependent: :delete_all
end

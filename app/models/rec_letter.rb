class RecLetter < ApplicationRecord
  def change
    create_table :rec_letters do |t|
      t.datetime :due_date
      t.string :school
      t.string :owner
      t.string :assignee
    end
  end
end

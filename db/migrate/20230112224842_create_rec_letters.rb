class CreateRecLetters < ActiveRecord::Migration[7.0]
  def change
    create_table :rec_letters do |t|
      t.datetime :due_date
      t.string :school
      t.string :owner
      t.string :assignee

      t.timestamps
    end
  end
end

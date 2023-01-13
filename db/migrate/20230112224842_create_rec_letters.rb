class CreateRecLetters < ActiveRecord::Migration[7.0]
  def change
    create_table :rec_letters, id: false, primary_key: [:school_name, :professor_name, :student_name] do |t|
      t.uuid :rec_letter_id, :default => 'gen_random_uuid()'
      t.datetime :due_date
      t.references :school_name, type: :string
      t.references :professor_name, type: :string
      t.references :student_name, type: :string

      t.timestamps
    end
  end
end

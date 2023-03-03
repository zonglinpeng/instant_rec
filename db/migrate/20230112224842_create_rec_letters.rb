class CreateRecLetters < ActiveRecord::Migration[7.0]
  def change
    create_table :rec_letters, :primary_key => [:school_id, :professor_id, :student_id] do |t|
      t.uuid :rec_letter_id, :default => 'gen_random_uuid()'
      t.datetime :due_date
      t.text :comment
      t.string :status, :default => 'create'
      t.references :school_id, type: :uuid
      t.references :professor_id, type: :uuid
      t.references :student_id, type: :uuid

      t.timestamps
    end
  end
end

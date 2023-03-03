class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students, :primary_key => :student_id do |t|
      t.uuid :student_id, :default => 'gen_random_uuid()'
      t.string :student_name

      t.timestamps
    end
  end
end

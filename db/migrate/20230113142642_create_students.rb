class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students, id: false, primary_key: :student_name do |t|
      t.string :student_name

      t.timestamps
    end
  end
end

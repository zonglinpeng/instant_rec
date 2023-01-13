class CreateProfessors < ActiveRecord::Migration[7.0]
  def change
    create_table :professors, id: false, primary_key: :professor_name do |t|
      t.string :professor_name

      t.timestamps
    end
  end
end

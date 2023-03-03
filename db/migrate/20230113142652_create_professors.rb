class CreateProfessors < ActiveRecord::Migration[7.0]
  def change
    create_table :professors, :primary_key => :professor_id do |t|
      t.uuid :professor_id, :default => 'gen_random_uuid()'
      t.string :professor_name

      t.timestamps
    end
  end
end

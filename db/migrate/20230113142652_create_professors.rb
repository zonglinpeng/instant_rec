class CreateProfessors < ActiveRecord::Migration[7.0]
  def change
    create_table :professors, id: false, :primary_key => :professor_id do |t|
      t.uuid :professor_id, :default => 'gen_random_uuid()'
      t.string :professor_name
      t.references :school_id, type: :uuid
      t.timestamps
    end
  end
end

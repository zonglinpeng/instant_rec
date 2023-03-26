class CreateSchools < ActiveRecord::Migration[7.0]
  def change
    create_table :schools, id: false, :primary_key => :school_id do |t|
      t.uuid :school_id, :default => 'gen_random_uuid()'
      t.string :school_name

      t.timestamps
    end
  end
end

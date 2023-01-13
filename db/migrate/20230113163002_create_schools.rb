class CreateSchools < ActiveRecord::Migration[7.0]
  def change
    create_table :schools, id: false, primary_key: :school_name do |t|
      t.string :school_name

      t.timestamps
    end
  end
end

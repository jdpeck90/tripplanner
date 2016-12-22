class CreateHotels < ActiveRecord::Migration[5.0]
  def change
    create_table :hotels do |t|
      t.string :name
      t.references :trip, foreign_key: true
      t.string :rate
      t.string :phone

      t.timestamps
    end
  end
end

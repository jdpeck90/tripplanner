class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.text :description
      t.string :image
      t.string :URL
      t.references :trip, foreign_key: true

      t.timestamps
    end
  end
end

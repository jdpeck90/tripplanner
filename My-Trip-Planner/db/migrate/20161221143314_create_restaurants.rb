class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.references :trip, foreign_key: true
      t.string :address
      t.integer :rating
      t.string :price
      t.string :restaurant_url
      t.text :description

      t.timestamps
    end
  end
end

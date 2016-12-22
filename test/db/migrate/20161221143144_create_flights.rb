class CreateFlights < ActiveRecord::Migration[5.0]
  def change
    create_table :flights do |t|
      t.references :trip, foreign_key: true
      t.integer :price
      t.string :departuredate_time
      t.string :arrivaldate_time
      t.string :class
      t.integer :seats_left
      t.string :departure_airport
      t.string :arrival_airport
      t.string :airline
      t.integer :flight_number

      t.timestamps
    end
  end
end

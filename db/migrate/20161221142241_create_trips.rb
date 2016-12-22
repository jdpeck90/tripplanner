class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.references :user, foreign_key: true
      t.string :hotels
      t.string :events
      t.string :locations
      t.string :flights
      t.string :attractions
      t.string :trip_name
      t.string :day


      t.timestamps
    end
  end
end

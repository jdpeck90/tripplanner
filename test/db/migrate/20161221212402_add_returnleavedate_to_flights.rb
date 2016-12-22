class AddReturnleavedateToFlights < ActiveRecord::Migration[5.0]
  def change
     add_column :flights, :returnleavedate, :string
  end
end

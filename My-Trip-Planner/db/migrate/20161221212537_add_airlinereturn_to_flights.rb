class AddAirlinereturnToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :airlinereturn, :string
  end
end

class AddFlightnumberreturnToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :flightnumberreturn, :string
  end
end

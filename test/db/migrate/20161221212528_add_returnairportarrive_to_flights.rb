class AddReturnairportarriveToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :returnairportarrive, :string
  end
end

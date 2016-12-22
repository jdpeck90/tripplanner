class AddReturnairportdepartToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :returnairportdepart, :string
  end
end

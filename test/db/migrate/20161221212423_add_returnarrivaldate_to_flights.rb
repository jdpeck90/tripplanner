class AddReturnarrivaldateToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :returnarrivaldate, :string
  end
end

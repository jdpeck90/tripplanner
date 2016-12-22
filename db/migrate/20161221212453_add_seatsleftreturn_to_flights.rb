class AddSeatsleftreturnToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :seatsleftreturn, :integer
  end
end

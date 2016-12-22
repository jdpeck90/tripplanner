class RenameFlightsClassColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :flights, :class, :flightclass
  end
end

class AddTripsToUsers < ActiveRecord::Migration[5.0]
  def change
      add_column :users, :trips, :string
    end
end

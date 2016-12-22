class AddClassreturnToFlights < ActiveRecord::Migration[5.0]
  def change
    add_column :flights, :classreturn, :string
  end
end

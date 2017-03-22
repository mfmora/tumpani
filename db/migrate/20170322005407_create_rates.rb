class CreateRates < ActiveRecord::Migration[5.0]
  def change
    create_table :rates do |t|
      t.integer :stars, null: false
      t.string :message, null: false
      t.timestamps
    end
  end
end

class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :attraction_id, null: false
      t.integer :rate_id, null: false
      t.text :message, null: false
      t.timestamps
    end
    add_index :reviews, [:user_id, :attraction_id], unique: true
    add_index :reviews, :rate_id
  end
end

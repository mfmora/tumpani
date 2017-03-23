class CreateBookmarks < ActiveRecord::Migration[5.0]
  def change
    create_table :bookmarks do |t|
      t.integer :attraction_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :bookmarks, [:attraction_id, :user_id], unique: true
  end
end

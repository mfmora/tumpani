class CreateTaggings < ActiveRecord::Migration[5.0]
  def change
    create_table :taggings do |t|
      t.integer :attraction_id, null: false
      t.integer :tag_id, null: false
      t.timestamps
    end
    add_index :taggings, [:attraction_id, :tag_id], unique: true
  end
end

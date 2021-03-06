class CreateAttractions < ActiveRecord::Migration[5.0]
  def change
    create_table :attractions do |t|
      t.string :name, null: false
      t.string :place_id, null: false
      t.string :image_url, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.float :rating
      t.string :street_address
      t.string :city
      t.string :state
      t.timestamps
    end

    add_index :attractions, :place_id, unique: true
  end
end

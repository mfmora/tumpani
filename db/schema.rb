# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170323154038) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attractions", force: :cascade do |t|
    t.string   "name",           null: false
    t.string   "place_id",       null: false
    t.string   "image_url",      null: false
    t.float    "lat",            null: false
    t.float    "lng",            null: false
    t.float    "rating"
    t.string   "street_address"
    t.string   "city"
    t.string   "state"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["place_id"], name: "index_attractions_on_place_id", unique: true, using: :btree
  end

  create_table "bookmarks", force: :cascade do |t|
    t.integer  "attraction_id", null: false
    t.integer  "user_id",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["attraction_id", "user_id"], name: "index_bookmarks_on_attraction_id_and_user_id", unique: true, using: :btree
  end

  create_table "rates", force: :cascade do |t|
    t.integer  "stars",      null: false
    t.string   "message",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",       null: false
    t.integer  "attraction_id", null: false
    t.integer  "rate_id",       null: false
    t.text     "message",       null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["rate_id"], name: "index_reviews_on_rate_id", using: :btree
    t.index ["user_id", "attraction_id"], name: "index_reviews_on_user_id_and_attraction_id", unique: true, using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "attraction_id", null: false
    t.integer  "tag_id",        null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.index ["attraction_id", "tag_id"], name: "index_taggings_on_attraction_id_and_tag_id", unique: true, using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name",        null: false
    t.string   "public_name", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end

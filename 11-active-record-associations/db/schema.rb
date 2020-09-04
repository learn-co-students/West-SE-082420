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

ActiveRecord::Schema.define(version: 2020_09_04_205640) do

  create_table "battles", force: :cascade do |t|
    t.string "location"
    t.integer "campaign_id"
  end

  create_table "campaigns", force: :cascade do |t|
    t.string "title"
    t.string "start_date"
    t.integer "player_cap"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "character_sheets", force: :cascade do |t|
    t.string "name"
    t.string "dnd_class"
    t.string "dnd_race"
    t.integer "ac"
    t.integer "hp"
    t.integer "player_id"
    t.integer "campaign_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "price"
    t.integer "character_sheet_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "monsters", force: :cascade do |t|
    t.string "name"
    t.integer "ac"
    t.integer "hp"
    t.integer "battle_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.text "bio"
    t.integer "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

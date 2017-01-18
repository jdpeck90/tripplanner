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

ActiveRecord::Schema.define(version: 20161222000916) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attractions", force: :cascade do |t|
    t.string   "name"
    t.integer  "trip_id"
    t.string   "address"
    t.integer  "rating"
    t.string   "price"
    t.string   "restaurant_url"
    t.text     "description"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["trip_id"], name: "index_attractions_on_trip_id", using: :btree
  end

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.string   "location"
    t.text     "description"
    t.string   "image"
    t.string   "URL"
    t.integer  "trip_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["trip_id"], name: "index_events_on_trip_id", using: :btree
  end

  create_table "flights", force: :cascade do |t|
    t.integer  "trip_id"
    t.integer  "price"
    t.string   "departuredate_time"
    t.string   "arrivaldate_time"
    t.string   "flightclass"
    t.integer  "seats_left"
    t.string   "departure_airport"
    t.string   "arrival_airport"
    t.string   "airline"
    t.integer  "flight_number"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.string   "returnleavedate"
    t.string   "returnarrivaldate"
    t.string   "classreturn"
    t.integer  "seatsleftreturn"
    t.string   "returnairportdepart"
    t.string   "returnairportarrive"
    t.string   "airlinereturn"
    t.string   "flightnumberreturn"
    t.index ["trip_id"], name: "index_flights_on_trip_id", using: :btree
  end

  create_table "hotels", force: :cascade do |t|
    t.string   "name"
    t.integer  "trip_id"
    t.string   "rate"
    t.string   "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "address"
    t.index ["trip_id"], name: "index_hotels_on_trip_id", using: :btree
  end

  create_table "restaurants", force: :cascade do |t|
    t.string   "name"
    t.integer  "trip_id"
    t.string   "address"
    t.integer  "rating"
    t.string   "price"
    t.string   "restaurant_url"
    t.text     "description"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["trip_id"], name: "index_restaurants_on_trip_id", using: :btree
  end

  create_table "trips", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "hotels"
    t.string   "events"
    t.string   "locations"
    t.string   "flights"
    t.string   "attractions"
    t.string   "trip_name"
    t.string   "day"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_trips_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string   "unconfirmed_email"
    t.integer  "failed_attempts",        default: 0,  null: false
    t.string   "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "trips"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "attractions", "trips"
  add_foreign_key "events", "trips"
  add_foreign_key "flights", "trips"
  add_foreign_key "hotels", "trips"
  add_foreign_key "restaurants", "trips"
  add_foreign_key "trips", "users"
end

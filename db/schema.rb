# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_01_13_163002) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "professors", id: false, force: :cascade do |t|
    t.string "professor_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rec_letters", id: false, force: :cascade do |t|
    t.uuid "rec_letter_id", default: -> { "gen_random_uuid()" }
    t.datetime "due_date"
    t.string "school_name"
    t.string "professor_name"
    t.string "student_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["professor_name"], name: "index_rec_letters_on_professor_name_id"
    t.index ["school_name"], name: "index_rec_letters_on_school_name_id"
    t.index ["student_name"], name: "index_rec_letters_on_student_name_id"
  end

  create_table "schools", id: false, force: :cascade do |t|
    t.string "school_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", id: false, force: :cascade do |t|
    t.string "student_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end

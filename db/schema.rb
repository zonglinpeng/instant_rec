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

ActiveRecord::Schema[7.0].define(version: 2023_03_02_003851) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "professors", id: false, force: :cascade do |t|
    t.uuid "professor_id", default: -> { "gen_random_uuid()" }
    t.string "professor_name"
    t.uuid "school_id_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_professors_on_email", unique: true
    t.index ["reset_password_token"], name: "index_professors_on_reset_password_token", unique: true
    t.index ["school_id_id"], name: "index_professors_on_school_id_id"
  end

  create_table "rec_letters", id: false, force: :cascade do |t|
    t.uuid "rec_letter_id", default: -> { "gen_random_uuid()" }
    t.datetime "due_date"
    t.text "comment"
    t.string "status", default: "create"
    t.uuid "professor_id_id"
    t.uuid "student_id_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["professor_id_id"], name: "index_rec_letters_on_professor_id_id"
    t.index ["student_id_id"], name: "index_rec_letters_on_student_id_id"
  end

  create_table "schools", id: false, force: :cascade do |t|
    t.uuid "school_id", default: -> { "gen_random_uuid()" }
    t.string "school_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "students", id: false, force: :cascade do |t|
    t.uuid "student_id", default: -> { "gen_random_uuid()" }
    t.string "student_name"
    t.uuid "school_id_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.index ["email"], name: "index_students_on_email", unique: true
    t.index ["reset_password_token"], name: "index_students_on_reset_password_token", unique: true
    t.index ["school_id_id"], name: "index_students_on_school_id_id"
  end

end

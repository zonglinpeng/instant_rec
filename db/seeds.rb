# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
datatime_1 = "2023-03-01 00:00:00"
datatime_2 = "2023-02-28 00:00:00"
school_1 = "UIUC"
school_2 = "WPI"
students = Student.create([{ student_name: "student_test_1" }, { student_name: "student_test_2" }])
professors = Professor.create([{ professor_name: "professor_test_1" }, { professor_name: "professor_test_2"}])
schools = School.create([{ school_name: "school_1" }, { school_name: "school_2"}])
RecLetter.create([
  { student_name: students.first, professor_name: professors.first, school_name: schools.first, due_date: datatime_1},
  { student_name: students.last, professor_name: professors.last, school_name: schools.last, due_date: datatime_2}
])

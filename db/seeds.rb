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
id_1 = "yyds_1"
id_2 = "yyds_2"
comment_1 = "Can I get a recommendation, please?"
comment_2 = "Give me that letter ASAP!!!"
schools = School.create([
  {
    school_id: id_1,
    school_name: "UIUC"
  },
  {
    school_id: id_2,
    school_name: "WPI"
  }
])

students = Student.create([
  {
    student_id: "1a",
    student_name: "student_test_1",
    school_id_id: id_2
  },
  {
    student_id: "1b",
    student_name: "student_test_2",
    school_id_id: id_1
  }
])

professors = Professor.create([
  {
    professor_id: "2a",
    professor_name: "professor_test_1",
    school_id_id: id_2
  },
  {
    professor_id: "2b",
    professor_name: "professor_test_2",
    school_id_id: id_1
  }
])

student.first.create([
  {
    student_id_id: "1a",
    professor_id_id: "1b",
    due_date: datatime_1,
    comment: comment_1,
  },
  {
    student_id_id: "2a",
    professor_id_id: "2b",
    due_date: datatime_2,
    comment: comment_2
  }
])

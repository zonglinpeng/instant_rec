Rails.application.routes.draw do
  devise_for :professors
  devise_for :students
  get 'public/is_student_signed_in', to: "public#is_student_signed_in"
  get "public/is_professor_signed_in", to: "public#is_professor_signed_in"

  get 'professor/index'
  get 'student', to: "student#index"
  get 'student/init_request', to: "student#get_professor_id_list"
  get 'student/school_list', to: "school#get_school_id_list"
  put 'student/create_request', to: "student#create_student_request"

  post "rec_letters/create"
  root "rec_letter#index"
  get "rec_letters/student/show", to: "rec_letter_student#show"
  get "rec_letters/professor/show", to: "rec_letter_professor#show"

  post "rec_letters/create"
  delete "rec_letters/:id", to: 'rec_letter#destroy'
end

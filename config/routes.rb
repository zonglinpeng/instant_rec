Rails.application.routes.draw do
  devise_for :professors # users/sign_in, /users/sign_out, and /users/password/new
  devise_for :students
  get 'professor/index'
  get 'student', to: "student#index"
  get 'student/init_request', to: "student#get_professor_id_list"
  get 'student/school_list', to: "student#get_school_id_list"
  put 'student/create_request', to: "student#create_student_request"

  post "rec_letters/create"
  root "rec_letter#index"

  get "api/show", to: "rec_letter#show"
  post "rec_letters/create"
  delete "rec_letters/:id", to: 'rec_letter#destroy'
end

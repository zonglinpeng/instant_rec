Rails.application.routes.draw do
  get 'professor/index'
  get 'student', to: "student#index"
  get 'student/init_request', to: "student#get_professor_id_list"
  post 'student/creat_requst', to: "student#creat_requst"

  post "rec_letters/create"
  root "rec_letter#index"

  get "api/show", to: "rec_letter#show"
  post "rec_letters/create"
  delete "rec_letters/:id", to: 'rec_letter#destroy'
end

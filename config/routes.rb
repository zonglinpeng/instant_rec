Rails.application.routes.draw do
  root "rec_letter#index"

  get "rec_letters/index"
  post "rec_letters/create"
  delete "rec_letters/:id", to: 'rec_letters#destroy'
end

Rails.application.routes.draw do
  root "rec_letter#index"

  get "api/show", to: "rec_letter#show"
  post "rec_letters/create"
  delete "rec_letters/:id", to: 'rec_letter#destroy'
end

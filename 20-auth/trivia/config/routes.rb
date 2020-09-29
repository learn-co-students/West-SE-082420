Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resources :responses

  resources :users, only: [:new, :create]
  resources :login, only: [:new, :create]

  get :'random-question', to: 'responses#new'
  delete "logout", to: "login#destroy", as: "log_out"

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

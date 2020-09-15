Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # resources(:candy_stores, {only: [:index,:show]})

  resources :candy_stores, only: [:index,:show]
  # get '/candy_stores', to: 'candy_stores#index'
  #method url, to: where it is going/what action it will hit
end

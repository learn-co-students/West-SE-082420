Rails.application.routes.draw do
  resources :candy_orders, only: [:new, :create]
  resources :candy_items
  resources :candy_stores, only: [:index, :show, :new, :create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

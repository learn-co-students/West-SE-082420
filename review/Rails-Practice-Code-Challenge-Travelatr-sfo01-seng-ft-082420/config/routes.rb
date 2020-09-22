Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :bloggers, only: [:new,:create,:index, :show]
  resources :destinations, only: [:new,:create,:index, :show]
  resources :posts, only: [:new,:create, :show, :edit, :update]
  get 'posts/:id/likes', to: 'posts#likes', as: 'post_likes'
end

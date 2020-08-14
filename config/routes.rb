Rails.application.routes.draw do
  
  devise_for :users
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :restaurants, param: :slug
      resources :users
      resources :reviews, only: [:create, :destroy]
      
    end
  end

  get '*path', to: 'pages#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  
  devise_for :users
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :restaurants, param: :slug
      resources :reviews, only: [:create, :destroy]
      resources :sessions, only: %i[create] do
        collection do
          post 'password/forgot', to: 'sessions#forgot_password'
          post 'password/reset', to: 'sessions#reset_password'
          get 'me', to: 'sessions#logged_in'
          delete 'logout', to: 'auth#logout'
        end
      end

      resources :registrations, only: %i[create]

    end
  end

  get '*path', to: 'pages#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

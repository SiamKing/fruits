Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :fruits, only: [:index, :create, :destroy, :update]
    end
  end
  root 'home#index'
  match '*path', to: 'home#index', via: :all
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

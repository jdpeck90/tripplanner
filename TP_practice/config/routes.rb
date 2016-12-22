Rails.application.routes.draw do
  root 'home#index'
  resources :trips
  resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  post '/ajaxcalls', to: 'ajaxcalls#index'

    devise_for :users, controllers: { registrations: "registrations"}

end

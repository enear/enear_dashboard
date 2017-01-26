Rails.application.routes.draw do
  root 'dashboard#index'

  get 'dashboard',  to: 'dashboard#index'
  get 'jenkins',    to: 'jenkins#index'
end

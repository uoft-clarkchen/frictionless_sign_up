Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'signup#index'
  post '/email', to: 'signup#apicall'
end

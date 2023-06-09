Rails.application.routes.draw do
  post '/signup', to: "users#register"
  post '/login', to: "users#login"


    # # user
    # post '/users', to: 'users#register'
    # post '/users/login', to: 'users#login'
    # delete '/users/logout', to: 'users#logout'
    # get '/user/login/check', to: 'users#check_login_status'


      # todos
  post '/todos', to: 'todos#create'
  put '/todos/:id', to: 'todos#update'
  delete '/todos/:id', to: 'todos#destroy'
  get '/todos', to: 'todos#index'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

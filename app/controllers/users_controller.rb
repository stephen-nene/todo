class UsersController < ApplicationController
  include ActionController::Cookies

  def register
    user = User.new(user_params)
    if user.save
      app_response message: "Registration successful", status: :created, data: user.as_json(except: :password)
    else
      app_response message: "Registration failed", status: :unprocessable_entity, data: user.errors
    end
  end

  def login
    sql = "username = :username OR email = :email"
    user = User.where(sql, { username: user_params[:username], email: user_params[:email] }).first
    if user&.authenticate(user_params[:password])
      save_user(user.id)
      response.headers['Access-Control-Allow-Origin'] = 'https://todo-front-peach-kappa.vercel.app'
      response.headers['Access-Control-Allow-Credentials'] = 'true'
      app_response(message: 'Login was successful', status: :ok, data: { user: user, session: session[:uid] })
    else
      app_response(message: 'Invalid username/email or password', status: :unauthorized, data: user.errors)
    end
  end




  def logout
    remove_user
    app_response(message: "Logged out successfully", status: :OK)
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end


end




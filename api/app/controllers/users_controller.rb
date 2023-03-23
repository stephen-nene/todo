class UsersController < ApplicationController

  def register
    user = User.create(user_params)
    if user.valid?
      app_response message: "Registration successful", status: :created, data: user
    else
      app_response message: "Registration failed", status: :unprocessable_entity, data: user.errors
    end
  end

  def login
    sql = "username = :username OR email = :email"
    user = User.where(sql, {username: user_params[:username], email: user_params[:email]}).first
    user = User.find_by(username: user_params[:username])
    if user&.authenticate(user_params[:password])
      app_response(message: "Login was successful", status: :OK, data: user)
      else
        app_response(message: "Invalid username/email or password", status: :unauthorized)
      end
  end

  def logout
  end
  
  end

  private

  def user_params
    params.permit(:username, :email, :password)
  end
end

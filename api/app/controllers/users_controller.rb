class UsersController < ApplicationController

  def register
    user = User.new(register_params)
    if user.save
      app_response message: "Registration successful", status: :created, data: user.as_json(except: :password)
    else
      app_response message: "Registration failed", status: :unprocessable_entity, data: user.errors
    end
  end

# authenticate the users password and username
def login
  user = User.find_by(username: login_params[:username])
  if user && user.authenticate(login_params[:password])
    save_user(user.id)
    app_response(message: "Login was successful", status: :OK, data: user.as_json(except: :password))
  else
    app_response(message: "Invalid username or password", status: :unauthorized)
  end
end
  def logout
    remove_user
    app_response(message: "Logged out successfully", status: :OK)
  end

  private

  def register_params
    params.permit(:username, :email, :password)
  end

  def login_params
    params.permit(:username, :password)
  end


end


# if user&.authenticate(user_params[:password])
#   save_user(user.id)
#   app_response(message: "Login was successful", status: :OK, data: user)
# else
#   app_response(message: "Invalid username/email or password", status: :unauthorized)
# end

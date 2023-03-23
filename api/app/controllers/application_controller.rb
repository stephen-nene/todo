class ApplicationController < ActionController::API
  include ActionController::Cookies

  def app_response(message: "success", status: 200, data: nil)
    render json: {
      message: message,
      data: data
    }, status: status
  end

  # store user id in session
  def save_user(id)
    session[:user_id] = id
  end

  # method to delete user id in session
  def remove_user
    session.delete(:user_id)
  end
end

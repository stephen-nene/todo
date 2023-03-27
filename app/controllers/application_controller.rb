class ApplicationController < ActionController::API
  include ActionController::Cookies
  wrap_parameters format: []

  # Set httponly option to true
  before_action :set_cookie_options

  rescue_from StandardError, with: :standard_error

  def app_response(message: "success", status: 200, data: nil)
    render json: {
      message: message,
      data: data
    }, status: status
  end

  # store user id in session
  def save_user(id)
    session[:uid] = id
    session[:expiry] = 6.hours.from_now
  end

  # method to delete user id in session
  def remove_user
    session.delete(:uid)
    session[:expiry] = Time.now
  end

  # check for session expiry
  def session_expired?
    session[:expiry] ||= Time.now
    time_diff = (Time.parse(session[:expiry]) - Time.now).to_i
    unless time_diff > 0
      app_response(message: 'failed', status: 401, data: { info: 'Your session has expired. Please login again to continue' })
    end
  end

  # get logged in user
  def user
    User.find(session[:uid].to_i)
  end

  # rescue all common errors
  def standard_error(exception)
    app_response(message: 'failed', data: { info: exception.message }, status: :unprocessable_entity)
  end

  private

  def set_cookie_options
    cookies.signed[:_session_id] = {
      httponly: true,
      expires: 6.hours.from_now,
      same_site: :none,
      secure: Rails.env.production? # only set secure flag in production environment
    }
  end
end

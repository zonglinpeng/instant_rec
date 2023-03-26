class ApplicationController < ActionController::Base
  # protect_from_forgery except: :sign_in
  before_action :configure_permitted_parameters, if:  :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:professor_name, :student_name, :school_id_id])
  end
end

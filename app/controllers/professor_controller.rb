class ProfessorController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_professor!

  def index
  end

  def get_current_professor
    render json: current_professor
end

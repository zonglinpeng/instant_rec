class ProfessorController < ApplicationController
  # skip_before_action :verify_authenticity_token
  before_action :authenticate_professor!

  def index
  end
end

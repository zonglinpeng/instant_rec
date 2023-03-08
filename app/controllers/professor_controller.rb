class ProfessorController < ApplicationController
  before_action :authenticate_professor!

  def index
  end
end

class SchoolController < ApplicationController

  def get_school_id_list
    @school_id_list = School.all
    render json: @school_id_list
  end
end

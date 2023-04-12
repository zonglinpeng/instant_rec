class RecLetterProfessorController < RecLetterController
  before_action :authenticate_professor!, :get_rec_letters, only: [:show, :edit, :update, :destroy]
  # GET /rec_letters
  # GET /rec_letters.json
  def index
    puts "need auth"
  end

  # GET /rec_letter/1
  # GET /rec_letter/1.json
  def show
    @rec_letter_professor = Professor.search_rec_letter(current_professor[:professor_id])
    render json: @rec_letter_professor
  end

  # GET /rec_letters/new
  def new
    @rec_letter = RecLetter.new
  end

  # GET /rec_letters/1/edit
  def edit
  end

  # POST /rec_letters
  # POST /rec_letters.json
  def create
    @rec_letter = RecLetter.new(rec_letter_params)
    if @rec_letter.save
      render json: @rec_letter
    else
      render json: @rec_letter.errors
    end
  end

  # PATCH/PUT /rec_letters/1
  # PATCH/PUT /rec_letters/1.json
  def update
  end

  # DELETE /rec_letters/1
  # DELETE /rec_letters/1.json
  def destroy
    @rec_letter.destroy

    render json: { notice: 'RecLetter was successfully removed.' }
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def get_rec_letters
      @rec_letters = RecLetter.all.order(due_date: :asc)
    end

    # Only allow a list of trusted parameters through.
    def rec_letters_params
      params.permit(:due_date, :school, :owner, :assignee)
    end
end

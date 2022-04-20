class WatchLatersController < ApplicationController
  before_action :set_watch_later, only: %i[ show update destroy ]

  # GET /watch_laters
  def index
    @watch_laters = WatchLater.all

    render json: @watch_laters
  end

  # GET /watch_laters/1
  def show
    render json: @watch_later
  end

  # POST /watch_laters
  def create
    @watch_later = WatchLater.new(watch_later_params)

    if @watch_later.save
      render json: @watch_later, status: :created, location: @watch_later
    else
      render json: @watch_later.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /watch_laters/1
  def update
    if @watch_later.update(watch_later_params)
      render json: @watch_later
    else
      render json: @watch_later.errors, status: :unprocessable_entity
    end
  end

  # DELETE /watch_laters/1
  def destroy
    @watch_later.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_watch_later
      @watch_later = WatchLater.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def watch_later_params
      params.fetch(:watch_later, {})
    end
end

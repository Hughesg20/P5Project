class FavoritesController < ApplicationController
  skip_before_action :authorize, only: [:show,:index]
  

  # GET /favorites
  def index
    favorites = Favorite.where(user_id:session[:user_id])
    render json: favorites
  end

  #GET /favoritemovies
  def indexmovies
    favoritemovies = Favorite.where(user_id: session[:user_id]).map{|favorite|  user.push(favorite.movie)}

  # GET /favorites/1
  def showindexmovies
    favoritemovies = Favorite.where(user_id: session[:user_id][id: params[:id]].movie)

  # GET /favorites/1
  def show
    favorites = Favorite.where(user_id:session[:user_id][id: params[:id]])
    render json: favorites
  end

  # POST /favorites
  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render json: @favorite, status: :created, location: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorites/1
  def update
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorites/1
  def destroy
    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.fetch(:favorite, {})
    end
end

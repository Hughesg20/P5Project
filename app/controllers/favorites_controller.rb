class FavoritesController < ApplicationController
  skip_before_action :authorize, only: [:show,:index,:create]
  

  # GET /favorites
  def index
    favorites = Favorite.where(user_id:session[:user_id])
    render json: favorites
  end

  #GET /favoritemovies
  def indexmovies
    favoritemovies = []
    Favorite.where(user_id: session[:user_id]).map{|favorite|  favoritemovies.push(favorite.movie)}
    render json: favoritemovies
  end
  # GET /favorites/1
  def showindexmovies
    favoritemovie = Favorite.where(user_id: session[:user_id][id: params[:id]].movie)
    render json: favoritemovie
  end
  # GET /favorites/1
  def show
    favorites = Favorite.where(user_id:session[:user_id][id: params[:id]])
    render json: favorites
  end

  # POST /favorites
  def create
    movie = Movie.find_by(favorite_params).id
    favorite = Favorite.create!(user_id: session[:user_id],movie_id: movie)

  end

  # PATCH/PUT /favorites/1
 

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
      params.permit(:mid)
    end
end

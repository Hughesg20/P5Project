class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :show]

    def index
        users = User.all
        render json: user => user, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end
    

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    
    def update
        user = User.find_by(params[:id])
        client.update!(client_params)
        render json: user, status: :ok
    end

    def destroy
        user = User.find_by(params[:id])
        client.destroy
        head :no_content
    end


    private

    def user_params
        params.permit(:first_name, :last_name, :username, :email, :password)
    end

end

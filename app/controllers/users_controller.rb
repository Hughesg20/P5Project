class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, only: :username, status: :ok
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
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

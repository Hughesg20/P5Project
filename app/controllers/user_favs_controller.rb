class UserFavsController < ApplicationController
    def create
        zip = UserFav.create!(ufparams,user_id:)
        render json: zip, status: :created
    end

    private

        def ufparams
            params.permit(:zipcode)

end

class UsersController < ApplicationController
    skip_before_action :fetch_user, only:[:new, :create]

    def new
        @user = User.new
    end 

    def create
        @user = User.create(user_params)
        if @user.valid?
            session[:user_id] = @user.id
            redirect_to new_response_path
        else 
            redirect_to new_user_path
        end
    end 
    private 

    def user_params
        params.require(:user).permit(:username, :password)
    end
end

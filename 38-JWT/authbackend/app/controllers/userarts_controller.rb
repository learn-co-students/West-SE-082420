class UserartsController < ApplicationController
before_action :authorized, only:[:create]

 
  def create
    userart = Userart.new(user_id:logged_in_user.id, art_id: params[:art_id])
    if userart.save
        render json: {user: UserSerializer.new(@user)}
    else
       render json: @userart.errors
    end 
  end



  private


    def userart_params
      params.require(:userart).permit(:art_id, :user_id)
    end
end

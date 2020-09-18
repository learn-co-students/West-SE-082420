class CandyItemsController < ApplicationController
    before_action :get_candy_item, only: [:show, :edit, :update, :destroy]
   
    def index
        @candy_items = CandyItem.all
    end 

    def show
    end 

    def create 
        @candy_item = CandyItem.create(candy_params)
        redirect_to @candy_item
    end 

    def new
        @candy_item = CandyItem.new
        @candy_stores = CandyStore.all
    end 


    def edit
        @candy_stores = CandyStore.all
    end 
    
    def update
        @candy_item.update(candy_params)
        redirect_to candy_item_path(@candy_item)
    end 

    def destroy
        @candy_item.destroy()
        redirect_to candy_items_path

    end 

    private
    
    def get_candy_item
        @candy_item = CandyItem.find(params[:id])
    end

    def candy_params    
      params.require(:candy_item).permit(:name, :price, :candy_store_id)
    end 


end

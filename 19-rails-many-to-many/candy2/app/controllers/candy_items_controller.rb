class CandyItemsController < ApplicationController
   before_action :get_candy_item, only: [:show, :edit, :update, :destroy]
    def index
        @candy_items = CandyItem.all
    end 

    def show
    end 

    def new
        @candy_item = CandyItem.new
        @candy_stores = CandyStore.all
    end 

    def create 
        @candy_item = CandyItem.create(candy_params)
        if @candy_item.valid?
            redirect_to @candy_item
        else 
            flash[:errors] = @candy_item.errors.full_messages
            redirect_to new_candy_item_path
        end
              
    end 

    def edit
    end 

    def update
    end 

    def destroy
    end 

    private 

    def get_candy_item 
        @candy_item = CandyItem.find(params[:id])
    end 

    def candy_params
        params.require(:candy_item).permit(:name, :price, :candy_store_ids => [])
    end 


end

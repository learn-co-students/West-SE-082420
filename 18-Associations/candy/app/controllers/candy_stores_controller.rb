class CandyStoresController < ApplicationController
    before_action :get_candy_store, only: [:show, :edit, :update, :destroy, :toggle_open]
    def index
        @candy_stores = CandyStore.all
    end 


    def new
        @candy_store = CandyStore.new()
    end 

    def create
        @candy_store = CandyStore.create(candy_params)
        redirect_to candy_store_path(@candy_store)
    end 

    def update
        @candy_store.update(candy_params)
        redirect_to candy_store_path(@candy_store)
    end 

    def destroy
        @candy_store.destroy
        redirect_to candy_stores_path
    end 

    def toggle_open
        @candy_store.update(open:!@candy_store.open)
        redirect_to candy_store_path(@candy_store)    
    end 


    private 

    def get_candy_store 
        @candy_store = CandyStore.find(params[:id]) 
    end 


    def candy_params
        params.require(:candy_store).permit(:name, :location)
    end 

end 
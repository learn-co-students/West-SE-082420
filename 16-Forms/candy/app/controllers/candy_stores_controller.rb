class CandyStoresController < ApplicationController
    def index
        
        @candy_stores = CandyStore.all
    end 

    def show
        @candy_store = CandyStore.find(params[:id]) 
    end 

    def edit
        @candy_store = CandyStore.find(params[:id]) 

    end 

    def update
        
        @candy_store = CandyStore.find(params[:id]) 
        @candy_store.update(candy_params)
        redirect_to candy_stores_path

    end

    def toggle_open
        @candy_store = CandyStore.find(params[:id])
        open_val = !@candy_store.open
        @candy_store.update(open:open_val)
        redirect_to candy_stores_path
    end

    private 
    

    def candy_params
        params.require(:candy_store).permit(:name, :location)
    end 


end 
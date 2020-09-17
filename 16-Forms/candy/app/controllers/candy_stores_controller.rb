class CandyStoresController < ApplicationController
    def index
        
        @candy_stores = CandyStore.all
    end 

    def show
        @candy_store = CandyStore.find(params[:id]) 
    end 

  
end 
class CandyStoresController < ApplicationController
    def index
        @candy_stores = CandyStore.all
    end 

    def show
        byebug
        @candy = CandyStore.find(params[:id])
    end 
end 
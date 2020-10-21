class CatsController < ApplicationController
    def index
        cats = Cat.all 
        render json: cats
    end 

    def show
        cat = Cat.find(params[:id])
        render json: cat
    end 

    def create
        
        job = Job.find_or_create_by(name: params[:job_name])
        
        cat = Cat.create(
            name: params[:name],
            image: params[:image],
            catchphrase: params[:catchphrase],
            funds: params[:funds].to_i,
            job: job
        )
        render json: cat
    end 

    def destroy
        cat = Cat.find(params[:id])
        cat.destroy
        render json: {message: "cat removed"}
    end 
end

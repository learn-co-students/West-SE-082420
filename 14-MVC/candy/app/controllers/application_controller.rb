require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  get "/candies" do
    @candies = Candy.all
    erb :candies
  #   "<head>
  #   <body>
  #     #{candies}
  #   <body>
  # </head>"
  end 

end

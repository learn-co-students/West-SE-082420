class Player  < ActiveRecord::Base
    has_many :character_sheets
    has_many :campaings, through: :character_sheets


    # def campaings
    #    cs = CharacterSheets.all.select{|sheet| sheet.player == self}
    #    cs.map{|sheet| sheet.campaing}
    # end 

    # Create
        #Player.new
        #Player.save
        #Player.create
    # Read 
        #Player.all
        #Player.first
        #Player.last

        #Player.find
        #Player.find_by
        #Player.where
        #Player.all.pluck

    # Update 
        #Player#save
        #Player#update
        #Player.update
    # Delete 
        #Player#destroy
        #Player.destroy_all

end 
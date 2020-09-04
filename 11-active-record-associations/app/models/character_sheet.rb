class CharacterSheet < ActiveRecord::Base
    belongs_to :player
    belongs_to :campaign
    
end
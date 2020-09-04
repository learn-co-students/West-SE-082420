class Campaign < ActiveRecord::Base
    has_many :character_sheets
    has_many :players, through: :character_sheets
end
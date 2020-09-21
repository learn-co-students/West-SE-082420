class CandyStore < ApplicationRecord
    has_many :candy_orders
    has_many :candy_items, through: :candy_orders
end

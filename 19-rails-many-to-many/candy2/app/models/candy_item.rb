class CandyItem < ApplicationRecord
    has_many :candy_orders
    has_many :candy_stores, through: :candy_orders

    validates :name, presence: true
    validates :price, :numericality => {:greater_than_or_equal_to => 0}
end

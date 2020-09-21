class CandyOrder < ApplicationRecord
  belongs_to :candy_store
  belongs_to :candy_item
end

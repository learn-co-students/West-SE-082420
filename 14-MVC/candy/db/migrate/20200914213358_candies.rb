class Candies < ActiveRecord::Migration
  def change
    create_table :candies do |t|
      t.string :name
      t.string :flavor
      t.string :company 
      t.integer :price
    end 
  end
end

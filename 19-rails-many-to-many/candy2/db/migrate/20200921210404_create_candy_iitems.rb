class CreateCandyIitems < ActiveRecord::Migration[6.0]
  def change
    create_table :candy_iitems do |t|
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end

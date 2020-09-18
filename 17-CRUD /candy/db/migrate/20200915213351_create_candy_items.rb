class CreateCandyItems < ActiveRecord::Migration[6.0]
  def change
    create_table :candy_items do |t|
      t.string :name
      t.integer :price
      t.belongs_to :candy_store, null: false, foreign_key: true

      t.timestamps
    end
  end
end

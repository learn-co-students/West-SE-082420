class CreateCandyStores < ActiveRecord::Migration[6.0]
  def change
    create_table :candy_stores do |t|
      t.string :name
      t.string :location
      t.boolean :open

      t.timestamps
    end
  end
end

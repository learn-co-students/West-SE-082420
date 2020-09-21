class CreateCandyOrders < ActiveRecord::Migration[6.0]
  def change
    create_table :candy_orders do |t|
      t.belongs_to :candy_store, null: false, foreign_key: true
      t.belongs_to :candy_item, null: false, foreign_key: true

      t.timestamps
    end
  end
end

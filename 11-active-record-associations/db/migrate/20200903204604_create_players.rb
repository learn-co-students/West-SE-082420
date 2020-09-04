class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name
      t.text :bio
      t.integer :phone

      t.timestamps
    end
  end
end

class CreateMonsters < ActiveRecord::Migration[5.2]
  def change
    create_table :monsters do |t|
      t.string :name
      t.integer :ac 
      t.integer :hp
      t.integer :battle_id
    end 
  end
end

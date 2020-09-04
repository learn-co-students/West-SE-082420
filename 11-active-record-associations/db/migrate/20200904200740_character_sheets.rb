class CharacterSheets < ActiveRecord::Migration[5.2]
  def change
    create_table :character_sheets do |t|
      t.string :name
      t.string :dnd_class
      t.string :dnd_race
      t.integer :ac 
      t.integer :hp
      t.integer :player_id 
      t.integer :campaign_id
      t.timestamps
    end 
  end
end

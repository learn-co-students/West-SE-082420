class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.integer :user_id
      t.integer :note_id
      
      t.timestamps
    end
    
  end
end

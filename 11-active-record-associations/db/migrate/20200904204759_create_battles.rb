class CreateBattles < ActiveRecord::Migration[5.2]
  def change
    create_table :battles do |t|
      t.string :location 
      t.integer :campaign_id
    end
  end
end

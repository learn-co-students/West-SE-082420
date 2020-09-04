class CreateCampaigns < ActiveRecord::Migration[5.2]
  def change
    create_table :campaigns do |t|
      t.string :title
      t.string :start_date
      t.integer :player_cap

      t.timestamps
    end
  end
end

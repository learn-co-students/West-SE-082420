class CreateArtists < ActiveRecord::Migration[6.0]
  def change
    create_table :artists do |t|
      t.string :name
      t.string :hometown
      t.string :birthday
      t.string :deathday

      t.timestamps
    end
  end
end

class CreateArts < ActiveRecord::Migration[6.0]
  def change
    create_table :arts do |t|
      t.string :title
      t.string :image
      t.string :slug
      t.string :date
      t.integer :votes
      t.belongs_to :artist, null: false, foreign_key: true

      t.timestamps
    end
  end
end

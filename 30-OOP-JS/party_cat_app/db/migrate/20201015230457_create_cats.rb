class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name
      t.string :image
      t.string :catchphrase
      t.belongs_to :job, null: false, foreign_key: true
      t.integer :funds

      t.timestamps
    end
  end
end

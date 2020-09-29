class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :content
      t.integer :correct_answer_id

      t.timestamps
    end
  end
end

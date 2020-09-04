# SWBATs 
- Explain how ActiveRecord works for non-related models
- Implement one-to-many relationships using ActiveRecord has_many and belongs_to
- Implement many-to-many relationships using ActiveRecord has_many, :through
- Describe the methods that the relationship macros add to a model
- Practice looking up library documentation
- Specifically, looking up documentation for ActiveRecord
Migrations
- Implement Association Macros
- Demonstrate `seeds.rb`
- Cover Group projects for next week

* Relationships 
    - one to many relationship 
    ![one to many](https://guides.rubyonrails.org/images/association_basics/belongs_to.png) {image source: David Heinemeier Hansson, Active Record Associations, RailsGuides, https://guides.rubyonrails.org/images/association_basics/belongs_to.png}

    - many to many relationship 
    ![one to many](https://guides.rubyonrails.org/images/association_basics/has_many_through.png) {image source: David Heinemeier Hansson, Active Record Associations, RailsGuides, https://guides.rubyonrails.org/images/association_basics/belongs_to.png}

## Active Record Setup CheckList (Breakout rooms 10min)
1. What are the steps to set up a table called CharacterSheets that has a name(str), dnd_class(str), dnd_race(str), ac(int), hp(int)
    1. rake db:create_migration
    2. build table
    ```
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
    ```
    3. rake db:migrate 
    4. build model 


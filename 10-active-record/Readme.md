# Intro to Active Record 
# SWBATs 
- Implement ActiveRecord in their projects
- Practice creating migrations for updating the database structure
- Explain how rake works and how to run rake tasks
- Distinguish between and define “model”, “class”, and “table”
- Practice with ActiveRecord::Base instance and class methods
- Perform persistent CRUD actions on one model using ActiveRecord

# How to build an Active Record App
1. Pick a domain 
```
Players -< CharacterSheet >- Campaign 

```
2. Create a migration (a set of instructions for manipulation the structure of the DB)
```
rake db:create_migration NAME=create_players

```

3. Write migration 
```
   create_table :players do |t|
      t.string :name
      t.text :bio
      t.integer :phone 

      t.timestamps
    end
```

4. Run the migration and check migration

```
rake db:migrate 
```

5. Create model and connect to active record
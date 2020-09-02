# Intro to ORMs (Object Relational Mappers)

## SWBAT
- Define Object Relational Mapper (ORM)
- Distinguish between ORM and SQL
- Explain how the `sqlight` gem works as a driver or wrapper around SQL
- Explain how the sqlite gem works as a driver or wrapper around SQL
- Demonstrate that ORMs are the patter connecting scripting languages and Databases 
- Perform persistent CRUD actions on two separate models
- Understand bow to instantiate objects using Mass Assignment 

* What is an ORM
Object - representational of a real world thing in code
Relational - Relational Databases 
Mapper - .map changing one thing to another 

* How do these SQL concepts translate to OOP
 * table -> class
 * row -> instance 
 * column -> attr_ 



# CRUD REVIEW

A tweet belongs to a user and has some message content - must have user_id

The belongs_to must have a user_id on it

A user has a username, and has many tweets

A tweet can have many tags and a tag can have many tweets



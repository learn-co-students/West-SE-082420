
# ruby-one-to-many-relationships

## SWBATs

* Implement one object to many objects relationship
  * One object has many objects
  * One object belongs to another object
* Practice passing custom objects as arguments to methods
* Demonstrate single source of truth
* Infer type of method \(class or instance\) through naming conventions

### Review of OOP 
* How do you make classes in Ruby?
* What does `initialize` do for your Ruby classes 
* What is the difference between class and instance methods 
* What do the `attr_` macros do
    - `attr_reader`
    - `attr_writer`
    - `attr_accessor`
* what is `self` in the context of a ruby class

## Define 
* Model - representation of something -> class
* Domain - area of expertise, domain name -> google.com, twitter.com
* Domain modeling 
    - Youtube
    - Videos, Comments
    - Videos have Comments
    - Comment belongs to Video 
* Relationships 
    - one to many relationship 
    ![one to many](https://guides.rubyonrails.org/images/association_basics/belongs_to.png) {image source: David Heinemeier Hansson, Active Record Associations, RailsGuides, https://guides.rubyonrails.org/images/association_basics/belongs_to.png}


## DEMO Deliverables 
* Create a User class. The class should have these methods:
  * `User#initialize` which takes a username
  * `User#username` reader method
  * `User#tweets` that returns an array of Tweet instances
  * `User#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user
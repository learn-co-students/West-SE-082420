require 'pry'
require_relative 'models/users.rb'
require_relative 'models/comments.rb'
require_relative 'models/tweets.rb'


coffee_dad = User.new('coffee dad', 1, 'just a coffee liking dad')
tea_dad = User.new('tea dad', 2, 'tea is supeiror to coffee')

tweet1 = Tweet.new('coffeeeeeeeeeeeeeeee time', coffee_dad)
tweet2 = Tweet.new('Java', coffee_dad)
tweet3 = Tweet.new('Its pumkin-spice time!!', coffee_dad)
tweet4 = Tweet.new('ttttt', tea_dad)

c1 = Comment.new('good tweet', tweet1)
c2 = Comment.new('I love coffee 2', tweet2)
c3 = Comment.new('coffee4life', tweet2)
c4 = Comment.new('t', tweet4)

# results = []
# Comment.all [c1, c2, c3, c4]
# Comment.all.select 
# c2.tweet = tweet1 
# results << tweet1


binding.pry
0
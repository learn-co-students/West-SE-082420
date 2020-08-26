#username, id, bio
require 'pry'

class User
    attr_reader :username, :id
    attr_accessor :bio, :admin, :tweet

    @@all = []
    def initialize(username,id,bio)
        @username = username
        @id = id
        @bio = bio
        @admin = false 
        @@all << self
    end 

    def admin=(boo)
        @admin = boo
    end 

    def self.all
        @@all
    end 

    def post_tweet(message)
        @tweet << Tweet.new(message,self)
    end 

    def tweets
        Tweet.all.select{|tweet| tweet.user == self}
        # Tweet.all.select do |tweet|
        #     puts tweet.username
        #     if tweet.user == self 
        #         true
        #     end 
        # end
    end 
end 
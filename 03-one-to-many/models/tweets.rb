class Tweet
    attr_reader :user
    attr_accessor :message

    @@all = []
    def initialize(message, user)
        @user = user
        @message = message
        @@all << self
    end 

    def self.all
        @@all
    end 

    def username
        self.user.username
    end 

    def comments 
       comments =  Comment.all.select{|item|
        puts item.tweet.message
        puts self.message
        item.tweet == self
       }

       comments
    end 

end 
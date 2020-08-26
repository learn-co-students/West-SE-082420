class Comment
    attr_reader :tweet
    attr_accessor :message

    @@all = []
    def initialize(message, tweet)
        @tweet = tweet
        @message = message
        @@all << self
    end 

    def self.all
        @@all
    end 

   
end 
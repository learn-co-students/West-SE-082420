class Tweet
  attr_accessor :message, :user_id
  # @@all = []

  def initialize(message, user_id)
    @message = message
    @user_id = user_id
    # @@all << self
  end


  def self.all
    sql = "SELECT * FROM tweets;"
    tweets_array = DB[:conn].execute(sql)
    tweets_array.map!{|tweet|t =Tweet.new(tweet["message"], tweet["user_id"])}
  end

  def self.users_and_tweets
    sql = "SELECT name, message FROM users
      JOIN tweets
      ON tweets.user_id = users.id;"
      DB[:conn].execute(sql)
  end 

  def self.get_user(username)
    sql = "SELECT * FROM users WHERE name = '#{username}'"
    DB[:conn].execute(sql)
  end 

  def save
    # sql = "INSERT INTO tweets (message, user_id) VALUES('#{self.message}', #{self.user_id});"
    sql = "INSERT INTO tweets (message, user_id) VALUES(?, ?);"
    DB[:conn].execute(sql, self.message, self.user_id)
  end 



end

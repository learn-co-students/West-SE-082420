# this will require all the gems in our Gemfile
require 'bundler'
Bundler.require

# set up our database connection 
# and save to a constant so we can access it
DB = {
  conn: SQLite3::Database.new('db/twitter.db')
}

#configures the databse to return the results as a hash
DB[:conn].results_as_hash = true

#rquire our model files
require_relative '../lib/tweet.rb'
require_relative '../lib/tweets_app.rb'

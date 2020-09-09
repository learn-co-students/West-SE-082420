require 'rest-client'
require 'pry'
require 'json'

def welcome 
    puts "Welcome to Book Finder"
end 

def get_user_input
    puts "What book do you want to search for?"
    book = gets.chomp
    do_search(book)
end 

def do_search(book)
    res = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{book}"
    json = JSON.parse(res)["items"]
    # puts json[0]["volumeInfo"]["title"]
    puts json.map.each_with_index{|value, key| "#{key}. #{value["volumeInfo"]["title"]}"}
end 

welcome
get_user_input

binding.pry
0
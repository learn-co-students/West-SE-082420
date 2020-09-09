require_relative "./config/environment"
require_relative "./app/models/user.rb"
require_relative "./app/models/note.rb"
require_relative "./app/models/entry.rb"

def welcome 
    puts "Welcome to Notes"
end 

def get_user_input 
    puts "What is your username?"
    name = gets.chomp
    get_user(name)
end 

def print_note(user)
    user.notes.each{|note|
        puts "name: #{note.name}"
        puts "description: #{note.description}"
        puts "**********************"
    }
end 

def get_user(user_name)
    user = User.find_by(name:user_name)
    if user
        print_note(user)
    else
        puts "Sorry, there is no user with that name, try again"
        get_user_input
    end 

end 



welcome
get_user_input


binding.pry
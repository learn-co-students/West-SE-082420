class Animal 
    attr_reader :name
    attr_accessor :mood
    def initialize(name, mood="nervous")
        @name = name
        @mood = mood
    end 

    def speak
        puts 'This animal speaks like this:'
    end 
end 
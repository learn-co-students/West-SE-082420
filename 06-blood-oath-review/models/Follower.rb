class Follower
    attr_reader :name, :age, :life_motto
    @@all = []
    def initialize(name, age, life_motto)
        @name = name
        @age = age
        @life_motto = life_motto
        @@all << self 
    end

    def self.all
        @@all
    end 

    def cults
        BloodOath.all.select{|oath| oath.follower == self }
    end 

    def join_cult(cult, date)
        BloodOath.new(cult,self,date)
    end

    def self.of_a_certain_age(age)
        self.all.select{|follower| follower.age >= age}
    end 
end
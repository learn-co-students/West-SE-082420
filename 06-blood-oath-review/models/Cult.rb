class Cult
    attr_reader :name, :location, :founding_year, :slogan 
    @@all = []
    def initialize(name, location, founding_year, slogan)
        @name = name
        @location = location
        @founding_year = founding_year
        @slogan = slogan
        @@all << self
    end 

    def self.all
        @@all
    end 

    def recruit_follower(follower, date)
        BloodOath.new(self,follower, date)
    end 

    def get_blood_oaths
        BloodOath.all.select{|oath| oath.cult == self}
    end 

    def cult_population
        self.get_blood_oaths.length
    end 

    def self.find_by_name(name)
        self.all.find{|cult| cult.name == name }
    end

    def self.find_by_location(location)
        self.all.select{|cult| cult.location == location }
    end

    def self.find_by_founding_year(founding_year)
        self.all.select{|cult| cult.founding_year == founding_year }
    end

    def average_age
    #    ages = self.get_blood_oaths.map{|oath| oath.follower.age}
    #    ages.inject{|sum, elm| sum + elm}.to_f/ages.length
    self.get_blood_oaths.inject(0){|sum, elm| sum + elm.follower.age}.to_f/self.get_blood_oaths.length
    end 

    def my_followers_mottos
        self.get_blood_oaths.map{|oath| oath.follower.life_motto}
    end 

    def self.least_popular
        arr = self.all.min_by{|cult|cult.cult_population}

        # least_popular = self.all[0]
        # self.all.each{|cult|
        #     if cult_population < least_popular.cult_population
        #         least_popular = cult
        #     end 
        # }
        # least_popular


    end 

    def self.locations 
         self.all.map{|cult| cult.location}
    end

    def self.most_common_location
        locations = self.locations
        counts = Hash.new(0)
        locations.each { |location| counts[location] += 1 }
        common_location = counts.max_by{|k,v| v}

        # self.all.inject(Hash.new(0)) { |total, e| total[e.location] += 1 ;total}.max_by{|k,v| v}

        binding.pry
    end 
    #The most common location 
    #where are my locations > cult obj > cult.all
    #[{Seattle},{NY},{SF},{Seattle}]
    #seattle > 2, NY > 1, Sf > 1 
    #{seattle=>2, NY=>1, SF=>1}
    
end 
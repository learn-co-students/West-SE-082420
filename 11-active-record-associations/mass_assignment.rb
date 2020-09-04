require_relative "config/environment"

class Npc
  attr_accessor :name, :age, :location, :dnd_class, :race

  def initialize(arg_hash)
      arg_hash.each do |key, value|
        self.send("#{key}=", value)
      end
  end 

  # def initialize(name, age, location, dnd_class, race)
  #   @name = name
  #   @age = age
  #   @location = location
  #   @dnd_class = dnd_class
  #   @race = race
  # end 

end

ivan = Npc.new(age:36, name:"Ivan", dnd_class:"Bard", race:"Human", location:"Waterdeep")
rictavio = Npc.new(name:'rictavio', age:87, dnd_class:"Ranger", race:"Elf", location:"Vanderfild")



binding.pry
0
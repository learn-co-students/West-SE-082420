require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

c1 = Cult.new('cult of ix', 'Seattle', 2015, 'Did you google it?')
c2 = Cult.new('Flatiron', 'New York', 2012, 'learn love code')
c3 = Cult.new('Rose', 'New York', 2012, 'mow')


f1 = Follower.new('Rose', 9, 'Cats should eat plants')
f2 = Follower.new('Hal', 90, 'ahhhhhhhhhhhhh ...?')
f3 = Follower.new('Adam',83, 'Try it out!')

bo1 = BloodOath.new(c1, f1, '2020-08-30')
bo1 = BloodOath.new(c1, f2, '2020-08-30')

binding.pry

puts "Mwahahaha!" # just in case pry is buggy and exits
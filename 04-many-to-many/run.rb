require 'pry'
require_relative 'models/doctor.rb'
require_relative 'models/patient.rb'
require_relative 'models/appointment.rb'

doctor_tom = Doctor.new('Tom', 'dr. school graduate', 'family medicine')
doctor_plays_one_on_tv = Doctor.new('Plays one on TV', 'Im not a real doctor I just play one on TV', 'brain surgery')

 p1 = Patient.new('rose', 9, false)
 p2 = Patient.new('ix', 30, true)
 p3 = Patient.new('hal', 30, true)
 p4 = Patient.new('ted', 48, false)

 a1 = Appointment.new(doctor_tom, p1, 'broken leg')
 a4 = Appointment.new(doctor_tom, p1, 'scurvy')
 a2 = Appointment.new(doctor_tom, p2, 'paper cut')
 a3 = Appointment.new(doctor_plays_one_on_tv, p1, 'concussion')


 binding.pry
 0
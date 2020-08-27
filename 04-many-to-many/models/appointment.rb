class Appointment
    attr_accessor :doctor, :patient, :reason_for_vist
    @@all = []
    def initialize(doctor, patient, reason_for_vist)
        @doctor = doctor
        @patient = patient
        @reason_for_vist = reason_for_vist
        @@all << self
    end 

    def self.all
        @@all
    end 
    
end

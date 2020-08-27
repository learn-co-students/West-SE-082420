class Doctor 
    attr_reader :name, :specialty
    attr_accessor :bio, :accepting_new_clients
    @@all = []
    def initialize(name,bio, specialty)
        @name = name
        @bio = bio
        @specialty = specialty
        @accepting_new_clients = true
        @@all << self
    end 

    def appointments 
       Appointment.all.select{|appointment|  appointment.doctor == self}
    end 

    def patients
        # self.appointments.map{|appointment| appointment.patient.name}.uniq
        # self 
        #  Appointment.all.select{|appointment|  appointment.doctor == self}
        # [...].uniq

        self.appointments.map do |appointment| 
            appointment.patient.name 
        end.uniq

    end 
  

    def self.all
        @@all
    end 
    
end
class Patient 
    attr_reader :name
    attr_accessor :age, :insurance
    @@all = []
    def initialize(name,age, insurance)
        @name = name
        @age = age
        @insurance = insurance
        @@all << self
    end 

    def make_appointment(doctor, reason_for_vist)
       app =  Appointment.new(doctor, self, reason_for_vist)
       binding.pry
    end 

    def appointments 
       Appointment.all.select{|appointment| appointment.patient == self}
       # result = []
       # 'doctor plays one on tv'
       # [{},{},{}]
       # [{x}, {}, {}]
       # [{x}, {x}, {}]
       # [{x}, {x}, {o}]
       # result << {}
       # [{}]

       # result = []
       # 'doctor tom'
       # [{},{},{}]
       # [{o}, {}, {}]
       # result << {}
       # [{o}, {o}, {}]
       # result << {}
       # [{o}, {o}, {x}]
       # [{},{}]
    end 

    def doctors
      self.appointments.map{|appointment| appointment.doctor.name}.uniq
      # [{},{},{}]
      # ['doctor tom', {}, {}]
      # ['doctor tom', 'doctor tom'', {}]
      # ['doctor tom', 'doctor tom'', 'doctor plays one on tv']
      # ['doctor tom'', 'doctor plays one on tv']
    end 


    def self.all
        @@all
    end 
    
end
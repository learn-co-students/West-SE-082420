class Student
    attr_reader :first_name
    @@all = []
    def initialize(first_name)
        @first_name = first_name
        @@all << self
    end 

    def self.all
        @@all
    end

   def add_boating_test(test_name, instructor,test_status)
        BoatingTest.new(self,test_name, instructor, test_status)
   end

   def self.find_student(name)
        self.all.find{|student|student.first_name}
   end 

   def tests 
    BoatingTest.all.select{|test| test.student == self}
   end 

   def grade_percentage
        # self.tests.each do |test|
        #     if test.test_status == 'passed'
        #         pass = pass+=1
        #     end 
        # end
        pass = self.tests.count{|test|test.test_status == 'passed'}

        pass.to_f/self.tests.length.to_f * 100
   end 

end

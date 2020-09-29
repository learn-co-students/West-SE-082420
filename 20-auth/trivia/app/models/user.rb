class User < ApplicationRecord
    validates_presence_of :username
    validates_uniqueness_of :username
    
    has_secure_password

    # def password=(value)
    #     self.password_digest = BCrypt::Password.create(value)
    # end 

    # def authenticate(password)
        
    #     BCrypt::Password.new(self.password_digest) == password
    # end 



end

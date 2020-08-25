require 'pry'

class BankAccount
    attr_reader :account_number, :user_name
    attr_accessor :balance 
    # attr_writer :account_number
    # attr_accessor :account_number
    @@all = []
    def initialize(balance, account_number, user_name)
        @balance = balance
        @account_number = account_number
        @user_name = user_name
        @@all << self
    end 

    def self.all
        @@all
    end 

    def user_balance 
        "$#{@balance}"
    end 

    def deposit(amount)
        @balance = @balance+amount
        self.print_balance
    end

    def withdrawl(amount)
        @balance = @balance-amount
        self.print_balance
    end

    def print_balance
        "Account##{@account_number} has a balance of #{self.user_balance}"
    end 
    #getter method
    # def balance 
    #     @balance 
    # end 

    #setter method 
    # def balance=(new_balance)
    #     @balance = new_balance
    # end 

    #getter method
    # def account_number 
    #     "cat treats"
    # end 
    # #setter method 
    # def account_number=(new_balance)
    #     @account_number = account_number
    # end  
       
end  

account = BankAccount.new(100,1,"rose")
account2 = BankAccount.new(300,2,"bubbles")


binding.pry
0
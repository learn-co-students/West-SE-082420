## SWBATs

* Implement both sides of a many to many relationship
* Practice keeping groups of data related to classes on the class as a class variable
* Demonstrate single source of truth by not storing collections of objects on other objects


## OOP
- `self`
- when to use instance variables vs class variables
- using conditional logic in a class (in a method)

## One to many
-  Tweet >- User
- Player >- Team >- League 

## Many to Many
### Has many through (Breakout rooms 5min)
- Doctor -< Appointment >- Patient 
- Games -< Reviews >- Players 
- Driver -< Rides >- Passenger
- Magazine -< Subscription >- Reader



## Self -Referential Associations
- we will not be covering this today

## DEMO 

* Create a Doctor class. The class should have these methods:
  * `#initialize` which takes a name, bio, specialty, it has an attribute of accepting_new_clients with a default value of true.
  * a reader for name, specialty
  * a reader and write for bio and accepting_new_clients

  * `#patients` returns the patients that belong to this doctor 
  * `#appointments` returns the appointments that belong to this doctor 
  * `#new_clients?` changes the doctors takeing_new_clients attribute to true of false
  * `.all` returns all the instances of Doctor 


* Create a Patient class. The class should have these methods:
  * `#initialize` which takes a name, age, insurance
  * a reader for name 
  * a reader and writer for age and insurance 
  * `#make_appointment` makes a new appointment for the patient
  * `#doctors` returns the doctors that belong to this patient 
  * `#appointments` returns the appointments that belong to this patient 

  * `.all` returns all the instances of Patient 


* Appointments class
  * `#initialize` which takes a doctor, patient, reason_for_visit
 



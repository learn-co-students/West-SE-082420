require_relative "../config/environment"
require_relative "../app/models/user.rb"
require_relative "../app/models/note.rb"
require_relative "../app/models/entry.rb"

Entry.destroy_all
User.destroy_all
Note.destroy_all

u1 = User.create(name:"ix")
u2 = User.create(name:"rose")

n1 = Note.create(name:"get cat food", description:"go get cat food!!!!!! ):<")
n2 = Note.create(name:"get people food", description:"go get cookies")
n3 = Note.create(name:"workout", description:"running at 8:15")
n4 = Note.create(name:"slides", description:"finish your whiteboarding slides for the event on the 23rd")
n5 = Note.create(name:"nap", description:"take a nap in the sun")

e1 = Entry.create(user_id:u1.id, note_id:n1.id)
e2 = Entry.create(user_id:u2.id, note_id:n1.id)
e3 = Entry.create(user_id:u1.id, note_id:n2.id)
e4 = Entry.create(user_id:u2.id, note_id:n3.id)
e5 = Entry.create(user_id:u2.id, note_id:n4.id)
e6 = Entry.create(user_id:u1.id, note_id:n3.id)


puts "done"
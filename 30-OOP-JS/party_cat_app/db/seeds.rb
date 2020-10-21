# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Job.destroy_all
Cat.destroy_all

allCats = [
    {
      "name": "Mittens",
      "image": "https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg",
      "catchphrase": "Party cat likes to party",
      "funds": 6,
      "job": "Host"
    },
    {
      "name": "Tod",
      "image": "https://i.ytimg.com/vi/h6ExCwtgGe8/maxresdefault.jpg",
      "catchphrase": "I'm a DJ",
      "funds": 7,
      "job": "Dj"
    },
    {
      "name": "Party Cat",
      "image": "https://i.kym-cdn.com/entries/icons/facebook/000/005/517/party-cat-party-time.jpg\"",
      "catchphrase": "Party on Party Cat",
      "funds": 9,
      "job": "Guest"
    }
  ]

  allCats.each do |cat|
    job = Job.find_or_create_by(name: cat[:job])
    Cat.create(
        name: cat[:name],
        image: cat[:image],
        catchphrase: cat[:catchphrase],
        funds: cat[:funds],
        job_id: job.id
    )
  end 

  puts 'done'
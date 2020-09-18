# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

CandyStore.destroy_all
CandyItem.destroy_all

cs1 = CandyStore.create(name:'Rocket Fizz', location:'Capital Hill', open:true)
cs2 = CandyStore.create(name:'Sees', location:'Westlake Center', open:true)
cs3 = CandyStore.create(name:'JawbreakersRus', location:'Belltown', open:true)

CandyItem.create(name:'Milk Dudes', price:2, candy_store_id:cs1.id )
CandyItem.create(name:'Life Savers', price:3, candy_store_id:cs1.id )
CandyItem.create(name:'LemonHead', price:2, candy_store_id:cs1.id )

CandyItem.create(name:'Dubble Bubble', price:1, candy_store_id:cs2.id )
CandyItem.create(name:'Swedish Fish', price:3, candy_store_id:cs2.id )
CandyItem.create(name:'Hersheys', price:2, candy_store_id:cs2.id )


CandyItem.create(name:'Taffy', price:1, candy_store_id:cs3.id )
CandyItem.create(name:'Jolly Ranchers', price:3, candy_store_id:cs3.id )
CandyItem.create(name:'Sour Patch Kids', price:2, candy_store_id:cs3.id )
CandyItem.create(name:'Jawbreakers', price:2, candy_store_id:cs3.id )

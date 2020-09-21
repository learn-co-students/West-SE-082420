# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
CandyOrder.destroy_all
CandyStore.destroy_all
CandyItem.destroy_all


cs1 = CandyStore.create(name:'Rocket Fizz', location:'Capital Hill', open:true)
cs2 = CandyStore.create(name:'Sees', location:'Westlake Center', open:true)
cs3 = CandyStore.create(name:'JawbreakersRus', location:'Belltown', open:true)


ci1 = CandyItem.create(name:'Milk Dudes', price:2)
ci2 = CandyItem.create(name:'Life Savers', price:3)
ci3 = CandyItem.create(name:'LemonHead', price:2)

ci4 = CandyItem.create(name:'Dubble Bubble', price:1)
ci5 = CandyItem.create(name:'Swedish Fish', price:3)
ci6 = CandyItem.create(name:'Hersheys', price:2)

co1 = CandyOrder.create(candy_store_id:cs1.id, candy_item_id:ci1.id)
co2 = CandyOrder.create(candy_store_id:cs1.id, candy_item_id:ci2.id)
co3 = CandyOrder.create(candy_store_id:cs1.id, candy_item_id:ci3.id)
co4 = CandyOrder.create(candy_store_id:cs1.id, candy_item_id:ci4.id)

co5 = CandyOrder.create(candy_store_id:cs2.id, candy_item_id:ci1.id)
co6 = CandyOrder.create(candy_store_id:cs2.id, candy_item_id:ci5.id)
co7 = CandyOrder.create(candy_store_id:cs2.id, candy_item_id:ci6.id)
co8 = CandyOrder.create(candy_store_id:cs2.id, candy_item_id:ci3.id)

co9 = CandyOrder.create(candy_store_id:cs3.id, candy_item_id:ci3.id)
co10 = CandyOrder.create(candy_store_id:cs3.id, candy_item_id:ci4.id)
co11 = CandyOrder.create(candy_store_id:cs3.id, candy_item_id:ci5.id)
co12 = CandyOrder.create(candy_store_id:cs3.id, candy_item_id:ci6.id)


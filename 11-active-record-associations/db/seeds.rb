Player.destroy_all
Campaign.destroy_all
CharacterSheet.destroy_all
Battle.destroy_all
Monster.destroy_all

liz = Player.create(name:'Liz', bio:'loves sailor moon', phone:1112223333)
ian = Player.create(name:'Ian', bio:'is married to liz', phone:1112223333)
eric = Player.create(name:'Eric', bio:'is from New Yok', phone:1112224444)
haley = Player.create(name:'Haley', bio:'A crust punk chemical engineer', phone:0000000000)
tonya =  Player.create(name:'Tonya', bio:'was jaded on day 3', phone:0000000000)

cs = Campaign.create(title:'Curse of Strahd', start_date:'09/03/2020', player_cap:4)
dip = Campaign.create(title:'Dragon of Ice Spire peak', start_date:'06/01/2020', player_cap:5)

cs1 = CharacterSheet.create(name:'Astar', dnd_class:'cleric', dnd_race:'elf', ac:14, hp:30, player_id:Player.find_by(name:'Liz').id, campaign_id: Campaign.find_by(title:'Curse of Strahd').id)

battle = Battle.create(location:'Barovia', campaign_id:cs.id,)
monster1 = Monster.create(name:'Zombie', ac:8, hp:26, battle_id: battle.id)

item = Item.create(name:'dragon slayer', price:999, character_sheet_id: cs1.id)

puts 'done'
window.addEventListener('load', function(e){

    let coffeeArr = [
        {
        name:'Hair Bender',
        brand: 'Stump Town',
        price: 15
        },
        {
        name:'Holler Mountain',
        brand: 'Stump Town',
        price: 16
        },
        {
        name:'Espresso Vita',
        brand: 'Vivachi',
        price: 16
        },
        {
        name:'Victrola',
        brand: 'Empire Blend',
        price: 13
        },
    ]
//Each
// coffee.each{|coffee| puts coffee}
const speak = str => console.log(str)
coffeeArr.forEach( coffee => speak(coffee) )

//Map
// coffee.map{|coffee| coffee[:name]}
let names = coffeeArr.map(coffee =>{
    return coffee.name
})
console.log(names)

//Filter
    let stumpTown = coffeeArr.filter(coffee => coffee.brand == "Stump Town")
    console.log(stumpTown)
//Reduce 
    let coffeePrice = coffeeArr.map(coffee => coffee.price)
    console.log(coffeePrice)
    let total = coffeePrice.reduce((a,b)=> a + b)
    console.log(total)

})
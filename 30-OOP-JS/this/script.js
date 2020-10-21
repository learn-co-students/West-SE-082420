function printThis(){
    console.log('this: ', this)
}

const cat = {
    name: 'Rose',
    toys: ['mouse', 'bird', 'hair ties'],
    speak: speak,
    ownedToys: ownedToys
}

const cat2 = {
    name: 'Tod',
    toys: ['Vinyl records'],
    speak: speak,
    ownedToys: ownedToys
}

function speak(greeting){
    console.log(this)
    console.log(`${greeting} Mow my name is ${this.name}`)
}

// console.log(cat.speak())

// function ownedToys(){
//     this.toys.forEach(function(toy){
//         console.log(`${this.name} has a ${toy}`)
//     }.bind(cat2)
//     )
// }
// let boundSpeak = speak.bind(cat)
// console.log(boundSpeak())
// console.log(speak.apply(cat2, ['yo']))

function ownedToys(){
        this.toys.forEach(toy => {
            console.log(`${this.name} has a ${toy}`)
        })
    }

    console.log(cat.ownedToys())
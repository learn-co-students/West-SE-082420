# Intro to the DOM and Events 

## SWBAT
- Build forms from JavaScript
- Get data with a Fetch and use it to update the dom
- Implement submit events and click events
- Understand when and how use event.preventDefault()
- Get data from form events
- Update the DOM with data from a form


### Steps for interacting with  the DOM
1. Find the element
2. Figure out what kind of event to listen for
2. Tell Javascript what function to run when that event happens


### Map, Filter, ForEach
```
//Each
    coffeeArr.forEach(coffee => console.log(coffee))

//Map
    let coffeeNames = coffeeArr.map(coffee => coffee.name)

//Filter
    let stumpTown = coffeeArr.filter(coffee => coffee.brand == 'Stump Town')

//Reduce 
    let coffeePrice = coffeeArr.map(coffee => coffee.price)
    let total = coffeePrice.reduce((a,b) => a.price + b.price)


```
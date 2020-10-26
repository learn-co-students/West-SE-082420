//Arrow functions 
const foo = val => `${val} is the best cat`
console.log(foo('rose'))

const boo = (str1, str2) => `Happy ${str1} to ${str2}`
console.log(boo('Halloween', 'you'))

const doMath = (num1, num2) => {
    let sum = num1 + num2
    return sum
}
console.log(doMath(5,3))

const addTwo = (foo, num) => {
    return foo(2, num)
}
console.log(addTwo(doMath,5))

//Class
class Book{
    constructor(obj){
        this.title = obj.title,
        this.author = obj.author,
        this.description = obj.description,
        this.publisher = obj.publisher,
        this.fans = obj.fans
    }
    
    printTitle = () => {
        console.log(this.title)
    }

    printFans = () => {
        console.log(this)
        // this.fans.forEach(function(fan){
        //     console.log(this)
        //     console.log(`${fan} likes ${this.title} by ${this.author}`)
        // }.bind(this))
            this.fans.forEach((fan) => {
            console.log(this)
            console.log(`${fan} likes ${this.title} by ${this.author}`)
        })

    }
}

class ColorBook extends Book {
    constructor(args){
        super(args)
        this.color = 'blue'
    }
    isBlue = () => {
        console.log( `${this.title} now has a ${this.color} cover`)
    }

} 


fetch('http://localhost:3000/books')
.then(res => res.json())
.then(books => books.map(book => new ColorBook(book)))
.then(books => books.forEach(book => book.isBlue()))


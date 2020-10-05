// <-- forward slashes leave comments 
//console and debugger
let firstString = 'Hello'
console.log(firstString)
//debugger
let secondString = 'Hello'
console.log('World')

// JavaScript Data Types 
//Primitive:
// Undefined
//has not been assigned a value
let a 

// Null
// value is null
let b = null

// Boolean
// falsy
false
0
''
""
null
undefined
NaN
// truthy 
true
'0'
let arr = []
{}
function foo(){}
// Number (no more floats)
10
10.10
isNaN(NaN)
Number("1")
parseInt("9")

// String
let age =  3
let  str = `my cat is ${age}`
console.log(str)

// Non-Primitive 
// Objects
let  plants = {color:"Green"}
plants.color
plants.flower = false
//plane old java script object {}
// Hash === Object 

//function definition vs invocation 
//return keyword 
function speak(){
    return 'hi'
}
console.log(speak)
console.log(speak())

function speak2(name){
    return `hi my name is ${name}`
}
speak2.animal = 'cat'

console.dir(speak2)

let color =  function(val){
    return `my fav color is ${val}`
}
console.log(favRed(color))
function favRed(foo){
    return foo('Red')
}

//Pass by Value
//Primitive Data types is Pass by Value
let c = 1
let d = c
console.log(c == d)

d =  d+1
console.log('c: ', c)
console.log('d: ', d)
//Object are Pass by reference
let myCat = {name: 'rose'}
let aCat = myCat

console.log(aCat == myCat)
aCat.name = 'bubbles'

console.log('aCat: ',  aCat)
console.log('myCat: ', myCat)

let arr1 = [1,2,3]
let arr2 = arr1 
arr2.push(4)
console.log(arr1)

let cats = ['rose', 'bubbles']

function  addCats(cat, arr){
    return  arr.push(cat)
}

addCats('tom', cats)
console.log(cats)

console.log(document.getElementById('header'))
console.log(document.getElementsByClassName('text'))
console.log(document.getElementsByTagName('p'))
console.log(document.querySelector('#header'))
console.log(document.querySelector('.text'))
console.log(document.querySelectorAll('.text'))
console.log(document.querySelector('p'))

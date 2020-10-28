//Destructuring 
let a, b

[a,b] = [10, 20]

// console.log(a)
// console.log(b)

let instructorA = {name:'ix', role:'lead', age:100}
let instructorB = {name:'emiley', role:'coach', age:99}

let props = instructorB

let {rose, name, role, age} = props
// console.log(rose)
// console.log(name)
// console.log(role)
// console.log(age)


//...
let c = 'a'
let d = c
d = 'z'
// console.log(c)
// console.log(d)

let arr1 = ['a', 'b', 'c']
let arr2 = arr1
// arr2.push('d')
arr2 = [...arr2, 'd']

// console.log(arr1)
// console.log(arr2)

let instructorC = {...instructorB, pay:5000}
instructorC = {...instructorC, name:'The Emiley'}
console.log(instructorB)
console.log(instructorC)


let  colors = ['red', 'blue', 'green']
let colors2 = [...colors, 'yellow']

let cat = {name:"rose", age:9}
cat = {...cat, age:10}
cat = {...cat, colors: "Black and White"}

{name, age, colors} = cat


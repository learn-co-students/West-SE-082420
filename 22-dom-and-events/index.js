console.log(document)

//READ
    //Get item by ID
    document.getElementById('selected_cat_info')
    document.querySelector('#selected_cat_info')
    //Get first item by class
    document.querySelector('.container')
    //Get multiple items by class  
    document.getElementsByClassName('container')

    //Get multiple items by Tag
   document.getElementsByTagName('li')

    //Get multiple items by whatever
    document.querySelectorAll('div')


    
//CREATE 
    //build any element 
    let div = document.createElement('div')
    let p = document.createElement('p')
    
    //add attributes
    p.id = 'party-cat-catchphrase'
    p.className = 'catchphrase'
  
    //add text content
    // p.innerText = 'Party Cat likes to Party'
    p.textContent = 'Party Cat likes to Party'
    //attaching elements
    div.appendChild(p)
    document.getElementById('inner_cat_info').insertBefore(div, document.querySelector('img'))

///UPDATE
    let btn = document.querySelector('#add_cat_btn')
    btn.textContent = 'Add to Guest List'
    btn.className = 'btn'
    btn.id = 'cat-btn'


//DELETE
    let ul = document.querySelector('ul')
    ul.children[2].remove()





//innerHTML
    


// Arrows functions and callbacks
function foo(){
    return 'hi'
}
// const foo = function(){
//     return 'hi'
// }

// const boo = () => {
 //   return 'hello'
//}

const boo = () => 'hello'

const sayHi = (someFunction) => someFunction()



//Events handlers  


 .
// let updateBtn = document.querySelector('button')
// updateBtn.addEventListener('click', function(){
//     let main = document.querySelector('main')
//     main.innerHTML = ''
//     cat =   
//         {
//             name:"Mittens",
//             imgUrl:"https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg",
//             catchphrase:"Party cat likes to party"
//         }
    
//     main.innerHTML = 
//         `
//         <div id="selected_cat_info">
//         <h2 id="party_cat_name">${cat.name}</h2>
//         <div id= "inner_cat_info">   
//             <img src="${cat.imgUrl}">
//         </div>
//         </div>
//         `
// })

//Lets make it more dynamic 
let updateBtn = document.querySelector('button')
let mittens =   
        {
            name:"Mittens",
            imgUrl:"https://i.pinimg.com/originals/89/9e/71/899e7132fd5125067051104e5e3e3073.jpg",
            catchphrase:"Party cat likes to party"
        }
const changeCat = (cat) => {
    let main = document.querySelector('main')
    main.innerHTML = ''
    main.innerHTML = 
            `
            <div id="selected_cat_info">
            <h2 id="party_cat_name">${cat.name}</h2>
            <div id= "inner_cat_info">   
                <img src="${cat.imgUrl}">
            </div>
            </div>
            `
}

updateBtn.addEventListener('click', () => changeCat(mittens))


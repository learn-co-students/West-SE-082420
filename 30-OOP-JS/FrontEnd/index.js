console.log(Cat)
//Data
let allCats, selectedCat 

//common elements 
let addCatBtn = document.querySelector('#add_cat_btn')
let main = document.querySelector('main')
let aside = document.querySelector('aside')
let ul = aside.querySelector('ul')


addCatBtn.addEventListener('click', handleBuildCreateForm)
//functions to run on load

getCats('http://localhost:3000/cats')


//Fetch 

function getCats(url){
    fetch(url)
    .then(res => res.json())
    .then(cats => {
        if(Array.isArray(cats)){
            allCats = []
            cats.forEach(cat => {
                let catObj = new Cat(cat)
                allCats.push(catObj)
                catObj.buildLi(ul)
            })
            cats = cats[0]
        }
        selectedCat =  new Cat(cats)
        selectedCat.buildMain(main)
    })
}

function postCat(cat){
    
    console.log(cat)
    fetch('http://localhost:3000/cats',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cat),
      })
      .then(response => response.json())
      .then(data => {
        let catObj = new Cat(data)
        catObj.buildMain(main)
        allCats.push(catObj)
        buildAside(allCats)
        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}

const deleteCat = (cat, container) => {
    fetch(`http://localhost:3000/cats/${cat.id}`,{
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(cat => {
        container.remove()
      })
      .catch((error) => {
        console.error('Error:', error);
      });
}


//Handlers

function handleSubmit(e){
    e.preventDefault()
    console.log('create')
    let cat = {
        name: e.target.name.value,
        image: e.target.image.value,
        catchphrase: e.target.catchphrase.value,
        funds: e.target.funds.value,
        job_name: e.target.job_name.value
    }
    ul.innerHTML = ''
    postCat(cat)
}


function handleBuildCreateForm() {
    buildForm('create')
}

//Build DOM items

function buildAside(arr) {
    console.log(arr)
    arr.forEach(cat => {
        console.log(cat)
        cat.buildLi(ul)
    })
}

function buildForm(value){
    console.log(value)
        main.innerHTML = ''
        let fromItems = ['name', 'image', 'catchphrase', 'job_name']
        let form = document.createElement('form')
        let h2 = document.createElement('h2')
        let submit = document.createElement('input')
        h2.textContent = 'Add Cat to Guest List'
        submit.type = 'submit'
        fromItems.forEach(item => {
            let label = document.createElement('label')
            let input = document.createElement('input')
            label.for = item
            label.textContent =  item.toUpperCase()
            input.type = 'text'  
            input.name = item
            form.append(label, input)
        })
        let labelFunds = document.createElement('label')
        let inputFunds = document.createElement('input')
        labelFunds.for = 'funds'
        labelFunds.textContent = 'FUNDS'
       
        inputFunds.type = 'number'  
        inputFunds.name = 'funds'
        form.append(labelFunds, inputFunds, submit)
        main.append(h2, form)

        form.addEventListener('submit', handleSubmit)

    }
    







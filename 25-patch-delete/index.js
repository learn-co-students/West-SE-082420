const catUrl = 'http://localhost:3000/allCats'
let selectedCat = ''

getCats(catUrl)

//QuerySelectors 
let addCatbtn = document.querySelector('#add_cat_btn')
let editCatbtn = document.querySelector('#edit_cat_btn')
let main = document.querySelector('main')
let ul = document.querySelector('ul')


const buildCreateForm = () => {
    buildForm()
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => handleSubmit(e, 'create'))

}
const buildEditForm = () => {
    buildForm()
    let form = document.querySelector('form')
    form.name.value = selectedCat.name
    form.image.value = selectedCat.image
    form.catchphrase.value = selectedCat.catchphrase
    form.addEventListener('submit', (e) => handleSubmit(e, selectedCat))

}


addCatbtn.addEventListener('click', ()=> buildCreateForm())
editCatbtn.addEventListener('click', ()=> buildEditForm())


/////////////////////
//Fetch
function getCats(url){
   return fetch(url)
    .then(res => res.json())
    .then(data => {
        buildAside(data)
        buildMain(data[0])
    })
}

function makePost(cat){
    fetch('http://localhost:3000/allCats',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(cat)
    })
    .then(res => res.json())
    .then(cat => {
        //pessimistic rendering 
        //rendering after we make our fetch
        buildLi(cat)
        buildMain(cat)
    })
    .catch(error => {
        console.error('Errors: ', error)
    })

}

function makePatch(cat, id){

    fetch(`http://localhost:3000/allCats/${id}`, {
        method:'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cat)
    })
    .then(res => res.json())
    .then(cat => {
        getCats(catUrl)
        .then(() => {
            buildMain(cat)
        })
        
    })
    .catch(error => {
        console.error('Errors: ', error)
    })
}

const deleteCat = (id,div) => {
    fetch(`http://localhost:3000/allCats/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
        div.remove()
        getCats(catUrl)
    })
}

//////////////////
//Handlers
function handleSubmit(e, value){
    e.preventDefault()
    let cat = {
        name: e.target.name.value,
        image: e.target.image.value,
        catchphrase: e.target.catchphrase.value
    }
    if(value != 'create'){
        makePatch(cat, value.id)
    } else {
        makePost(cat)
    }

    // optimistic rendering 
    // rendering before we make our fetch
    // buildLi(cat)
    // buildMain(cat)
} 




/////////////////////////
//Dom items

const buildAside = (arr) => {
    ul.innerHTML = ''
    arr.forEach(cat => buildLi(cat))
}

function buildLi(cat){
    let li = document.createElement('li')
    let deleteLi = document.createElement('li')
    let div = document.createElement('div')
    li.name = cat.name
    li.id = cat.id 
    li.class = 'cat_li'
    li.textContent = cat.name
    deleteLi.textContent = 'X'
    deleteLi.style = 'color:red'
    div.style = 'display:flex'

    li.addEventListener('click', ()=> buildMain(cat))
    deleteLi.addEventListener('click', () => deleteCat(cat.id,div))
    div.appendChild(li)
    div.appendChild(deleteLi)
    ul.appendChild(div)
}



 function buildMain(cat){
    
    selectedCat = cat
    console.log(cat)
    main.innerHTML = 
    `
    <div id="selected_cat_info">
    <h2 id="party_cat_name">${cat.name}</h2>
    <div id= "inner_cat_info">
        <img src="${cat.image}">
        <p>${cat.catchphrase}</p>
    </div>
    </div>

    `
}

function buildForm(){
    main.innerHTML = ''
    let formItems = ['name', 'image', 'catchphrase']

    let form = document.createElement('form')
    let h2 = document.createElement('h2')
    let submit = document.createElement('input')

    h2.textContent = 'Add Cat to Guest List'
    submit.type = 'submit'

    formItems.forEach(item => {
        let label = document.createElement('label')
        let input = document.createElement('input')
        label.for = item
        label.textContent = item.toUpperCase()
        input.type = 'text'
        input.name = item

        form.appendChild(label)
        form.appendChild(input)

    })

    form.appendChild(submit)
    main.appendChild(h2)
    main.appendChild(form)

}






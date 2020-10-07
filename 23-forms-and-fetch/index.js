const catUrl = 'http://localhost:3000/allCats'
getCats(catUrl)

//QuerySelectors 
let btn = document.querySelector('#add_cat_btn')
let main = document.querySelector('main')
let ul = document.querySelector('ul')


btn.addEventListener('click', ()=> buildForm())


/////////////////////
//Fetch
function getCats(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        buildAside(data)
        buildMain(data[0])
    })
}

//////////////////
//Handlers
function handleSubmit(e){
    e.preventDefault()
    let cat = {
        name: e.target.name.value,
        image: e.target.image.value,
        catchphrase: e.target.catchphrase.value
    }
    buildLi(cat)
    buildMain(cat)
} 


/////////////////////////
//Dom items

const buildAside = (arr) => {
    ul.innerHTML = ''
    arr.forEach(cat => buildLi(cat))
}

function buildLi(cat){
    let li = document.createElement('li')
    li.name = cat.name
    li.id = cat.id 
    li.class = 'cat_li'
    li.textContent = cat.name

    li.addEventListener('click', ()=> buildMain(cat))

    ul.appendChild(li)
}



 function buildMain(cat){
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

    form.addEventListener('submit', (e) => handleSubmit(e))

}






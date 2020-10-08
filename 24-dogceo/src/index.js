let dogImage = document.querySelector('#dog-image-container')
let dogList = document.querySelector('ul')
let select = document.querySelector('select')
let dogBtn = document.querySelector('#favorite-dogs')

let dogBreeds = []

select.addEventListener('change', (e) => handleFilter(e, dogBreeds))
dogBtn.addEventListener('click', () => fetchFavoriteDogs())

// Server Communication
const fetchDogs = () => {
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(dogs => dogs.message.forEach(dog => buildImages(dog)) )
}

const fetchBreeds = () => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breeds => {
        let dogBreedsTemp = Object.keys(breeds.message)
        dogBreedsTemp.forEach(breed => buildLi(breed))
        dogBreeds = dogBreedsTemp
    })
}

const fetchFavoriteDogs = () =>{
    fetch('http://localhost:3000/dogs')
    .then(res => res.json())
    .then(dogs => {
        dogImage.innerHTML = ''
        dogs.forEach(dog => buildImages(dog.image))
    })
}

const postDogs = (dog) =>{
    fetch('http://localhost:3000/dogs', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({image:dog})
    })
    .then(res => res.json())
    .then(console.log)
  
}

fetchBreeds()
fetchDogs()

///Handlers
function handleFilter(e, breeds){
    let filterDogs = breeds.filter(dog => dog[0] == e.target.value)
    dogList.innerHTML = ''
    filterDogs.forEach(dog => buildLi(dog))
}


///Builds DOM items

const buildImages = (dog) => {
    let img = document.createElement('img')
    img.src = dog
    dogImage.appendChild(img)
    img.style = 'width:250px'
    img.addEventListener('click', () => postDogs(dog))
}

const buildLi = (breed) => {
    let li = document.createElement('li')
    li.textContent = breed
    li.id = breed
    dogList.appendChild(li)
    li.addEventListener('click', () => li.style='color:red')
}

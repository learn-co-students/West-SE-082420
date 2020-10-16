const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector('main')

getData(TRAINERS_URL)

function getData(url){
    fetch(url)
    .then(res => res.json())
    .then(trainers => trainers.forEach(trainer => buildCard(trainer)))
}

function postPokemon(trainer_id){
    fetch(POKEMONS_URL,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({trainer_id: trainer_id})
    })
    .then(res => res.json())
    .then(pokemon => {
        let div = document.querySelector(`[data-id="${pokemon.trainer_id}"]`)
        let ul = div.querySelector('ul')
        buildLi(pokemon, ul)
    })
    .catch(error => console.log('errors', error))
    
}

function deletePokemon(pokemon_id){
    fetch(`${POKEMONS_URL}/${pokemon_id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(() => {
       let releasedPokemon = document.querySelector(`[data-pokemon-id="${pokemon_id}"]`)
       releasedPokemon.parentNode.remove()
    })
}

function buildCard(trainer){
    let containerCard = document.createElement('div')
    let p = document.createElement('p')
    let btn = document.createElement('button')
    let ul = document.createElement('ul')

    containerCard.setAttribute('data-id', trainer.id)
    btn.setAttribute('data-trainer-id', trainer.id)
    containerCard.className = 'card'
    p.textContent = trainer.name 
    btn.textContent = 'Add Pokemon'

    btn.addEventListener('click', () => postPokemon(trainer.id))
 
    trainer.pokemons.forEach(pokemon => buildLi(pokemon,ul))

    containerCard.append(p, btn, ul)
    main.append(containerCard)

}

function buildLi(pokemon,ul){
    let li = document.createElement('li')
    let pokeBtn = document.createElement('button')
    pokeBtn.setAttribute('data-pokemon-id', pokemon.id)
    pokeBtn.className = 'release'
    
    pokeBtn.textContent = 'Release'

    pokeBtn.addEventListener('click', ()=> deletePokemon(pokemon.id))

    li.textContent = `${pokemon.nickname}(${pokemon.species})`
    li.append(pokeBtn)
    ul.append(li)
}
class Cat{
    constructor(catObj){
        this.name = catObj.name,
        this.image = catObj.image,
        this.catchphrase = catObj.catchphrase,
        this.funds = catObj.funds,
        this.job_name = catObj.job_name,
        this.id = catObj.id
    }
    buildLi(ul){
        console.log('hi from class')
        let container = document.createElement('div')
        let li = document.createElement('li')
        let liDelete = document.createElement('li')
        li.name = this.name
        li.id =  this.name
       
        li.class = 'cat_li'
        li.textContent =  this.name
        liDelete.textContent = 'X'
        liDelete.style = 'color:red'
        container.style = 'display: flex'
        
        li.addEventListener('click',() => getCats(`http://localhost:3000/cats/${this.id}`))
        liDelete.addEventListener('click', () => deleteCat(cat, container))
        container.appendChild(li)
        container.appendChild(liDelete)
        ul.appendChild(container)
    }

    buildMain(main){
        main.innerHTML = ''
        main.innerHTML = `
        <div id="selected_cat_info">
        <h2> Job: ${this.job_name} </h2>
        <h2 id="party_cat_name"> Name: ${this.name}</h1>
        <div id= "inner_cat_info">
            <img src="${this.image}">
            <p>${this.catchphrase}</p>
        </div>
        </div>
        `

    }

}
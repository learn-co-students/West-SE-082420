document.addEventListener("DOMContentLoaded", function() {
    let btn = document.createElement('button')
    let rose =  {"id":1, "username":"Rose"}
    let show = document.querySelector('#show-panel')
    let form = document.querySelector('form')
    // form.addEventListener('submit', (e) => patchComments(e) )
    fetchBooks()

   function fetchBooks(){
    fetch('http://localhost:3000/books')
    .then(res => res.json())
    .then(books => books.forEach(book => buildBooks(book)) )
   } 

   function patchComments(e, book){
       e.preventDefault()
        //    console.log(e.target[0].value) 
        book.comments.push(e.target.rose.value)
        displayBook(book)
        fetch(`http://localhost:3000/books/${book.id}`,{
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                comments: book.comments
            }),
        })
    }


   function buildBooks(book){
    let list = document.querySelector('#list')
    let li = document.createElement('li')
    li.innerText = book.title
    list.appendChild(li)
    li.addEventListener('click', () => displayBook(book) )
   }

   function displayBook(book){
    form.addEventListener('submit', (e) => patchComments(e, book) )

       show.innerHTML = ''
       let img = document.createElement('img')
       let h1 = document.createElement('h1')
       let p = document.createElement('p')
       let p2 = document.createElement('p')
       let h2 = document.createElement('h2')

       img.src = book.img_url
       h1.innerText = book.title
       p.innerText = book.subtitle
       h2.innerText = book.author
       p2.innerText = book.description 

    //    show.appendChild(img)
    //    show.appendChild(h1)
    //    show.appendChild(p)
    //    show.appendChild(h2)
    //    show.appendChild(p2)
        let ul = document.createElement('ul')
        let h3 = document.createElement('h3')
        h3.innerText = 'Users who liked this book'
        book.users.forEach(user => {
            let userLi = document.createElement('li')
            userLi.innerText = user.username
            ul.appendChild(userLi)
        })
        let commentPanel = document.querySelector('#comment-panel')
        commentPanel.innerHTML = ''
        let ul2 = document.createElement('ul')
        let commentH3 = document.createElement('h3')
        commentH3.innerText = 'Book Comments'
        book.comments.forEach(comment => {
            let commentLi = document.createElement('li')
            commentLi.innerText = comment
            ul2.appendChild(commentLi)
        })
        show.append(img,h1,p,h2,p2,h3,ul)
        commentPanel.append(commentH3,ul2)

        renderLikeBtn(book)
   }

   function renderLikeBtn(book){
        if(book.users[book.users.length-1].id == rose.id){
            btn.innerText = 'Unlike'
        }else {
            btn.innerText = 'Like'

        }
        show.append(btn)
        btn.addEventListener('click', () => patchLikes(book))
   }

   function patchLikes(book){
    // console.log(book.users[book.users.length-1].id === rose.id)
       if(book.users[book.users.length-1].id == rose.id ){
           book.users.pop()
       } else{
        book.users.push(rose)
       }

        
       let bookData = {
            users: book.users
       }
       fetch(`http://localhost:3000/books/${book.id}`,{
           method: 'PATCH',
           headers: {
               'Content-Type':'application/json'
           },
           body:JSON.stringify(bookData)
       })
       .then(res => res.json())
       .then(data => displayBook(data))
   }




});


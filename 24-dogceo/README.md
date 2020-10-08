# Fetch Dog CEO Challenge

## Challenge 1 [x]

This repository includes an `index.html` file that loads an `index.js` file.

```js
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
```

Add JavaScript so that:

- on page load
- fetch the images using the url above ⬆️
- parse the response as `JSON`
- add image elements to the DOM **for each**🤔 image in the array

---

## Challenge 2 [x]

```js
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
```

After the first challenge is completed, add JavaScript so that:

- on page load, fetch all the dog breeds using the url above ⬆️
- add the breeds to the page in an `<ul>` (take a look at the included `index.html`)

---

## Challenge 3 [x]

Once all of the breeds are rendered in the `<ul>`, add JavaScript so that the
font color of a particular `<li>` changes _on click_. This can be a color of
your choosing.

When the user clicks any of the dog breed list items, the color the text should
change.

---

## Challenge 4

Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
so that the user can filter breeds that start with a particular letter using a
dropdown.

For example, if the user selects 'a' in the dropdown, only show the breeds with
names that start with the letter a. For simplicity, the dropdown only includes
the letters a-d. However, we can imagine expanding this to include the entire
alphabet

---
## Challenge 5
add a favorite dog button that shows all of your favorite dogs!

Run your dog server with the following 
```
json-server --watch db.json

```

Right now its just an empty array but eventually your dogs will be at 
```
http://localhost:3000/dogs

```

When you click an image you, the dog image should be POSTed to your /dogs.

You'll need to find a way to pass the dog image information to body: JSON.stringify({image:dog}), 


```
   fetch('http://localhost:3000/dogs',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({image:dog}), 
    })
    .then(res => res.json())
    .then(console.log)


```
Now that you have some dogs. add a eventListener to that favorite dogs button that will clear the current dog pictures, fetch your dogs and render them on the screen. 

![dog ceo](https://dog.ceo/img/dog.jpg)

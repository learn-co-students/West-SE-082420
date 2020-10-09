# Intro to the DOM and Events 

## SWBAT
- Implement post with forms
- Build an edit form with correct values
- Implement Patch and Delete 
- Update after each CRUD action with optimistic rendering
- Understand pessimistic rendering 


### Steps for interacting with  the DOM
1. Find the element
2. Figure out what kind of event to listen for
2. Tell Javascript what function to run when that event happens


### POST
```
 const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

```


### POST
```
 const data = { username: 'example' };

fetch('https://example.com/profile/id', {
  method: 'PATCH', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

```


### POST
```
 const data = { username: 'example' };

fetch('https://example.com/profile/id', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});

```
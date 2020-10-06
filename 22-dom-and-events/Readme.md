# Intro to the DOM and Events 

## SWBAT
- Use Chrome Dev Tools to explore the DOM tree
- Us JS to select DOM nodes
- Create DOM elements
- Create event listeners
- Distinguish between event types
- Explain when and why to use event listeners
- Write event listeners as stand-alone functions and in-line functions
- Use event listeners to manipulate the DOM
- Delegate events using the event.target
- Synthesize knowledge of forms with event listeners

### let, var and const
- var variables can be updated and re-declared within its scope 
- let variables can be updated but not re-declared 
- const variables can neither be updated nor re-declared.
For the most part avoid using var!

### => Arrow functions 
```
//normal function
function(){

}
function foo(){

}
//arrow function
() => {

}
const foo = () => {

}
const foo = () => 'return this string'
```

### callback functions 


### Document Object Model
![DOM Tree](https://www.researchgate.net/profile/Olfa_Nasraoui/publication/221417012/figure/fig2/AS:669043992322053@1536523926785/Dom-Tree-of-An-Example-Web-Page.png "The DOM")
[ResearchGate, Olfa Nasraoui, 2008](https://www.researchgate.net/figure/Dom-Tree-of-An-Example-Web-Page_fig2_221417012)


### innerText vs textContent 
[Kelly Norton's Blog](https://kellegous.com/j/2013/02/27/innertext-vs-textcontent/)

### .innerHTML
[The Risk of .innerHTML](https://medium.com/@jenlindner22/the-risk-of-innerhtml-3981253fe217#:~:text=innerHTML%20today%20is%20cross%2Dsite,cookies%20and%20other%20personal%20information.)
```
"One of the most prevalent risks of using Node.innerHTML today is cross-site scripting (XSS), which allows outside users to add malicious client-side scripts to websites that will be viewed by many users. Believing these scripts to be safe, their browsers will execute them, leaving the user vulnerable to theft of cookies and other personal information. If that isn’t scary enough, these scripts can also change the actual content of the web page itself!"

```
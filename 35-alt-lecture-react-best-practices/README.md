# React Best Practices

Let's learn some best practices by refactoring yesterday's Pets code!

## By the end of this lesson, we'll be able to:
- Determine whether a component is a presentation or container component
- Reduce state and put it in the right place
- Make our components smaller - SRP!
- Keep render clean
- Make our code more concise using spread and destructuring
- Make our code easier to understand by logically naming variables, keys, methods
- BONUS: organize our code

## Presentation vs container component

Or as some say: functional vs class component.

Short story: Does it have/require state => class component (container) or lifecycle methods, otherwise function component (presentation)

Container components contain state and they are class components that inherit from React.Component. When using React class syntax, all components housing state (where state is declared) must be class components.

Function components do one thing really well, they render content. A function component may do nothing more than return some JSX, or it may also contain additional logic that determines what is displayed.

**Activity:** Let's modify our app to use the correct types of components.

## Reduce state and put it in the right place

Determine the minimal amount of state your app requires. 

Whenever possible, compute values instead of storing them in additional state: e.g. if your app displays plants of different types and you want to filter by plant type, such as "succulent", your state might look like this:

```
state = {
  plants: [/* all plants */],
  filter: "succulent"
}
```

When the filter changes, the component receiving all the plants and the filter type as props will filter the plants on the fly:

```
<PlantMenu plants={this.state.plants} filter={this.state.filter} />
```

Lastly, don't place the state in your app any higher than it needs to be. Take this app hierarchy for example:
- App
  - Header
  - Contents
    - Animals
    - Animal
  - Footer

Imagine that Contents is responsible for displaying all Animals stored in our app as well as showing details about a specific chosen animal. It is better to put the state related to these animals in Contents than in App because:
  - Only Contents' children require access to the state
  - App, Header, and Footer don't require access to the state
    - These components don't depend on the list of animals or the chosen animal in any way
  - If we were to put the state in App, it would be confusing to other devs and yourself later on
    - They might think Header and Footer also rely on that state in some say, but they don't
  - If we were to put the state in App, we'd be passing it to Contents, which would then be passing it to Animals and Animal via props
    - Since Contents is where the state is needed, we should put it in Contents

**Activity:** Let's figure out how we can stop storing the filtered pets and instead just filter on the fly.

## Make our components smaller

Just like when we're programming regular methods, we should be thinking about the Single Responsibility Principle (SRP). In other words, a component should do one thing really well.

For example, if we have an app that displays hogs and allows you to add a new hog via a form, it's better for the form to be its own component and the part responsible for displaying hogs to be a separate component.

You might also want to consider splitting up components that have very long renders/returns depending on their contents. For example:

```
return (
  <div>
    <div className="hog-info">
      <h3>{name}</h3>
      <span className="age">{age}</span>
    </div>

    <div className="hog-actions">
      <button onClick={handleFavorite}>Favorite This Hog!</button>
      <button onClick={handleHide}>Hide This Hog!</button>
    </div>

    <div className="hog-extras">
      <p>This hog loves to {hobby}</p>
      <p>Their favorite type of mud is {mud}</p>
    </div>
  </div>
)
```

The above is a great refactoring target. We can split this into three separate components (props omitted from example):

```
return (
  <div>
    <HogInfo />
    <HogActions />
    <HogExtras />
  </div>
)
```

This refactor makes it much easier to see what all of the different parts of the component relate to. This is easier to understand and, if in the future edits are required, we can go to a smaller file where the change needs to be made, making our work easier.

**Activity:** Let's find components that can be refactored into smaller ones.

## Keep render() clean

In other words, don't put a bunch of logic in render that doesn't need to be there.

Good:

```
render() {
  const { id, name, age } = this.props;

  return (
    <div>
      <p>I'm called {name}.</p>
      {/* more JSX */}
    </div>
  )
}
```

Not so good:

```
render() {
  function handleClick() {
    // code for handling click
  }

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}
```

We can also clean things up further by not creating unnecessary divs or other elements. For example, imagine we have the below render function and the only reason the outermost div exists is to prevent the React error that states a component can only render a single parent element:

```
render() {
  return (
    <div> {/* Only here to make React happy */}
      <HogInfo />
      <HogActions />
      <HogExtras />
    </div>
  )
}
```

Instead, if your project is running React v. 16+, you can use either Fragment or <>. Fragment must be imported!

```
import React, { Fragment } from 'react';

// code and stuff

render() {
  return (
    <Fragment>
      <HogInfo />
      <HogActions />
      <HogExtras />
    </Fragment>
  )
}
```

OR, you can do this:

```
render() {
  return (
    <>
      <HogInfo />
      <HogActions />
      <HogExtras />
    </>
  )
}
```

What's the difference?: <> does not accept keys or other attributes - it is what it is. Fragment does accept keys and attributes - it is what it is and a bit more...I guess.

**Activity:** Find a render that needs some house cleaning.

## Make code more concise using spread operator and destructuring

**Spread operator**: I want to copy an object (or add something to the copy at the same time)

```
handleDog = (dog) => {
  const dogs = [...this.state.dogs, dog]; // spread! ...
  this.setState({ dogs });
}
```

**Destructuring assignment**

Check out the before and after!

BEFORE:

```
render() {
  return (
    <div>
      {this.props.dogs.map(dog => <Dog dog={dog} key={dog.name} />)}
      <span>{this.props.dogs.length}</span>
      <p>All dogs belong to {this.props.dogOwner}</p>
    </div>
  )
}
```

AFTER:

```
render() {
  const { dogs, dogOwner } = this.props;

  return (
    <div>
      {dogs.map(dog => <Dog dog={dog} key={dog.name} />)}
      <span>{dogs.length}</span>
      <p>All dogs belong to {dogOwner}</p>
    </div>
  )
}
```

Which one is easier to read? Which required less typing?

**Activity:** Find code that can benefit from destructuring assignment.

## Logically and consistently name variables, functions, etc.

Try to keep names short, consistent, and informative.

For example, if you have functions that return booleans, you might want to always start them with the word 'is' or 'has' or 'should': isReady(), hasDogs(), shouldStart()

You can also consider using common names for common functions, like all click handlers could be called handleClick() and all submit handlers could be handleSubmit()

Also, be consistent in how you code. If you use semicolons, consistently use them. If you destructure your imports, keep doing that too.

**Activity:** Find some variables or functions that could use better names. Can you find any inconsistent code formatting or patterns (Look at the sentence just before the activity if you're unsure of what this question means)?

## BONUS: Organize code

There are two types of organization: files and directories vs code itself

**Let's start with the code itself:**

- Group imports according to what they're important: e.g. if you're importing an external dependency, like from the node_modules folder, group those together. Next, group your internal imports together, i.e. components and functions that you wrote.

```
import React from 'react';
import { deepCopy } from 'lodash';

import DogContainer from './DogContainer';
import DogFooter from './DogFooter';
```

- For class components, the first method we see should be the constructor() and the last should be render()

**Files and directories:**
As you start building larger projects, you'll want to start organizing your components into different directories. Let's say we had a DogContainer component that rendered several children, and each of those children rendered more children, and we had other components rendering many children, we might want to do something like this inside the components folder:

- components
  - App.js
  - dog
    - DogContainer.js
    - menu
      - MenuContainer.js
      - MenuItem.js
      - MenuExtras.js
    - forms
      - AddDog.js
      - PatchDog.js

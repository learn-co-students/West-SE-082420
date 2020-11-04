- *yarn install*
- *yarn start*

**Component Heirarchy**
```
App.js
└───CharactersPage.js
    ├───FavCharacters.js
    |       └───CharacterCard.js
    ├───Characters.js
    |       └───CharacterCard.js
    └───CharacterInfo
```

**Tasks**

1. render FavCharacters and Characters in CharacterPage (we want FavCharacters to show on the page above Characters)
2. fetch all of the breaking bad characters from the breaking bad api ('// https://www.breakingbadapi.com/api/characters')
3. render all of the characters in Characters.js (which component will we use to render each character in the Characters component?)
4. When a character is clicked on, *conditionally* render the CharacterInfo in place of Charcters
5. add an add to favorites button and a back button to CharacterInfo
6. the add to favorites button should show the character clicked on in FavCharacters.js (which component did we use to render each character in Characters.js? can we use that here?)
7. the back button should go back to showing the Characters again
8. When a character is clicked on in the FavCharacters, it should be removed from FavCharacters


**Things to think about**

- What should be stored in state?
- Which component will hold state?
- Where should you do the fetch to the breaking bad api?
- Are you using functional components instead of class components where applicable?
- Character is rendered in two different components that require different methods for an onClick. How can we do this? (hint: how are methods passed down to child components? )


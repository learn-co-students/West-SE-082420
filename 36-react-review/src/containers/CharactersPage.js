import React, { Component } from "react";
import CharacterInfo from "../components/CharacterInfo";
import Characters from "./Characters";
import FavCharacters from "./FavCharacters";

//https://www.breakingbadapi.com/api/characters
//https://rickandmortyapi.com/api/character/

class CharactersPage extends Component {
  state = {
    characters: [],
    favorites: [],
    activeCharacter: null,
  };

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((resp) => resp.json())
      .then((data) => this.setState({ characters: data.results }));
  }

  addCharacter = (character) => {
    if (!this.state.favorites.includes(character)) {
      this.setState((prevState) => ({
        favorites: [...prevState.favorites, character],
      }));
    }
  };

  removeCharacter = (character) => {
    this.setState((prevState) => ({
      favorites: prevState.favorites.filter((char) => char !== character),
    }));
  };

  displayCharacterInfo = (character) => {
    this.setState({
      activeCharacter: character,
    });
  };

  activeNull = () => {
    this.setState({ activeCharacter: null });
  };

  render() {
    const { characters, favorites, activeCharacter } = this.state;
    console.log(activeCharacter);
    return (
      <div>
        <FavCharacters
          favorites={favorites}
          handleClick={this.removeCharacter}
        />
        {/* <Characters characters={characters} handleClick={this.addCharacter} /> */}
        {!activeCharacter ? (
          <Characters
            characters={characters}
            handleClick={this.displayCharacterInfo}
          />
        ) : (
          <CharacterInfo
            activeCharacter={activeCharacter}
            activeNull={this.activeNull}
            addCharacter={this.addCharacter}
          />
        )}
      </div>
    );
  }
}

export default CharactersPage;

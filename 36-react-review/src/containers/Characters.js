import React, { Component } from "react";
import CharacterCard from "../components/CharacterCard";

class Characters extends Component {
  render() {
    const { characters, handleClick } = this.props;
    return (
      <div className="card-container">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            handleClick={handleClick}
          />
        ))}
      </div>
    );
  }
}

export default Characters;

import React from "react";
import CharacterCard from "../components/CharacterCard";

const FavCharacters = ({ favorites, handleClick }) => {
  return (
    <div className="FavCharacters">
      {favorites.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

export default FavCharacters;

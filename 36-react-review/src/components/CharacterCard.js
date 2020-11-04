import React from "react";

const CharacterCard = ({ character, handleClick }) => {
  return (
    <div className="card" onClick={() => handleClick(character)}>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
    </div>
  );
};

export default CharacterCard;

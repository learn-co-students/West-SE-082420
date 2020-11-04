import React from "react";
// bonus
const CharacterInfo = ({
  activeCharacter: { name, status, species, type, image },
  activeCharacter,
  activeNull,
  addCharacter,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{status}</h3>
      <img src={image} alt={name} />
      <button onClick={activeNull}>Back</button>
      <button onClick={() => addCharacter(activeCharacter)}>
        Add to favorites
      </button>
    </div>
  );
};

export default CharacterInfo;

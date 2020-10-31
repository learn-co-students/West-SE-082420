import React from 'react';

function HogTile({ hog, selectHog }) {
  const { name } = hog;
  const filename = name.toLowerCase().split(' ').join('_');
  const pigImage = require(`../hog-imgs/${filename}.jpg`);

  const handleClick = () => {
    selectHog(name);
  }

  return (
    <div className="ui eight wide column pigTile" onClick={handleClick} >
      <img src={pigImage} alt="Pig" />
      <h3>{name}</h3>
    </div>
  )
}

export default HogTile;
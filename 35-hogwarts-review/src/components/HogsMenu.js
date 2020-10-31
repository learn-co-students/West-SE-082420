import React from 'react';
import HogTile from './HogTile';

function HogsMenu({ hogs, selectHog, greaseFilter, sortType }) {
// greaseFilter = all, greased, ungreased
  const greaseState = greaseFilter === 'greased';

  const filteredHogs = greaseFilter === 'all' ? hogs : hogs.filter((hog) => hog.greased === greaseState);

  // sort hogs options: none, weight, name
  const sortHogs = () => {
    if (sortType === 'none') {
      return filteredHogs;
    }

    if (sortType === 'weight') {
      // a and b refer to different hog objects
      return [...filteredHogs].sort((a, b) => a.weight - b.weight);
    }

    return [...filteredHogs].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }

      return 1;
    });
  }

  return (
    <div className="ui grid container">
      {sortHogs().map(hog => <HogTile hog={hog} selectHog={selectHog} key={hog.name} />)}
    </div>
  )
}

export default HogsMenu;

// onClick={() => functionName}

// myFunction()
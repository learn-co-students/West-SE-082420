import React from 'react';

function Story({ stories }) {
  return (
    <div>
      { stories.map(string => <p key={Math.random()}>{string}</p>) }
    </div>
  )
}

export default Story;
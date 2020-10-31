import React from 'react';

function Sort({ selectSort }) {

  return (
    <div>
      <select onChange={(e) => selectSort(e.target.value)}>
        <option value="none">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default Sort;
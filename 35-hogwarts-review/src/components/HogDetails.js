import React from 'react';

// {
//   name: 'Babe',
//   specialty: 'Being incredibly cute',
//   greased: false,
//   weight: 2.0,
//   'highest medal achieved': 'bronze'
// }

// function whatever(props) {
//   props.stuff;
// }

function HogDetails({ chosenHog, closeHog }) {
  const { name, weight, specialty, greased, ['highest medal achieved']: medal } = chosenHog;

  return (
    <div>
      <button onClick={closeHog}>Close</button>
      <h3>{name}</h3>
      <ul>
        <li>{weight}</li>
        <li>{specialty}</li>
        <li>{greased ? 'I love grease' : 'I hate grease'}</li>
        <li>{medal}</li>
      </ul>
    </div>
  )
}

export default HogDetails;
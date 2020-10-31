import React from 'react';

function UselessText({ message, changeMessage }) {
  // Don't do this
  // message = 'fields';
  const handleClick = () => {
    changeMessage('I am not useless');
  }

  return (
    <div> 
      <button onClick={handleClick}>Change Message</button>
      <p>{message}</p>
    </div>
    
  )
}

export default UselessText;
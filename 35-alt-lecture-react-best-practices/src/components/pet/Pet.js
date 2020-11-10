import React from 'react'
//Can we make this a functional component?
const Pet = ({pet, handleClickDelete, onAdoptPet}) => {

    const { name, age, weight, gender, type, isAdopted, id } = pet;

    const handleClick = () => {
      onAdoptPet(id);
    }

    return (
      <div className="card"  onClick={handleClick}>
        <div className="content">
          <a className="header">
            {gender === 'male' ? '♂' : '♀'}
            {name}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? 
            <div className="ui disabled ">Already adopted</div> :
            <div className="ui primary " >
              Adopt pet
            </div>}
            <button className="ui primary button" onClick={handleClickDelete}>Delete</button>
            
        </div>
      </div>
    )
  
}

export default Pet

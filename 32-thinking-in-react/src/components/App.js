import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onAdoptPet = (id) => {
    const pets = [...this.state.pets];

    this.setState({ pets: pets.map(pet => pet.id !== id ? pet : {...pet, isAdopted: true}) })
    // set state at some point
  }

  onChangeType = (type) => {
    this.setState({ filters: { type } });
  }

  // '/api/pets'
  // '/api/pets?type=cat'

  onFindPetsClick = () => {
    // we'll need a fetch and to put it into the pets array
    let endpoint;
    // const type = this.state.filters.type;

    if (this.state.filters.type === 'all') {
      // fetch to /pets
      endpoint = '/api/pets';
    } else {
      // fetch to other one
      endpoint = `/api/pets?type=${this.state.filters.type}`;
    }

    fetch(endpoint)
    .then(res => res.json())
    .then(pets => this.setState({ pets }));
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

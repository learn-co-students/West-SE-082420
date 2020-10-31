import Filters from './Filters';
import PetBrowser from './PetBrowser';
import React from 'react';
import Cage from './Cage';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }, 
      filteredPets: [], /* ADD STATE FOR CHOSEN PETS */
      isCaged: false /* FOR CAGED COMPONENT */
    }
  }
  // SET STATE WITH ONE FETCH
  componentDidMount() {
    const endpoint = '/api/pets';

    fetch(endpoint)
    .then(res => res.json())
    .then(pets => {
      this.setState({ pets });
      this.setState({ filteredPets: pets });
    });
  }

  onChangeType = (e) => {
    this.setState({ filters: { type: e.target.value } });
  };
  // MODIFY TO CHOOSE THE PET TYPE FROM PETS AND UPDATE FILTERED PETS
  onFindPetsClick = () => {
    const filterType = this.state.filters.type;

    if (filterType === 'all') {
      this.setState({ filteredPets: this.state.pets });
      return;
    }

    this.setState({ filteredPets: this.state.pets.filter(pet => pet.type === filterType) });
  };
  // MODIFY TO UPDATE THE FILTERED PET
  onAdoptPet = (id) => {
    // update pet in state to isAdopted: true
    this.setState({ 
      filteredPets: this.state.filteredPets.map(pet => 
        pet.id === id ? {...pet, isAdopted: true} : pet) 
    });
  };

  setCaged = () => {
    this.setState({ isCaged: !this.state.isCaged });
  };

  render() {
    return <>
      {/* CONDITIONALLY SHOW CAGED COMPONENT */}
      {this.state.isCaged ? <Cage /> : null}

      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
              <button onClick={this.setCaged} className="ui secondary button cage-btn" >
                  Toggle Cage
              </button>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.filteredPets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    </>
  }
}

export default App;

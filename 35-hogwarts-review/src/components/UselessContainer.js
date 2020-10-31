import React, { Component } from 'react';
import UselessText from './UselessText';

class UselessContainer extends Component {
  constructor() {
    super();

    this.state = {
      message: "I'm useless"
    }
  }

  changeMessage = (message) => {
    this.setState({ message });
  }

  render() {
    return (
      <div>
        <UselessText message={this.state.message} changeMessage={this.changeMessage} />
      </div>
    )
  }
}

export default UselessContainer;
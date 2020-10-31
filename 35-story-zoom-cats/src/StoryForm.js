import React, { Component } from 'react';

class StoryForm extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddStory(this.state.text);

    this.setState({ text: '' });
  }

  handleChange = e => {
    this.setState({ text: e.target.value });
  }

  render() {
    return <form onSubmit={this.onSubmit}>
      <label htmlFor="story">Story text: </label>
      <input type="text" id="story" onChange={this.handleChange} value={this.state.text} />

      <input type="submit" value="Submit" />
    </form>
  }
}

export default StoryForm;
import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import StoryForm from './StoryForm';
import ZoomCat from './ZoomCat';
import Story from './Story';

class App extends Component {
  state = {
    stories: []
  }

  onAddStory = story => {
    const stories = [...this.state.stories];

    stories.push(story);
    this.setState({ stories });
  }

  render() {
    return (
      <div className="App">
        <StoryForm onAddStory={this.onAddStory} />
        <Story stories={this.state.stories} />
        <ZoomCat storyLen={this.state.stories.length} />
      </div>
    )
  }
  
}

export default App;

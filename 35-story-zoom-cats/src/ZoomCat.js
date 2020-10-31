import React, { Component } from 'react';


class ZoomCat extends Component {
  constructor() {
    super();
  }

  render() {
    const {storyLen} = this.props;

    return <div>
      { storyLen === 6 ?  
        <img src="https://media1.tenor.com/images/9adac580b80d38770f8a744e1bb86314/tenor.gif?itemid=3559758" alt="cat" /> :
        null
      }
    </div>
  }
}

export default ZoomCat;
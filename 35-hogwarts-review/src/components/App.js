import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import HogsContainer from "./HogsContainer";
import UselessContainer from "./UselessContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UselessContainer />
        <Header />
        <HogsContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LightsSquare from './components/LightsSquare';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LightsSquare />
      </div>
    );
  }
}

// <img src={logo} className="App-logo" alt="logo" />

export default App;

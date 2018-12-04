import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LightsSquare from './components/LightsSquare';
import Controls from './components/Controls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="gamepad">
          <LightsSquare />
          <Controls />
        </div>
      </div>
    );
  }
}

// <img src={logo} className="App-logo" alt="logo" />

export default App;

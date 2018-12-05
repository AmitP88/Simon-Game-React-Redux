import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LightsSquare from './components/LightsSquare';
import Controls from './components/Controls';

import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <div className="gamepad">
            <LightsSquare />
            <Controls />
          </div>
        </div>      
      </Provider>
    );
  }
}

// <img src={logo} className="App-logo" alt="logo" />

export default App;

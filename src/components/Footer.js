import React, { Component } from 'react';
import react from '../react.png';
import redux from '../redux.svg';
import Tooltip from "react-simple-tooltip";

import '../css/Footer.css';

class Footer extends Component {
    render() {
      return (
        <footer>
          <div className="builtWith">
            Built with React <img src={react} className="App-logo" alt="logo" /> and Redux <img src={redux} className="App-logo" alt="logo" />
          </div>
            
            <a href="https://github.com/AmitP88/Tic-Tac-Toe-React-Redux" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github fa-4x"></i>
            </a>      
            <p>Developed by <a href="https://github.com/AmitP88" target="_blank" rel="noopener noreferrer" className="github-profile-link">Amit Patel</a></p>      
        </footer>
      );
    }
}

export default Footer;
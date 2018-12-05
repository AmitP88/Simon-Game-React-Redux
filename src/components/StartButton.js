import React, { Component } from 'react';
import store from '../store/store';
import { startClicked } from '../actions/StartButtonActions';

class StartButton extends Component {
    handleStartClick() {
        store.dispatch(startClicked());
    }

    render() {
        return (
            <div className="StartButton-container">
                <button className="StartButton ripple" onClick={this.handleStartClick.bind(this)}>Start</button>
            </div>
        );
    }
}

export default StartButton;
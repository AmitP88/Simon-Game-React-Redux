import React, { Component } from 'react';
import OnOffSwitch from './OnOffSwitch';
import StartButton from './StartButton';

class Controls extends Component {
    render() {
        return (
            <div className="Controls">
                <OnOffSwitch />
                <StartButton />
            </div>
        );
    }
}

export default Controls;
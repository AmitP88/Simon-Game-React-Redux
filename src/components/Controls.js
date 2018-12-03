import React, { Component } from 'react';
import OnOffSwitch from './OnOffSwitch';
import StartButton from './StartButton';
import LevelCounter from './LevelCounter';

class Controls extends Component {
    render() {
        return (
            <div className="Controls">
                <OnOffSwitch />
                <StartButton />
                <LevelCounter />
            </div>
        );
    }
}

export default Controls;
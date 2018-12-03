import React, { Component } from 'react';
import OnOffSwitch from './OnOffSwitch';
import StartButton from './StartButton';
import LevelCounter from './LevelCounter';
import HardMode from './HardMode';

class Controls extends Component {
    render() {
        return (
            <div className="Controls">
                <OnOffSwitch />
                <StartButton />
                <LevelCounter />
                <HardMode />
            </div>
        );
    }
}

export default Controls;
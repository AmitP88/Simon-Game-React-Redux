import React, { Component } from 'react';
import OnOffSwitch from './OnOffSwitch';
import StartButton from './StartButton';
import LevelCounter from './LevelCounter';
import HardMode from './HardMode';
import Simon from './Simon';

import '../css/Controls.css';

class Controls extends Component {
    render() {
        return (
            <div className="Controls">
                <Simon />
                <OnOffSwitch />
                <StartButton />
                <LevelCounter />
                <HardMode />
            </div>
        );
    }
}

export default Controls;
import React, { Component } from 'react';
import OnOffSwitch from './OnOffSwitch'; 

class Controls extends Component {
    render() {
        return (
            <div className="Controls">
                <OnOffSwitch />
            </div>
        );
    }
}

export default Controls;
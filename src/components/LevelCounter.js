import React, { Component } from 'react';

class LevelCounter extends Component {
    render() {
        return (
            <div className="LevelCounter-container">
                <div className="LevelCounter"></div>
                <div className="LevelCounter-label">Level</div>
            </div>
        );
    }
}

export default LevelCounter;
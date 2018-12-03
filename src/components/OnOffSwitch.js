import React, { Component } from 'react';

class OnOffSwitch extends Component {
    render() {
        return (
            <div className="OnOffSwitch-container">
                <label className="Off-label">Off</label>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <label className="On-label">On</label>
            </div>
        );
    }
}

export default OnOffSwitch;
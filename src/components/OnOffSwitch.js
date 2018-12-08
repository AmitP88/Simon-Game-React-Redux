import React, { Component } from 'react';
import store from '../store/store';
import { turnOn, turnOff } from '../actions/OnOffSwitchActions';
import { resetLevelCounter } from '../actions/LevelCounterActions';
import { levelCounter_default } from '../actions/LevelCounterBackgroundActions';

class OnOffSwitch extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if(store.getState().OnOffSwitchReducer.on === false){
            store.dispatch(turnOn());           
        } else {
            store.dispatch(turnOff());
            store.dispatch(resetLevelCounter());
            store.dispatch(levelCounter_default());
        }        
    }

    render() {
        return (
            <div className="OnOffSwitch-container">
                <label className="Off-label">Off</label>
                <label className="switch">
                    <input type="checkbox" onChange={this.handleChange} />
                    <span className="slider round"></span>
                </label>
                <label className="On-label">On</label>
            </div>
        );
    }
}

export default OnOffSwitch;
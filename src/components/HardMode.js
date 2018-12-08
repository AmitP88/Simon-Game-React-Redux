import React, { Component } from 'react';
import store from '../store/store';
import { connect } from 'react-redux';
import { turnHardModeOn, turnHardModeOff } from '../actions/HardModeActions';

import '../css/HardMode.css';

class HardMode extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        if(this.props.hardmode === false) {
            store.dispatch(turnHardModeOn());
            setTimeout(() => {
                console.log(this.props.hardmode);
            }, 100);

        } else if (this.props.hardmode === true) {
            store.dispatch(turnHardModeOff());
            setTimeout(() => {
                console.log(this.props.hardmode);
            }, 100);
        }
    }

    render() {
        return(
            <div className="HardMode-container">
                <label className="easy">Easy</label>
                <label className="switch hardmode">
                    <input type="checkbox" onChange={this.handleChange} />
                    <span className="slider round"></span>
                </label>
                <label className="hard">Hard</label>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        hardmode: state.HardModeReducer.hardmode
    }
}

export default connect(mapStateToProps)(HardMode);
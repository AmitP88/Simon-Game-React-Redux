import React, { Component } from 'react';
import { connect } from 'react-redux';

class LevelCounter extends Component {
    render() {
        return (
            <div className="LevelCounter-container">
                <div className={this.props.levelCounterBackground}>
                    <div className="counter">{this.props.levelCounter}</div>
                </div>
                <div className="LevelCounter-label">Level</div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        levelCounter: state.LevelCounterReducer.levelCounter,
        levelCounterBackground: state.LevelCounterBackgroundReducer.levelCounterBackground
    }
}

export default connect(mapStateToProps)(LevelCounter);
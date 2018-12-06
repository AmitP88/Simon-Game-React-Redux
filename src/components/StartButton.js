import React, { Component } from 'react';
import store from '../store/store';
import { connect } from 'react-redux';
import { startClicked } from '../actions/StartButtonActions';
import { incrementLevelCounter } from '../actions/LevelCounterActions';

class StartButton extends Component {
    constructor(props){
        super(props);
        this.computersTurn = this.computersTurn.bind(this);
        this.handleStartClick = this.handleStartClick.bind(this);
    }

    computersTurn(){
        /* increment levelCounter & change levelCounter background color */
        console.log('computers turn');
        store.dispatch(incrementLevelCounter());

        /* dispatch a random colorInput a number of times depending on the value of levelCounter */


    }

    handleStartClick() {
        store.dispatch(startClicked());
        if(this.props.OnOffSwitch === true && this.props.turn === 'computer'){
            this.computersTurn();
        }
    }

    render() {
        return (
            <div className="StartButton-container">
                <button className="StartButton ripple" onClick={this.handleStartClick}>Start</button>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        OnOffSwitch: state.OnOffSwitchReducer.on,
        turn: state.TurnReducer.turn
    }
}

export default connect(mapStateToProps)(StartButton);
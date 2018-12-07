import React, { Component } from 'react';
import store from '../store/store';
import { connect } from 'react-redux';
import { startClicked } from '../actions/StartButtonActions';
import { incrementLevelCounter, resetLevelCounter } from '../actions/LevelCounterActions';
import { computerRedInput, computerGreenInput, computerBlueInput, computerPurpleInput, clearComputerInput } from '../actions/ComputerInputActions';
import { computersTurn, playersTurn } from '../actions/TurnActions';
import { clearPlayerInput } from '../actions/PlayerInputActions';

import {
    // when light square is clicked
    redClicked,
    greenClicked, 
    blueClicked, 
    purpleClicked,

    // revert square back to dark color after click
    redReverted,
    greenReverted,
    blueReverted,
    purpleReverted
} from '../actions/LightSquareActions';

export const availableComputerInputs = [
    computerRedInput(),
    computerGreenInput(), 
    computerBlueInput(), 
    computerPurpleInput()
];

export const randomComputerInput = () => availableComputerInputs[Math.floor(Math.random()*availableComputerInputs.length)];  

class StartButton extends Component {
    constructor(props){
        super(props);
        this.handleStartClick = this.handleStartClick.bind(this);
        this.initialComputersTurn = this.initialComputersTurn.bind(this);
    }

    // When the user clicks Start, starts the game off with the computer starting at level 1
    initialComputersTurn(){
        setTimeout(() => {
            /* increment levelCounter & change levelCounter background color */
            store.dispatch(incrementLevelCounter());

            /* dispatch a random colorInput only once, since this is the 1st level (subsequent levels will be generated in LightSquare component) */
            store.dispatch(randomComputerInput());

            let computers1stMove = store.getState().ComputerInputReducer.computerInput[0];

            /* based on what input is in computerInput state, dispatch action that lights up corresponding colored square */
            switch(computers1stMove){
                case 'red':
                    store.dispatch(redClicked());
                    setTimeout(() => {
                        store.dispatch(redReverted());
                    }, 300);
                    break;
                case 'green':
                    store.dispatch(greenClicked());
                    setTimeout(() => {
                        store.dispatch(greenReverted());
                    }, 300);
                    break;
                case 'blue':
                    store.dispatch(blueClicked());
                    setTimeout(() => {
                        store.dispatch(blueReverted());
                    }, 300);
                    break;
                case 'purple':
                    store.dispatch(purpleClicked());
                    setTimeout(() => {
                        store.dispatch(purpleReverted());
                    }, 300);
                    break;
                default:
                    console.log(computers1stMove);
            }

            /* change turn state to 'player', ending computers turn */
            store.dispatch(playersTurn());

            console.log(store.getState());  
        }, 1000);
    }

    handleStartClick() {
        store.dispatch(clearPlayerInput());
        store.dispatch(clearComputerInput());
        store.dispatch(resetLevelCounter());
        store.dispatch(computersTurn());
        setTimeout(() => {
            if(this.props.OnOffSwitch && this.props.turn === 'computer'){
                store.dispatch(startClicked());
                this.initialComputersTurn();
            }
        }, 500);

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
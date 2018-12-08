import React, { Component } from 'react';
import store from '../store/store';
import { connect } from 'react-redux';
import { startClicked } from '../actions/StartButtonActions';
import { incrementLevelCounter, resetLevelCounter } from '../actions/LevelCounterActions';
import { computerRedInput, computerGreenInput, computerBlueInput, computerPurpleInput, clearComputerInput } from '../actions/ComputerInputActions';
import { computersTurn, playersTurn } from '../actions/TurnActions';
import { clearPlayerInput } from '../actions/PlayerInputActions';

import { levelCounter_1 } from '../actions/LevelCounterBackgroundActions';
import { counterBelow10 } from '../actions/CounterClassActions';

import simonSound1 from '../sounds/simonSound1.mp3';
import simonSound2 from '../sounds/simonSound2.mp3';
import simonSound3 from '../sounds/simonSound3.mp3';
import simonSound4 from '../sounds/simonSound4.mp3';

import '../css/StartButton.css';

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

        // Sounds for square clicks
        this.soundRed = new Audio(simonSound1);
        this.soundGreen = new Audio(simonSound2);
        this.soundBlue = new Audio(simonSound3);
        this.soundPurple = new Audio(simonSound4);
    }

    // When the user clicks Start, starts the game off with the computer starting at level 1
    initialComputersTurn(){
        setTimeout(() => {
            /* increment levelCounter & change levelCounter background color */
            store.dispatch(incrementLevelCounter());
            store.dispatch(levelCounter_1());
        }, 500);
     
        setTimeout(() => {
            /* dispatch a random colorInput only once, since this is the 1st level (subsequent levels will be generated in LightSquare component) */
            store.dispatch(randomComputerInput());

            let computers1stMove = store.getState().ComputerInputReducer.computerInput[0];

            /* based on what input is in computerInput state, dispatch action that lights up corresponding colored square */
            switch(computers1stMove){
                case 'red':
                    store.dispatch(redClicked());
                    this.soundRed.play();
                    setTimeout(() => {
                        store.dispatch(redReverted());
                    }, 300);
                    break;
                case 'green':
                    store.dispatch(greenClicked());
                    this.soundGreen.play();
                    setTimeout(() => {
                        store.dispatch(greenReverted());
                    }, 300);
                    break;
                case 'blue':
                    store.dispatch(blueClicked());
                    this.soundBlue.play();
                    setTimeout(() => {
                        store.dispatch(blueReverted());
                    }, 300);
                    break;
                case 'purple':
                    store.dispatch(purpleClicked());
                    this.soundPurple.play();
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
        }, 1500);
    }

    handleStartClick() {
        store.dispatch(clearPlayerInput());
        store.dispatch(clearComputerInput());
        store.dispatch(resetLevelCounter());
        store.dispatch(counterBelow10());
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
        turn: state.TurnReducer.turn,
        levelCounter: state.LevelCounterReducer.levelCounter,
        levelCounterBackground: state.LevelCounterBackgroundReducer.levelCounterBackground
    }
}

export default connect(mapStateToProps)(StartButton);
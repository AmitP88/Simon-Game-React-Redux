import React, { Component } from 'react';
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
import { incrementLevelCounter } from '../actions/LevelCounterActions';
import { playerRedInput, playerGreenInput, playerBlueInput, playerPurpleInput } from '../actions/PlayerInputActions';
import { computerRedInput, computerGreenInput, computerBlueInput, computerPurpleInput } from '../actions/ComputerInputActions';
import { playersTurn } from '../actions/TurnActions';
import store from '../store/store';
import { connect } from 'react-redux';

class LightsSquare extends Component {
    constructor(props) {
        super(props);
        this.playersTurn = this.playersTurn.bind(this);
        this.computersTurn = this.computersTurn.bind(this);
    }

    computersTurn(){
        let availableComputerInputs = [
            computerRedInput(),
            computerGreenInput(), 
            computerBlueInput(), 
            computerPurpleInput()
        ];

        let randomComputerInput = () => availableComputerInputs[Math.floor(Math.random()*availableComputerInputs.length)];  

        /* increment levelCounter & change levelCounter background color */
        store.dispatch(incrementLevelCounter());

        /* dispatch a random colorInput only once, since this is the 1st level (subsequent levels will be generated in LightSquare component) */
        store.dispatch(randomComputerInput());

        /* based on what input is in computerInput state, dispatch action that lights up corresponding colored square */

        /* change turn state to 'player', ending computers turn */
        store.dispatch(playersTurn());
        
        console.log(store.getState());
    }

    playersTurn(e){
        switch(e.target.id){
            case 'red':
                store.dispatch(redClicked());
                store.dispatch(playerRedInput());
                setTimeout(() => {
                    store.dispatch(redReverted());
                }, 300);
                break;
            case 'green':
                store.dispatch(greenClicked());
                store.dispatch(playerGreenInput());
                setTimeout(() => {
                    store.dispatch(greenReverted());
                }, 300);
                break;
            case 'blue':
                store.dispatch(blueClicked());
                store.dispatch(playerBlueInput());
                setTimeout(() => {
                    store.dispatch(blueReverted());
                }, 300);
                break;
            case 'purple':
                store.dispatch(purpleClicked());
                store.dispatch(playerPurpleInput());
                setTimeout(() => {
                    store.dispatch(purpleReverted());
                }, 300);
                break;
            default:
                console.log(e.target.id);
                break;
        }
    }

    render() {
        return (
            <div className="LightsSquare-container">
                <div className="topHalf">
                    <div id="red" className={this.props.LightSquares.red} onClick={
                        this.props.OnOffSwitch && this.props.StartButton && this.props.turn === 'computer' ? this.computersTurn : this.playersTurn
                    }></div>
                    <div id="green" className={this.props.LightSquares.green} onClick={
                        this.props.OnOffSwitch && this.props.StartButton && this.props.turn === 'computer' ? this.computersTurn : this.playersTurn
                    }></div>                
                </div>
                <div className="bottomHalf">
                    <div id="blue" className={this.props.LightSquares.blue} onClick={
                        this.props.OnOffSwitch && this.props.StartButton && this.props.turn === 'computer' ? this.computersTurn : this.playersTurn
                    }></div>
                    <div id="purple" className={this.props.LightSquares.purple} onClick={
                        this.props.OnOffSwitch && this.props.StartButton && this.props.turn === 'computer' ? this.computersTurn : this.playersTurn
                    }></div>
                </div>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        LightSquares: state.LightsSquareReducer.lightSquares,
        OnOffSwitch: state.OnOffSwitchReducer.on,
        StartButton: state.StartButtonReducer.startClicked,
        turn: state.TurnReducer.turn
    }
}

export default connect(mapStateToProps)(LightsSquare);
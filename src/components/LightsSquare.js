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
import { playerRedInput, playerGreenInput, playerBlueInput, playerPurpleInput, clearPlayerInput } from '../actions/PlayerInputActions';
import store from '../store/store';
import { connect } from 'react-redux';

import { computersTurn ,playersTurn } from '../actions/TurnActions';
import { incrementLevelCounter } from '../actions/LevelCounterActions';
import { randomComputerInput } from '../components/StartButton';

class LightsSquare extends Component {
    constructor(props) {
        super(props);
        this.playersTurn = this.playersTurn.bind(this);
        this.computersTurn = this.computersTurn.bind(this);
    }

    computersTurn(){
        setTimeout(() => {
        /* increment levelCounter & change levelCounter background color */
            store.dispatch(incrementLevelCounter());

        /* dispatch a random colorInput */
            store.dispatch(randomComputerInput());
            console.log('computerInput : ', this.props.computerInput);



        /* loop through computerInput and press colored squares based on each index value */
        for(let i = 0; i < this.props.computerInput.length; i++){
            /* based on what input is in computerInput state,
               dispatch action that lights up corresponding colored square */

            setTimeout(() => {
                switch(this.props.computerInput[i]){
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
                        console.log(this.props.computerInput[i]);
                }                
            }, i * 500);
        }
            // Clears playerInput array before starting players turn
            store.dispatch(clearPlayerInput());

            // Ends computers turn and starts player turn
            store.dispatch(playersTurn());
        }, 1000);
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

        setTimeout(() => {
            console.log('playerInput : ', this.props.playerInput);

            const moveMatch = (playerInput, computerInput) => {
                playerInput = this.props.playerInput;
                computerInput = this.props.computerInput;

                for(let i = 0; i < playerInput.length; i++){
                    if (playerInput[i] !== computerInput[i]){
                        console.log('wrong move');
                        store.dispatch(clearPlayerInput());
                    }
                }
            };

            moveMatch();
            
            if(this.props.playerInput.length === this.props.computerInput.length){
                store.dispatch(computersTurn());
                this.computersTurn();            
            }

        }, 100);

    }

    render() {
        return (
            <div className="LightsSquare-container">
                <div className="topHalf">
                    <div id="red" className={this.props.LightSquares.red} onClick={this.props.OnOffSwitch && this.props.StartButton && this.props.turn === 'player' ? this.playersTurn : this.props.disabled}></div>
                    <div id="green" className={this.props.LightSquares.green} onClick={this.props.OnOffSwitch && this.props.StartButton && this.props.turn === 'player' ? this.playersTurn : this.props.disabled}></div>                
                </div>
                <div className="bottomHalf">
                    <div id="blue" className={this.props.LightSquares.blue} onClick={this.props.OnOffSwitch && this.props.StartButton && this.props.turn === 'player' ? this.playersTurn : this.props.disabled}></div>
                    <div id="purple" className={this.props.LightSquares.purple} onClick={this.props.OnOffSwitch && this.props.StartButton && this.props.turn === 'player' ? this.playersTurn : this.props.disabled}></div>
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
        turn: state.TurnReducer.turn,
        computerInput: state.ComputerInputReducer.computerInput,
        playerInput: state.PlayerInputReducer.playerInput
    }
}

export default connect(mapStateToProps)(LightsSquare);
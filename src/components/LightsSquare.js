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
import { incrementLevelCounter, resetLevelCounter } from '../actions/LevelCounterActions';
import { randomComputerInput } from '../components/StartButton';

import { clearComputerInput } from '../actions/ComputerInputActions';

import simonSound1 from '../sounds/simonSound1.mp3';
import simonSound2 from '../sounds/simonSound2.mp3';
import simonSound3 from '../sounds/simonSound3.mp3';
import simonSound4 from '../sounds/simonSound4.mp3';



class LightsSquare extends Component {
    constructor(props) {
        super(props);
        this.playersTurn = this.playersTurn.bind(this);
        this.computersTurn = this.computersTurn.bind(this);

        // Sounds for square clicks
        this.soundRed = new Audio(simonSound1);
        this.soundGreen = new Audio(simonSound2);
        this.soundBlue = new Audio(simonSound3);
        this.soundPurple = new Audio(simonSound4);
    }

    computersTurn(){
        setTimeout(() => {
            /* increment levelCounter & change levelCounter background color */
                store.dispatch(incrementLevelCounter());
        }, 1000);

        setTimeout(() => {
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
                        console.log(this.props.computerInput[i]);
                }                
            }, i * 500);
        }
            // Clears playerInput array before starting players turn
            store.dispatch(clearPlayerInput());

            // Ends computers turn and starts player turn
            store.dispatch(playersTurn());
        }, 1500);
    }

    playersTurn(e){        
        switch(e.target.id){
            case 'red':
                store.dispatch(redClicked());
                this.soundRed.play();
                store.dispatch(playerRedInput());
                setTimeout(() => {
                    store.dispatch(redReverted());
                }, 300);
                break;
            case 'green':
                store.dispatch(greenClicked());
                this.soundGreen.play();
                store.dispatch(playerGreenInput());
                setTimeout(() => {
                    store.dispatch(greenReverted());
                }, 300);
                break;
            case 'blue':
                store.dispatch(blueClicked());
                this.soundBlue.play();
                store.dispatch(playerBlueInput());
                setTimeout(() => {
                    store.dispatch(blueReverted());
                }, 300);
                break;
            case 'purple':
                store.dispatch(purpleClicked());
                this.soundPurple.play();
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

            // Checks to see if players moves are the same as the computers moves
            const moveMatch = (playerInput, computerInput) => {
                playerInput = this.props.playerInput;
                computerInput = this.props.computerInput;

                for(let i = 0; i < playerInput.length; i++){
                    /** If player makes a wrong move (a move that is different than computers move),
                        resets playerInput back to an empty array */ 
                    if (playerInput[i] !== computerInput[i]){
                        console.log('wrong move');
                        store.dispatch(clearPlayerInput());

                        // If on EASY mode, computer replays current computerInput array button presses
                        if(this.props.hardmode === false) {
                            // plays computers move again
                            setTimeout(() => {
                                /* loop through computerInput and press colored squares based on each index value */
                                for(let i = 0; i < this.props.computerInput.length; i++){
                                    /* based on what input is in computerInput state,
                                    dispatch action that lights up corresponding colored square */

                                    setTimeout(() => {
                                        switch(this.props.computerInput[i]){
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
                                                console.log(this.props.computerInput[i]);
                                        }                
                                    }, i * 500);
                                }
                            }, 1000);                            
                        } else if(this.props.hardmode){
                            setTimeout(() => {
                                store.dispatch(clearComputerInput());
                                store.dispatch(resetLevelCounter());
                                store.dispatch(computersTurn());
                            }, 500);
                            this.computersTurn();
                        }
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
        playerInput: state.PlayerInputReducer.playerInput,
        hardmode: state.HardModeReducer.hardmode
    }
}

export default connect(mapStateToProps)(LightsSquare);
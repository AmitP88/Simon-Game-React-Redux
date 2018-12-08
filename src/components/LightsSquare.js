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

import { simon, simonWrongMove } from '../actions/SimonActions';

import {
    levelCounter_default,
    levelCounter_1,
    levelCounter_2,
    levelCounter_3,
    levelCounter_4,
    levelCounter_5,
    levelCounter_6,
    levelCounter_7,
    levelCounter_8,
    levelCounter_9,
    levelCounter_10,
    levelCounter_11,
    levelCounter_12,
    levelCounter_13,
    levelCounter_14,
    levelCounter_15,
    levelCounter_16,
    levelCounter_17,
    levelCounter_18,
    levelCounter_19,
    levelCounter_20
} from '../actions/LevelCounterBackgroundActions';

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
                switch(this.props.levelCounter){
                    case 1:
                        store.dispatch(levelCounter_1());
                        break;
                    case 2:
                        store.dispatch(levelCounter_2());
                        break;
                    case 3:
                        store.dispatch(levelCounter_3());
                        break;
                    case 4:
                        store.dispatch(levelCounter_4());
                        break;
                    case 5:
                        store.dispatch(levelCounter_5());
                        break;
                    case 6:
                        store.dispatch(levelCounter_6());
                        break;
                    case 7:
                        store.dispatch(levelCounter_7());
                        break;
                    case 8:
                        store.dispatch(levelCounter_8());
                        break;
                    case 9:
                        store.dispatch(levelCounter_9());
                        break;
                    case 10:
                        store.dispatch(levelCounter_10());
                        break;
                    case 11:
                        store.dispatch(levelCounter_11());
                        break;
                    case 12:
                        store.dispatch(levelCounter_12());
                        break;
                    case 13:
                        store.dispatch(levelCounter_13());
                        break;
                    case 14:
                        store.dispatch(levelCounter_14());
                        break;
                    case 15:
                        store.dispatch(levelCounter_15());
                        break;
                    case 16:
                        store.dispatch(levelCounter_16());
                        break;
                    case 17:
                        store.dispatch(levelCounter_17());
                        break;
                    case 18:
                        store.dispatch(levelCounter_18());
                        break;
                    case 19:
                        store.dispatch(levelCounter_19());
                        break;
                    case 20:
                        store.dispatch(levelCounter_20());
                        break;
                    default:
                        store.dispatch(levelCounter_default());
                        break;
                }
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
                        setTimeout(() => {
                            this.soundRed.play();
                        }, 400);
                        setTimeout(() => {
                            store.dispatch(redReverted());
                        }, 400);
                        break;
                    case 'green':
                        store.dispatch(greenClicked());
                        setTimeout(() => {
                            this.soundGreen.play();
                        }, 400);
                        setTimeout(() => {
                            store.dispatch(greenReverted());
                        }, 400);
                        break;
                    case 'blue':
                        store.dispatch(blueClicked());
                        setTimeout(() => {
                            this.soundBlue.play();
                        }, 400);
                        setTimeout(() => {
                            store.dispatch(blueReverted());
                        }, 400);
                        break;
                    case 'purple':
                        store.dispatch(purpleClicked());
                        setTimeout(() => {
                            this.soundPurple.play();
                        }, 400);
                        setTimeout(() => {
                            store.dispatch(purpleReverted());
                        }, 400);
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
                setTimeout(() => {
                    this.soundRed.play();
                }, 400);
                store.dispatch(playerRedInput());
                setTimeout(() => {
                    store.dispatch(redReverted());
                }, 400);
                break;
            case 'green':
                store.dispatch(greenClicked());
                setTimeout(() => {
                    this.soundGreen.play();
                }, 400);
                store.dispatch(playerGreenInput());
                setTimeout(() => {
                    store.dispatch(greenReverted());
                }, 400);
                break;
            case 'blue':
                store.dispatch(blueClicked());
                setTimeout(() => {
                    this.soundBlue.play();
                }, 400);
                store.dispatch(playerBlueInput());
                setTimeout(() => {
                    store.dispatch(blueReverted());
                }, 400);
                break;
            case 'purple':
                store.dispatch(purpleClicked());
                setTimeout(() => {
                    this.soundPurple.play();
                }, 400);
                store.dispatch(playerPurpleInput());
                setTimeout(() => {
                    store.dispatch(purpleReverted());
                }, 400);
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
                        
                        store.dispatch(simonWrongMove());

                        setTimeout(() => {
                            store.dispatch(simon());
                        }, 300);

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
                                                setTimeout(() => {
                                                    this.soundRed.play();
                                                }, 400);
                                                setTimeout(() => {
                                                    store.dispatch(redReverted());
                                                }, 400);
                                                break;
                                            case 'green':
                                                store.dispatch(greenClicked());
                                                setTimeout(() => {
                                                    this.soundGreen.play();
                                                }, 400);
                                                setTimeout(() => {
                                                    store.dispatch(greenReverted());
                                                }, 400);
                                                break;
                                            case 'blue':
                                                store.dispatch(blueClicked());
                                                setTimeout(() => {
                                                    this.soundBlue.play();
                                                }, 400);
                                                setTimeout(() => {
                                                    store.dispatch(blueReverted());
                                                }, 400);
                                                break;
                                            case 'purple':
                                                store.dispatch(purpleClicked());
                                                setTimeout(() => {
                                                    this.soundPurple.play();
                                                }, 400);
                                                setTimeout(() => {
                                                    store.dispatch(purpleReverted());
                                                }, 400);
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

                    // Player completes level 20 and wins the game
                    if(playerInput.length === 2 && computerInput.length === 2 && playerInput[i] === computerInput[i]){
                        console.log('Victory Achieved!');

                        const victory = () => {
                            setTimeout(() => {
                                store.dispatch(redClicked());
                            }, 200);
                            setTimeout(() => {
                                store.dispatch(greenClicked());
                            }, 400);
                            setTimeout(() => {
                                store.dispatch(purpleClicked());
                            }, 600);
                            setTimeout(() => {
                                store.dispatch(blueClicked());
                            }, 800); 
                                                  
                        }

                        let interval = setInterval(victory, 700);

                        setTimeout(() => {
                            clearInterval(interval);
                            setTimeout(() => {
                                store.dispatch(blueReverted());
                            }, 100);
                        }, 5000);

                       

                    }









                }
            };

            moveMatch();

            if(this.props.playerInput.length === this.props.computerInput.length && this.props.computerInput.length <= 1){
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
        hardmode: state.HardModeReducer.hardmode,
        levelCounter: state.LevelCounterReducer.levelCounter
    }
}

export default connect(mapStateToProps)(LightsSquare);
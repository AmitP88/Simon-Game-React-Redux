import { createStore, combineReducers, applyMiddleware } from 'redux';
import OnOffSwitchReducer from '../reducers/OnOffSwitchReducer';
import LightsSquareReducer from '../reducers/LightSquareReducer';
import PlayerInputReducer from '../reducers/PlayerInputReducer';
import StartButtonReducer from '../reducers/StartButtonReducer';
import TurnReducer from '../reducers/TurnReducer';
import LevelCounterReducer from '../reducers/LevelCounterReducer';
import ComputerInputReducer from '../reducers/ComputerInputReducer';
import thunk from 'redux-thunk';

export const initialState = {
    on: false,
    startClicked: false,
    levelCounter: '',
    hardmode: false,
    computerInput : [],
    playerInput : [],
    lightSquares: {
        red: 'dark_red',
        green: 'dark_green',
        blue: 'dark_blue',
        purple: 'dark_purple'
    },
    turn: 'computer'
};

export const store = createStore(
    combineReducers({
        OnOffSwitchReducer,
        LightsSquareReducer,
        PlayerInputReducer,
        StartButtonReducer,
        TurnReducer,
        LevelCounterReducer,
        ComputerInputReducer
    }),
    applyMiddleware(thunk)
);

store.subscribe(() => store.getState());

export default store;
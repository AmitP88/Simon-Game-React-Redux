import { createStore, combineReducers, applyMiddleware } from 'redux';
import OnOffSwitchReducer from '../reducers/OnOffSwitchReducer';
import LightsSquareReducer from '../reducers/LightSquareReducer';
import playerInputReducer from '../reducers/playerInputReducer';
import thunk from 'redux-thunk';

export const initialState = {
    on: false,
    startClicked: false,
    levelCounter: '',
    hardmode: false,
    levelInput : [],
    playerInput : [],
    lightSquares: {
        red: 'dark_red',
        green: 'dark_green',
        blue: 'dark_blue',
        purple: 'dark_purple'        
    }
};

export const store = createStore(
    combineReducers({
        OnOffSwitchReducer,
        LightsSquareReducer,
        playerInputReducer
    }),
    applyMiddleware(thunk)
);

store.subscribe(() => store.getState());

export default store;
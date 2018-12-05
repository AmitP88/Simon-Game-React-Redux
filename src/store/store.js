import { createStore, combineReducers, applyMiddleware } from 'redux';
import OnOffSwitchReducer from '../reducers/OnOffSwitchReducer';
import LightsSquareReducer from '../reducers/LightSquareReducer';
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
        LightsSquareReducer
    }),
    applyMiddleware(thunk)
);

store.subscribe(() => store.getState());

export default store;
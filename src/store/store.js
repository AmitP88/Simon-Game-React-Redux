import { createStore, combineReducers, applyMiddleware } from 'redux';
import OnOffSwitchReducer from '../reducers/OnOffSwitchReducer';
import thunk from 'redux-thunk';

export const initialState = {
    on: false,
    startClicked: false,
    levelCounter: '',
    hardmode: false,
    levelInput : [],
    playerInput : []
};

export const store = createStore(
    OnOffSwitchReducer,
    initialState,
    applyMiddleware(thunk)
);

store.subscribe(() => store.getState());

export default store;
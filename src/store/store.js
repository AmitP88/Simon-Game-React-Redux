import { createStore } from 'redux';

const initialState = {
    Controls : {
        on: false,
        startClicked: false,
        levelCounter: '',
        hardmode: false
    },
    levelInput : [],
    playerInput : []
};

const store = createStore(/*Insert reducer here */);
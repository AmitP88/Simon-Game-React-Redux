import { createStore } from 'redux';

const initialState = {
    Controls : {
        on: false,
        startClicked: false,
        levelCounter: '',
        hardmode: false
    },
    level : []
};

const store = createStore(/*Insert reducer here */);
import { SIMON_MESSAGE_DEFAULT, SIMON_MESSAGE_VICTORY } from '../actions/SimonMessageActions';
import { initialState } from '../store/store';

const SimonMessageReducer = (state = initialState, action) => {
    switch(action.type){
        case SIMON_MESSAGE_DEFAULT:
            return {
                SimonMessage: 'Simon'
            }
        case SIMON_MESSAGE_VICTORY:
            return {
                SimonMessage: 'Victory!'
            }
        default:
            return state;
    }
}

export default SimonMessageReducer;
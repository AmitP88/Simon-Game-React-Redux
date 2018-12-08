import { SIMON, SIMON_WRONGMOVE } from '../actions/SimonActions';
import { initialState } from '../store/store';

const SimonReducer = (state = initialState, action) => {
    switch(action.type){
        case SIMON:
            return {
                Simon: 'Simon'
            }
        case SIMON_WRONGMOVE:
            return {
                Simon: 'Simon-wrongMove'
            }
        default:
            return state;
    }
}

export default SimonReducer;
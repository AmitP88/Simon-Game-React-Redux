import { SIMON, SIMON_WRONGMOVE, SIMON_VICTORY } from '../actions/SimonActions';
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
        case SIMON_VICTORY:
            return {
                Simon: 'Simon-victory'
            }
        default:
            return state;
    }
}

export default SimonReducer;
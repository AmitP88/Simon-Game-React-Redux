import { TURN_HARDMODE_ON, TURN_HARDMODE_OFF } from '../actions/HardModeActions';
import { initialState } from '../store/store';

const HardModeReducer = (state = initialState, action) => {
    if(action.type === TURN_HARDMODE_ON){
        return {
            hardmode: true
        }
    } else if(action.type === TURN_HARDMODE_OFF){
        return {
            hardmode: false
        }
    } else {
        return state;
    }
}

export default HardModeReducer;
import { TURN_HARDMODE_ON, TURN_HARDMODE_OFF } from '../actions/HardModeActions';
import { initialState } from '../store/store';

const HardModeReducer = (state = initialState, action) => {
    switch(action.type){
        case TURN_HARDMODE_ON:
            return {
                hardmode: true
            }
        case TURN_HARDMODE_OFF:
            return {
                hardmode: false
            }
        default:
            return state;
    }
}

export default HardModeReducer;
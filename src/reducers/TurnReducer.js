import { COMPUTERS_TURN, PLAYERS_TURN } from '../actions/TurnActions';
import { initialState } from '../store/store';

const turnReducer = (state = initialState, action) => {
    if(action.type === COMPUTERS_TURN){
        return {
            turn: action.payload
        }
    } else if(action.type === PLAYERS_TURN){
        return {
            turn: action.payload
        }
    } else {
        return state;
    }
}

export default turnReducer;
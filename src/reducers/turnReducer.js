import { COMPUTERS_TURN, PLAYERS_TURN } from '../actions/TurnActions';
import { initialState } from '../store/store';

const turnReducer = (state = initialState, action) => {
    switch(action.type){
        case COMPUTERS_TURN:
            return {
                turn: action.payload
            }
        case PLAYERS_TURN:
            return {
                turn: action.payload
            }
        default:
            return state;
    }
}

export default turnReducer;
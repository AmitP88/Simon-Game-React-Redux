import { COMPUTER_RED_INPUT, COMPUTER_GREEN_INPUT, COMPUTER_BLUE_INPUT, COMPUTER_PURPLE_INPUT } from '../actions/ComputerInputActions';
import { initialState } from '../store/store';

const ComputerInputReducer = (state = initialState, action) => {
    switch(action.type){
        case COMPUTER_RED_INPUT:
            return {
                computerInput: [...state.computerInput, action.payload]
            }
        case COMPUTER_GREEN_INPUT:
            return {
                computerInput: [...state.computerInput, action.payload]
            }
        case COMPUTER_BLUE_INPUT:
            return {
                computerInput: [...state.computerInput, action.payload]
            }
        case COMPUTER_PURPLE_INPUT:
            return {
                computerInput: [...state.computerInput, action.payload]
            }
        default:
            return state;
    }
}

export default ComputerInputReducer;
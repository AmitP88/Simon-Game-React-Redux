import { RED_INPUT, GREEN_INPUT, BLUE_INPUT, PURPLE_INPUT } from '../actions/PlayerInputActions';
import { initialState } from '../store/store';

const playerInputReducer = (state = initialState, action) => {
    switch(action.type){
        case RED_INPUT:
            return {
                playerInput: [...state.playerInput, action.payload]
            }
        case GREEN_INPUT:
            return {
                playerInput: [...state.playerInput, action.payload]
            }
        case BLUE_INPUT:
            return {
                playerInput: [...state.playerInput, action.payload]
            }
        case PURPLE_INPUT:
            return {
                playerInput: [...state.playerInput, action.payload]
            }
        default:
            return state;
    }
}

export default playerInputReducer;
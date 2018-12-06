import { PLAYER_RED_INPUT, PLAYER_GREEN_INPUT, PLAYER_BLUE_INPUT, PLAYER_PURPLE_INPUT } from '../actions/PlayerInputActions';
import { initialState } from '../store/store';

const PlayerInputReducer = (state = initialState, action) => {
    switch(action.type){
        case PLAYER_RED_INPUT:
            return {
                playerInput: [...state.playerInput, action.payload]
            }
        case PLAYER_GREEN_INPUT:
            return {
                playerInput: [...state.playerInput, action.payload]
            }
        case PLAYER_BLUE_INPUT:
            return {
                playerInput: [...state.playerInput, action.payload]
            }
        case PLAYER_PURPLE_INPUT:
            return {
                playerInput: [...state.playerInput, action.payload]
            }
        default:
            return state;
    }
}

export default PlayerInputReducer;
import { INCREMENT_LEVELCOUNTER, RESET_LEVELCOUNTER } from '../actions/LevelCounterActions';
import { initialState } from '../store/store';

const LevelCounterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_LEVELCOUNTER:
            if(state.levelCounter === '') {
                return {
                    levelCounter: 1
                }            
            } else {
                return {
                    levelCounter: state.levelCounter + 1
                }
            }
        case RESET_LEVELCOUNTER:
            return {
                levelCounter: ''
            }
            default:
                return state;
    }
}

export default LevelCounterReducer;
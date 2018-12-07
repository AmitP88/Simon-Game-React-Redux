import { INCREMENT_LEVELCOUNTER, RESET_LEVELCOUNTER } from '../actions/LevelCounterActions';
import { initialState } from '../store/store';

const LevelCounterReducer = (state = initialState, action) => {
    if(action.type === INCREMENT_LEVELCOUNTER){
        if(state.levelCounter === '') {
            return {
                levelCounter: 1
            }            
        } else {
            return {
                levelCounter: state.levelCounter + 1
            }
        }

    } else if(action.type === RESET_LEVELCOUNTER){
        return {
            levelCounter: ''
        }
    } else {
        return state;
    }
}

export default LevelCounterReducer;
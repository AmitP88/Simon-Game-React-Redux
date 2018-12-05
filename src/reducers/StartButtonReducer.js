import { START_CLICKED } from '../actions/StartButtonActions';
import { initialState } from '../store/store';

const StartButtonReducer = (state = initialState, action) => {
    if(action.type === START_CLICKED){
        return {
            startClicked: true
        }
    } else {
        return state;
    }
};

export default StartButtonReducer;
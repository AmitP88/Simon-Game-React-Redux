import { START_CLICKED } from '../actions/StartButtonActions';
import { initialState } from '../store/store';

const StartButtonReducer = (state = initialState, action) => {
    switch(action.type){
        case START_CLICKED:
            return {
                startClicked: true
            }
        default:
            return state;
    }
};

export default StartButtonReducer;
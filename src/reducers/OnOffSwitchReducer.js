import { ON, OFF } from '../actions/OnOffSwitchActions';
import { initialState } from '../store/store';

const OnOffSwitchReducer = (state = initialState, action) => {
    switch(action.type){
        case ON:
            return {
                on: true
            }
        case OFF:
            return {
                on: false
            }
        default:
            return state;
    }
}

export default OnOffSwitchReducer;
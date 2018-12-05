import { ON, OFF } from '../actions/OnOffSwitchActions';
import initialState from '../store/store';

const OnOffSwitchReducer = (state = initialState, action) => {
    if(action.type === ON){
        return {
            on: true
        };
    } else if(action.type === OFF){
        return {
            on: false
        }
    } else {
        return state;
    }
}

export default OnOffSwitchReducer;
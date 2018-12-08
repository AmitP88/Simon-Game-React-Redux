import { COUNTER_BELOW_10, COUNTER_AFTER_10 } from '../actions/CounterClassActions';
import { initialState } from '../store/store';

const CounterClassReducer = (state = initialState, action) => {
    switch(action.type){
        case COUNTER_BELOW_10:
            return {
                counterClass: 'counter-below10'
            }
        case COUNTER_AFTER_10:
            return {
                counterClass: 'counter-after10'
            }
        default:
            return state;
    }
}

export default CounterClassReducer;
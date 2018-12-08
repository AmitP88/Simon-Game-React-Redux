import {
    LEVELCOUNTER_DEFAULT,
    LEVELCOUNTER_1,
    LEVELCOUNTER_2,
    LEVELCOUNTER_3,
    LEVELCOUNTER_4,
    LEVELCOUNTER_5,
    LEVELCOUNTER_6,
    LEVELCOUNTER_7,
    LEVELCOUNTER_8,
    LEVELCOUNTER_9,
    LEVELCOUNTER_10,
    LEVELCOUNTER_11,
    LEVELCOUNTER_12,
    LEVELCOUNTER_13,
    LEVELCOUNTER_14,
    LEVELCOUNTER_15,
    LEVELCOUNTER_16,
    LEVELCOUNTER_17,
    LEVELCOUNTER_18,
    LEVELCOUNTER_19,
    LEVELCOUNTER_20
} from '../actions/LevelCounterBackgroundActions';

import { initialState } from '../store/store';

const LevelCounterBackgroundReducer = (state = initialState, action) => {
    switch(action.type){
        case LEVELCOUNTER_DEFAULT:
            return {
                levelCounterBackground: 'LevelCounter'
            }
        case LEVELCOUNTER_1:
            return {
                levelCounterBackground: 'LevelCounter-1'
            }
        case LEVELCOUNTER_2:
            return {
                levelCounterBackground: 'LevelCounter-2'
            }
        case LEVELCOUNTER_3:
            return {
                levelCounterBackground: 'LevelCounter-3'
            }
        case LEVELCOUNTER_4:
            return {
                levelCounterBackground: 'LevelCounter-4'
            }
        case LEVELCOUNTER_5:
            return {
                levelCounterBackground: 'LevelCounter-5'
            }
        case LEVELCOUNTER_6:
            return {
                levelCounterBackground: 'LevelCounter-6'
            }
        case LEVELCOUNTER_7:
            return {
                levelCounterBackground: 'LevelCounter-7'
            }
        case LEVELCOUNTER_8:
            return {
                levelCounterBackground: 'LevelCounter-8'
            }
        case LEVELCOUNTER_9:
            return {
                levelCounterBackground: 'LevelCounter-9'
            }
        case LEVELCOUNTER_10:
            return {
                levelCounterBackground: 'LevelCounter-10'
            }
        case LEVELCOUNTER_11:
            return {
                levelCounterBackground: 'LevelCounter-11'
            }
        case LEVELCOUNTER_12:
            return {
                levelCounterBackground: 'LevelCounter-12'
            }
        case LEVELCOUNTER_13:
            return {
                levelCounterBackground: 'LevelCounter-13'
            }
        case LEVELCOUNTER_14:
            return {
                levelCounterBackground: 'LevelCounter-14'
            }
        case LEVELCOUNTER_15:
            return {
                levelCounterBackground: 'LevelCounter-15'
            }
        case LEVELCOUNTER_16:
            return {
                levelCounterBackground: 'LevelCounter-16'
            }
        case LEVELCOUNTER_17:
            return {
                levelCounterBackground: 'LevelCounter-17'
            }
        case LEVELCOUNTER_18:
            return {
                levelCounterBackground: 'LevelCounter-18'
            }
        case LEVELCOUNTER_19:
            return {
                levelCounterBackground: 'LevelCounter-19'
            }
        case LEVELCOUNTER_20:
            return {
                levelCounterBackground: 'LevelCounter-20'
            }
        default:
            return state;
    }
}

export default LevelCounterBackgroundReducer;
import {
    // clicked action types
    RED_CLICKED,
    GREEN_CLICKED,
    BLUE_CLICKED,
    PURPLE_CLICKED,
    // revverted action types (return to dark square color after click)
    RED_REVERTED,
    GREEN_REVERTED,
    BLUE_REVERTED,
    PURPLE_REVERTED

} from '../actions/LightSquareActions';
import { initialState } from '../store/store';

const LightSquareReducer = (state = initialState, action) => {
    let updatedSquares;    
    switch(action.type){
        // Light up colored square when clicked
        case RED_CLICKED:
            updatedSquares = {
                lightSquares : {
                    red: 'light_red',
                    green: 'dark_green',
                    blue: 'dark_blue',
                    purple: 'dark_purple'
                }
            };
            return updatedSquares;
        case GREEN_CLICKED:
            updatedSquares = {
                lightSquares : {
                    red: 'dark_red',
                    green: 'light_green',
                    blue: 'dark_blue',
                    purple: 'dark_purple'
                }
            };
            return updatedSquares;
        case BLUE_CLICKED:
            updatedSquares = {
                lightSquares : {
                    red: 'dark_red',
                    green: 'dark_green',
                    blue: 'light_blue',
                    purple: 'dark_purple'
                }
            };
            return updatedSquares;
        case PURPLE_CLICKED:
            updatedSquares = {
                lightSquares : {
                    red: 'dark_red',
                    green: 'dark_green',
                    blue: 'dark_blue',
                    purple: 'light_purple'
                }
            };
            return updatedSquares;
        // Revert back to dark colored square after click
        case RED_REVERTED:
        case GREEN_REVERTED:
        case BLUE_REVERTED:
        case PURPLE_REVERTED:
            updatedSquares = {
                lightSquares : {
                    red: 'dark_red',
                    green: 'dark_green',
                    blue: 'dark_blue',
                    purple: 'dark_purple'
                }
            }; 
            return updatedSquares;       
        default:
            return state;
    }
}

export default LightSquareReducer;
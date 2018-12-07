export const INCREMENT_LEVELCOUNTER = 'INCREMENT_LEVELCOUNTER';
export const RESET_LEVELCOUNTER = 'RESET_LEVELCOUNTER';

export const incrementLevelCounter = () => {
    return {
        type: INCREMENT_LEVELCOUNTER
    }
};

export const resetLevelCounter = () => {
    return {
        type: RESET_LEVELCOUNTER
    }
}
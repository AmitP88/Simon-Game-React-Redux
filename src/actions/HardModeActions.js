export const TURN_HARDMODE_ON = 'TURN_HARDMODE_ON';
export const TURN_HARDMODE_OFF = 'TURN_HARDMODE_OFF';

export const turnHardModeOn = () => {
    return {
        type: TURN_HARDMODE_ON
    }
}

export const turnHardModeOff = () => {
    return {
        type: TURN_HARDMODE_OFF
    }
}
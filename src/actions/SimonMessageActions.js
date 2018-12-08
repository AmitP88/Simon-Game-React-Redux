export const SIMON_MESSAGE_DEFAULT = 'SIMON_MESSAGE_DEFAULT';
export const SIMON_MESSAGE_VICTORY = 'SIMON_MESSAGE_VICTORY';

export const simonMessageDefault = () => {
    return {
        type: SIMON_MESSAGE_DEFAULT
    }
}

export const simonMessageVictory = () => {
    return {
        type: SIMON_MESSAGE_VICTORY
    }
}
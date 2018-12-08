export const SIMON = 'SIMON';
export const SIMON_WRONGMOVE = 'SIMON_WRONGMOVE';
export const SIMON_VICTORY = 'SIMON_VICTORY';

export const simon = () => {
    return {
        type: SIMON
    }
}

export const simonWrongMove = () => {
    return {
        type: SIMON_WRONGMOVE
    }
}

export const simonVictory = () => {
    return {
        type: SIMON_VICTORY
    }
}

export const SIMON = 'SIMON';
export const SIMON_WRONGMOVE = 'SIMON_WRONGMOVE';

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
export const PLAYER_RED_INPUT = 'PLAYER_RED_INPUT';
export const PLAYER_GREEN_INPUT = 'PLAYER_GREEN_INPUT';
export const PLAYER_BLUE_INPUT = 'PLAYER_BLUE_INPUT';
export const PLAYER_PURPLE_INPUT = 'PLAYER_PURPLE_INPUT';

// pushes chosen input into playerInput array in state
export const playerRedInput = () => {
    return {
        type: PLAYER_RED_INPUT,
        payload: 'red'
    }
}

export const playerGreenInput = () => {
    return {
        type: PLAYER_GREEN_INPUT,
        payload: 'green'
    }
}

export const playerBlueInput = () => {
    return {
        type: PLAYER_BLUE_INPUT,
        payload: 'blue'
    }
}

export const playerPurpleInput = () => {
    return {
        type: PLAYER_PURPLE_INPUT,
        payload: 'purple'
    }
}
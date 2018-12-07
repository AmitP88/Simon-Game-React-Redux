export const COMPUTER_RED_INPUT = 'COMPUTER_RED_INPUT';
export const COMPUTER_GREEN_INPUT = 'COMPUTER_GREEN_INPUT';
export const COMPUTER_BLUE_INPUT = 'COMPUTER_BLUE_INPUT';
export const COMPUTER_PURPLE_INPUT = 'COMPUTER_PURPLE_INPUT'

export const CLEAR_COMPUTER_INPUT = 'CLEAR_COMPUTER_INPUT';

// pushes chosen input into computerInput array in state
export const computerRedInput = () => {
    return {
        type: COMPUTER_RED_INPUT,
        payload: 'red'
    }
}

export const computerGreenInput = () => {
    return {
        type: COMPUTER_GREEN_INPUT,
        payload: 'green'
    }
}

export const computerBlueInput = () => {
    return {
        type: COMPUTER_BLUE_INPUT,
        payload: 'blue'
    }
}

export const computerPurpleInput = () => {
    return {
        type: COMPUTER_PURPLE_INPUT,
        payload: 'purple'
    }
}

export const clearComputerInput = () => {
    return {
        type: CLEAR_COMPUTER_INPUT
    }
}
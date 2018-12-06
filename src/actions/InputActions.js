export const RED_INPUT = 'RED_INPUT';
export const GREEN_INPUT = 'GREEN_INPUT';
export const BLUE_INPUT = 'BLUE_INPUT';
export const PURPLE_INPUT = 'PURPLE_INPUT';

// pushes chosen input into playerInput array in state
export const redInput = () => {
    return {
        type: RED_INPUT,
        payload: 'red'
    }
}

export const greenInput = () => {
    return {
        type: GREEN_INPUT,
        payload: 'green'
    }
}

export const blueInput = () => {
    return {
        type: BLUE_INPUT,
        payload: 'blue'
    }
}

export const purpleInput = () => {
    return {
        type: PURPLE_INPUT,
        payload: 'purple'
    }
}
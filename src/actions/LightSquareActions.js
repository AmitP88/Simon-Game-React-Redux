export const RED_CLICKED = 'RED_CLICKED';
export const GREEN_CLICKED = 'GREEN_CLICKED';
export const BLUE_CLICKED = 'BLUE_CLICKED';
export const PURPLE_CLICKED = 'PURPLE_CLICKED';

export const RED_REVERTED = 'RED_REVERTED';
export const GREEN_REVERTED = 'GREEN_REVERTED';
export const BLUE_REVERTED = 'BLUE_REVERTED';
export const PURPLE_REVERTED = 'PURPLE_REVERTED';

// Light up colored square when clicked
export const redClicked = () => {
    return {
        type: RED_CLICKED
    }
};

export const greenClicked = () => {
    return {
        type: GREEN_CLICKED
    }
};

export const blueClicked = () => {
    return {
        type: BLUE_CLICKED
    }
};

export const purpleClicked = () => {
    return {
        type: PURPLE_CLICKED
    }
};

// Revert back to dark colored button after click
export const redReverted = () => {
    return {
        type: RED_REVERTED
    }
};

export const greenReverted = () => {
    return {
        type: GREEN_REVERTED
    }
};

export const blueReverted = () => {
    return {
        type: BLUE_REVERTED
    }
};

export const purpleReverted = () => {
    return {
        type: PURPLE_REVERTED
    }
};
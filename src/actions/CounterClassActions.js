export const COUNTER_BELOW_10 = 'COUNTER_BELOW_10';
export const COUNTER_AFTER_10 = 'COUNTER_AFTER_10';

export const counterBelow10 = () => {
    return {
        type: COUNTER_BELOW_10
    }
}

export const counterAfter10 = () => {
    return {
        type: COUNTER_AFTER_10
    }
}
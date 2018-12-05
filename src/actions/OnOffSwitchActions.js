export const ON = 'ON';
export const OFF = 'OFF';

export const turnOn = () => {
    return {
        type: ON
    };
}

export const turnOff = () => {
    return {
        type: OFF
    };
}
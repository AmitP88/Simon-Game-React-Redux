export const COMPUTERS_TURN = 'COMPUTERS_TURN';
export const PLAYERS_TURN = 'PLAYERS_TURN';

export const computersTurn = () => {
    return {
        type: COMPUTERS_TURN,
        payload: 'computer'
    }
};

export const playersTurn = () => {
    return {
        type: PLAYERS_TURN,
        payload: 'player'
    }
}
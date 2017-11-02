// Expenses Reducer

const playerReducerDefaultState = [];

// the state it manages is an array of players.
export default (state = playerReducerDefaultState, action) => {
    switch (action.type) {
        case 'CREATE_PLAYER':
            return [
                ...state,
                action.player
            ];
        case 'REMOVE_PLAYER':
            const player = state.filter(({id}) => id !== action.id)
            return player;
        case 'EDIT_PLAYER':
            return state.map((player) => {
                if (player.id === action.id) {
                    return {
                        ...player,
                        ...action.updates
                    };
                } else {
                    return player;
                }
                ;
            });
        default:
            return state;
    }
};

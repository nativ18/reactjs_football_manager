// Expenses Reducer

const expensesReducerDefaultState = [];

// the state it manages is an array of players.
export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'CREATE_PLAYER':
            console.log("1. " + state);
            console.log(...state);
            return [
                ...state,
                action.player
            ];
        case 'REMOVE_PLAYER':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_PLAYER':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
                ;
            });
        default:
            return state;
    }
};

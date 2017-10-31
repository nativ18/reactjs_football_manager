import uuid from 'uuid';

// ADD_EXPENSE
export const createPlayer = ({
                                 fullname = '',
                                 age = '',
                                 price = 0,
                                 position = 'GK'
                             } = {}) => ({
    type: 'CREATE_PLAYER',
    player: {
        id: uuid(),
        fullname,
        age,
        price,
        position
    }
});

// DELETE PLAYER
export const removeExpense = ({id} = {}) => ({
    type: 'CREATE_PLAYER',
    id
});

// EDIT PLAYER
export const editPlayer = (id, updates) => ({
    type: 'EDIT_PLAYER',
    id,
    updates
});

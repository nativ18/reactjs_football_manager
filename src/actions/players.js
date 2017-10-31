import uuid from 'uuid';

// ADD_EXPENSE
export const createPlayer = ({
                                 fullname = '',
                                 age = 0,
                                 price = 0,
                                 position = 'GK',
                                 image = ''
                             } = {}) => ({
    type: 'CREATE_PLAYER',
    player: {
        id: uuid(),
        fullname,
        age,
        price,
        position,
        image
    }
});

// DELETE PLAYER
export const removePlayer = ({id} = {}) => ({
    type: 'REMOVE_PLAYER',
    id
});

// EDIT PLAYER
export const editPlayer = (id, updates) => ({
    type: 'EDIT_PLAYER',
    id,
    updates
});

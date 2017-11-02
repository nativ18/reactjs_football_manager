import uuid from 'uuid';

// ADD_EXPENSE
export const createPlayer = (persist, {
    fullname = '',
    age = 0,
    price = 0,
    position = 'GK',
    image = '',
    description = '',
    file = ''
} = {}) => {

    let player = {
        id: uuid(),
        fullname,
        age,
        price,
        position,
        image,
        description,
        file
    }

    if (persist) {
        localStorage.setItem(player.id, JSON.stringify(player));
    }

    return {
        type: 'CREATE_PLAYER',
        player: player
    }
};

// DELETE PLAYER
export const removePlayer = (persist, {id} = {}) => {
    if (persist)
        localStorage.removeItem(action.player.id);
    return {type: 'REMOVE_PLAYER', id}
};

// EDIT PLAYER
export const editPlayer = (persist, id, updates) => {
    if (persist) {
        const player = localStorage.getItem(id);
        if (player) {
            localStorage.setItem(id, JSON.stringify({...player, updates}))
        }
    }

    return {
        type: 'EDIT_PLAYER',
        id,
        updates
    }
};

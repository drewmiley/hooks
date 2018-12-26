export function count(state = 0, action) {
    switch (action.type) {
        case 'COUNT':
            return state + 1;
        default:
            return state;
    }
}

export function random(state = 'null', action) {
    switch (action.type) {
        case 'FETCH_RANDOM':
            return action.value;
        default:
            return state;
    }
}

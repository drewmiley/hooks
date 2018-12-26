export function count(state = 0, action) {
    switch (action.type) {
        case 'COUNT':
            return 0;
        default:
            return state;
    }
}

export function fetchRandom(state = null, action) {
    switch (action.type) {
        case 'FETCH_RANDOM':
            return action.value;
        default:
            return state;
    }
}

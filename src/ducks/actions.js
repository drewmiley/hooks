export const mapDispatchToProps = dispatch => ({
    fetchRandom: url => dispatch(fetchRandom(url)),
    increment: songPlayingId => dispatch(increment())
});

const fetchRandom = params => dispatch => {
    fetch('https://www.random.org/quota/?format=plain')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return Math.floor(100 * Math.random());
        })
        .then(value => dispatch(random(value)));
};

const random = value => ({
    type: 'FETCH_RANDOM',
    value
});

const increment = () => dispatch => dispatch({ type: 'COUNT' });

export const mapDispatchToProps = dispatch => ({
    fetchRandom: url => dispatch(fetchRandom(url)),
    count: songPlayingId => dispatch(count())
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

const count = () => dispatch => dispatch({ type: 'COUNT' });

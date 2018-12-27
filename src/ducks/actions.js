export const mapDispatchToProps = dispatch => ({
    fetchRandom: multiplier => dispatch(fetchRandom(multiplier)),
    increment: () => dispatch(increment())
});

const fetchRandom = multiplier => dispatch => {
    fetch('https://www.random.org/quota/?format=plain')
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }

            return (parseInt(multiplier) || 1) * Math.floor(100 * Math.random());
        })
        .then(value => dispatch(random(value)));
};

const random = value => ({
    type: 'FETCH_RANDOM',
    value
});

const increment = () => dispatch => dispatch({ type: 'COUNT' });

import React from 'react';

const V0 = props => {
    return (
        <>
            <h2>Component V0</h2>
            <p>
                <span>Count: {props.count}</span>
                <span><button onClick={props.setCount}>Set Count</button></span>
            </p>
            <p>
                <span>Random: {props.random}</span>
                <span><button onClick={props.fetchRandom}>Fetch Random</button></span>
            </p>
        </>
    );
}

export default V0;

import React from 'react';

const V13 = props => {
    return (
        <>
            <h2>Hooks V13</h2>
            <p>
                <span>Count: {props.count}</span>
                <span><button onClick={props.increment}>Increment</button></span>
            </p>
            <p>
                <span>Random: {props.random}</span>
                <span><button onClick={props.fetchRandom}>Fetch Random</button></span>
            </p>
        </>
    );
}

export default V13;

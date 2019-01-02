import React, { useContext } from 'react';

import { HeadingContext } from '../AppContainer';

const V13 = props => {
    const context = useContext(HeadingContext);

    return (
        <>
            <h2>Hooks V13 - {context}</h2>
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

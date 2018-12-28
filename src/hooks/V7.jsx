import React, { useEffect } from 'react';

const V7 = props => {
    useEffect(() => {
        return () => console.log('hook will cleanup');
    })

    return (
        <>
            <h2>Hooks V7</h2>
            <p>
                <span>Count: {props.count}</span>
                <span><button onClick={props.increment}>Increment</button></span>
            </p>
        </>
    );
}

export default V7;

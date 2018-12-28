import React, { useEffect } from 'react';

const V10 = props => {
    useEffect(() => {
        console.log('hook did mount');
        return () => console.log('hook will unmount');
    }, [])

    useEffect(() => {
        console.log(`hook did update - Count: ${props.count}`)
    }, [props.count])

    return (
        <>
            <h2>Hooks V10</h2>
            <p>
                <span>Count: {props.count}</span>
                <span><button onClick={props.increment}>Increment</button></span>
            </p>
        </>
    );
}

export default V10;

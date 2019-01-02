import React, { useEffect } from 'react';

const V7 = props => {
    useEffect(() => {
        console.log('hook did mount');
        return () => console.log('hook will unmount');
    }, [])

    return (
        <>
            <h2>Hooks V7 - useEffect replicates 'willUnmount' lifecycle method</h2>
            <p>
                <span>Count: {props.count}</span>
                <span><button onClick={props.increment}>Increment</button></span>
            </p>
        </>
    );
}

export default V7;

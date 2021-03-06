import React, { useState, useEffect } from 'react'

const V4 = props => {
    const [initialised, setInitialised] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!initialised) {
            console.log(`hook did mount`);
            setInitialised(true);
            setCount(20);
        } else {
            console.log(`hook did update`);
        }
    })

    return (
        <>
            <h2>Hooks V4 - Using initialised to replicate 'did mount' and 'did update' lifecycle methods</h2>
            <p>
                <span>Count: {count}</span>
                <span><button onClick={() => setCount(count + 1)}>Increment</button></span>
            </p>
        </>
    );
}

export default V4;

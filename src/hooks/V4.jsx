import React, { useState, useEffect } from 'react'

const V4 = props => {
    const [initialised, setInitialised] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!initialised) {
            console.log(`component did mount`)
            setInitialised(true);
            setCount(20);
        } else {
            console.log(`component did update`)
        }
    })

    return (
        <>
            <h2>Hooks V4</h2>
            <p>
                <span>Count: {count}</span>
                <span><button onClick={() => setCount(count + 1)}>Increment</button></span>
            </p>
        </>
    );
}

export default V4;

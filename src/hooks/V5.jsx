import React, { useState, useEffect } from 'react'

const V4 = props => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(props.count);
    }, [props.count])

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

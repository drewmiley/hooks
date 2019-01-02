import React, { useState, useEffect } from 'react'

const V5 = props => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(props.count);
    }, [props.count])

    return (
        <>
            <h2>Hooks V5 - Example of internal state being overwritten by props change using useState and useEffect</h2>
            <p>
                <span>Count: {count}</span>
                <span><button onClick={() => setCount(count + 1)}>Increment</button></span>
            </p>
        </>
    );
}

export default V5;

import React, { useState, useEffect } from 'react'

const V6 = props => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(props.count);
    }, [props.count])

    return (
        <>
            <h2>Hooks V5</h2>
            <p>
                <span>Count: {count}</span>
                <span><button onClick={() => setCount(count + 1)}>Increment</button></span>
            </p>
        </>
    );
}

export default V6;

import React, { useState } from 'react'

const V6 = props => {
    const [count, setCount] = useState(0);

    const fetchRandomWithMultiplier = () => {
        props.fetchRandom(count);
    }

    return (
        <>
            <h2>Hooks V6</h2>
            <p>
                <span>Count: {count}</span>
                <span><button onClick={() => setCount(count + 1)}>Increment</button></span>
            </p>
            <p>
                <span>Random: {props.random}</span>
                <span><button onClick={fetchRandomWithMultiplier}>Fetch Random</button></span>
            </p>
        </>
    );
}

export default V6;

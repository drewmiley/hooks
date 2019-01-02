import React, { useState, useEffect } from 'react';

const V2 = props => {
    const colors = ['red', 'green', 'blue'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const newIndex = index === 2 ? 0 : index + 1;
        setIndex(newIndex);
    }, [props])

    return (
        <>
            <h2 style={{backgroundColor: colors[index]}}>Hooks V2 - Hook updates with useEffect on all props changes</h2>
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

export default V2;

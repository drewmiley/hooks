import React, { useState, useEffect, useCallback } from 'react';

const getProduct = (count, random, loops) => {
    for (let i = 0; i < loops; i++) {
        console.log(`hook computing expensive function looping ${loops} times`);
    }
    return count * random;
}

const V12 = props => {
    const [value, setValue] = useState(NaN);
    const [trigger, setTrigger] = useState(false);
    const [loops, setLoops] = useState(100);
    const product = useCallback(() => getProduct(props.count, props.random, loops), [loops]);

    useEffect(() => {
        setValue(product());
    }, [trigger])

    return (
        <>
            <h2>Hooks V12</h2>
            <p>
                <span>Count * Random: {value}</span>
            </p>
            <p>
                <span>Loops: <input type="number" name="quantity" value={loops} onChange={(e) => setLoops(parseInt(e.target.value))} min="1" max="1000000" /></span>
            </p>
            <p>
                <span><button onClick={() => setTrigger(!trigger)}>Get Product</button></span>
            </p>
        </>
    );
}

export default V12;

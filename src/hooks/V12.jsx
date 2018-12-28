import React, { useState, useCallback } from 'react';

const getProduct = (count, random) => {
    for (let i = 0; i < 100; i++) {
        console.log('hook computing expensive function')
    }
    return count * random;
}

const V11 = props => {
    const [trigger, setTrigger] = useState(false);
    const [loops, setLoops] = useState(100);
    const product = useCallback(() => getProduct(props.count, props.random), [trigger]);
    return (
        <>
            <h2>Hooks V12</h2>
            <p>
                <span>Count * Random: {product()}</span>
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

export default V11;

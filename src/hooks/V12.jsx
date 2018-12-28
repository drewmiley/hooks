import React, { useState, useCallback } from 'react';

const getProduct = (count, random) => {
    for (let i = 0; i < 100; i++) {
        console.log('hook computing expensive function')
    }
    return count * random;
}

const V11 = props => {
    const [trigger, setTrigger] = useState(false);
    const product = useCallback(() => getProduct(props.count, props.random), [trigger]);
    return (
        <>
            <h2>Hooks V11</h2>
            <p>
                <span>Count * Random: {product()}</span>
                <span><button onClick={() => setTrigger(!trigger)}>Call Memo Function</button></span>
            </p>
        </>
    );
}

export default V11;

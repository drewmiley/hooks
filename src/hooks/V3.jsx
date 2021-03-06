import React, { useState, useEffect } from 'react';

const V3 = props => {
    const colors = ['red', 'green', 'blue'];
    const [index, setIndex] = useState(0);
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const newIndex = index === 2 ? 0 : index + 1;
        setIndex(newIndex);
    }, [value, props.random])

    return (
        <>
            <h2 style={{backgroundColor: colors[index]}}>Hooks V3 - Combination of useState and useEffect, updating on input change and random number change</h2>
            <input type='text' placeholder='Input' value={value} onChange={onChange} />
        </>
    );
}

export default V3;

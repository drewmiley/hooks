import React, { useState } from 'react'

const V1 = () => {
    const [value, setValue] = useState('');

    const onChange = e => {
        setValue(e.target.value);
    }

    const onClick = () => {
        console.log(value);
    }

    return (
        <>
            <h2>Hooks V1</h2>
            <p>
                <input type='text' placeholder='Input' value={value} onChange={onChange} />
                <button onClick={onClick}>Log Value</button>
            </p>
        </>
    );
}

export default V1;

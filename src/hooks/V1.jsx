import React, { useState } from 'react'

const V1 = () => {
    return (
        <>
            <h2>Hooks V1</h2>
            <p>
                <input type='text' placeholder='Input'></input>
                <button onClick={() => console.log('value')}>Log Value</button>
            </p>
        </>
    );
}

export default V1;
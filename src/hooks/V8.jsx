import React, { useState, useEffect } from 'react';

const V8 = props => {
    const [users, setUsers] = useState([]);

    useEffect(async () => {
        const response = await fetch('https://randomuser.me/api/?results=2');
        const json = await response.json();
        setUsers(json.results);
    }, [users.length])

    return (
        <>
            <h2>Hooks V8 - Async call on mounting hook</h2>
            <ul>
                {users.map((user, i) => (
                    <li key={i}>{user.name.title} {user.name.first} {user.name.last}</li>
                ))}
            </ul>
        </>
    );
}

export default V8;

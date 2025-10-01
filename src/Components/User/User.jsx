import React from 'react';

const User = ({user}) => {
    const { name, email, phone } = user
    const userCard = {
        border: '2px solid yellow',
        borderRadius: '20px',
        padding: '10px',
        margin: '4px'
    }

    return (
        <div style={userCard}>
            <h2>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default User;
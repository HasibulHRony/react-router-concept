import React, { use } from 'react';
const Users2 = ({ usersSecondPromise }) => {
    const usersSecond = use(usersSecondPromise)
    console.log(usersSecond)
    return (
        <div>
            <h2>This is users 2</h2>
        </div>
    );
};

export default Users2;
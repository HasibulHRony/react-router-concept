import React from 'react';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Mobiles from '../Mobiles/Mobiles';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Home></Home> */}
            {/* <Mobiles></Mobiles> */}
        </div>
    );
};

export default Root;
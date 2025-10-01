import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import AsideNav from '../AsideNav/AsideNav';
import './Root.css'

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-aside'>
                <AsideNav></AsideNav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
 import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shear/Footer/Footer';
import NabBar from '../shear/navbar/NabBar';

 const Main = () => {
    return (
        <div>
        <NabBar></NabBar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    );
};

export default Main;
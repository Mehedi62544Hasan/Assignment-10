import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSaid from '../../shear/LeftSaid/LeftSaid';

const HomeMain = () => {
    return (
        <div className='lg:grid grid-cols-3'>
            <LeftSaid></LeftSaid>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeMain;
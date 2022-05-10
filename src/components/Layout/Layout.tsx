import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navbar } from 'components/Navbar';

import './Layout.scss';

export const Layout: React.FC = () => {
    return (
        <>
            <div className="navbarContainer">
                <Navbar />
            </div>
            <div className="contentContainer">
                <Outlet />
            </div>
        </>
    );
};

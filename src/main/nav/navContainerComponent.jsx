import React from 'react';
import { Link } from 'react-router-dom';
import NavListComponent from './navListComponent';
import '../../App.css';

const NavContainerComponent = () => {
    return (
        <nav className='nav-container'>
            <Link className='logo-link' to="/">
                <img className='logo-img' src="/../../trip-wiz-logo.svg" alt="logo-here" />
            </Link>
            <NavListComponent />
        </nav>
    )
}

export default NavContainerComponent;
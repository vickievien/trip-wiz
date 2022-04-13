import React from 'react';
import NavListComponent from './navListComponent';
import '../../App.css';

const NavContainerComponent = () => {
    return (
        <nav className='nav-container'>
            <a className='logo-link' href="#">
                <img className='logo-img' src="/../../trip-wiz-logo.svg" alt="logo-here" />
            </a>
            <NavListComponent />
        </nav>
        
    )
}

export default NavContainerComponent;
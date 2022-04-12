import React from 'react';
import NavListComponent from './navListComponent';

const NavContainerComponent = () => {
    return (
        <nav className='nav-container'>
            <a className='logo-link' href="#">
                <img className='logo-img' src="" alt="logo-here" />
            </a>
            <NavListComponent />
        </nav>
        
    )
}

export default NavContainerComponent;
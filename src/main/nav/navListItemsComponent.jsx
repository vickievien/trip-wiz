import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const NavListItemsComponent = () => {
    return (
        <>
            <Link to="/" className='router-link'>
                <li className='nav-list-item'>Home</li>
            </Link>
            <Link to="/reviews"  className='router-link'>
                <li className='nav-list-item'>Reviews</li>
            </Link>
        </>
    )
}

export default NavListItemsComponent;
import React from 'react';
import logo from '../../images/logo.jpg'
import './Header.css'
const Header = () => {
    return (
            <nav className='navbar'>
                <img src={logo} alt="" />
               <h2>Daily Burnout</h2> 
            </nav>
    );
};

export default Header;
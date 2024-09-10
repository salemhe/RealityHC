import React, { useState } from 'react';
import { MenuItems } from '../MenuItems';
import './Navbar.css';

const Navbar = () => {
    const [clicked, setClicked] = useState(false); 

    const handleClick = () => {
        setClicked(!clicked); 
    };

    return (
        <nav className='nav__items'>
            <h1 className='nav__logo'>
                <a href='/'>
                    <i className="fas fa-hand-holding-heart"></i>RealityHC 
                </a>
            
            </h1>

            <div className='menu__icons' onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? 'nav__menu active' : 'nav__menu'}>
                {MenuItems.map((item, index) => (
                    <li key={index}>
                        <a href={item.url} className={item.cName}>
                            {item.title}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;











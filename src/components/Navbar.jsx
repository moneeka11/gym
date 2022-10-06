import React, { useState } from 'react'

import { Routes, Route, Link, NavLink } from "react-router-dom";

import Button from './Button'
import Home from './Home';
import About from './About';

export default function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu =()=> setClick(false);
 
  return (
    <>
    <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-logo">
                <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/gymat_light-1.svg" alt="logo" className='logo1'/>
                <img src="https://radiustheme.com/demo/wordpress/themes/gymat/wp-content/uploads/2022/04/gymat_dark-1.svg" alt="logo2" className='logo2'/>

            </div>
            <ul className={click? 'nav-menu active':'nav-menu'}>
                <li className="nav-item">
                    <NavLink to="/" className='nav-links' activeClassName="active" onClick={closeMobileMenu}>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className='nav-links' activeClassName="active" onClick={closeMobileMenu}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/c" className='nav-links' activeClassName="active" onClick={closeMobileMenu}>Trainer
                    </NavLink>
                   
                </li>
                <li className="nav-item">
                    <NavLink to="/c" className='nav-links' activeClassName="active" onClick={closeMobileMenu}>Class</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/c" className='nav-links' activeClassName="active" onClick={closeMobileMenu}>Schedule</NavLink>
                </li>
              
                <li className="nav-item">
                    <NavLink to="/c" className='nav-links' activeClassName="active" onClick={closeMobileMenu}>Contact</NavLink>
                </li>
                <li className="nav-item">
                    <Link to="/c" className='nav-links-mobile'  onClick={closeMobileMenu} >Join Class Now</Link>
                </li>
            </ul>
            <Button />
            <div className="menu-icon" onClick={handleClick}>
                <i className={click ?"fa-solid fa-xmark":"fa-solid fa-bars"}/>
              

            </div>
        </div>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

     
    </>
  )
}

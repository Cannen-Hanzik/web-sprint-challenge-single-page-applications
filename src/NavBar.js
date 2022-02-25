// Navigation routed through this page
import React from 'react';
import {Link} from 'react-router-dom';
import '../src/App.css';

function NavBar() {
    return (
        <div className='navStyle'>
            <nav className='navBar'>
                <h1>BLOOM EATS</h1>
                <div className='navLinks'>
                    <Link to='/'>Home</Link>
                    <Link to='/Pizza'>Order Pizza</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
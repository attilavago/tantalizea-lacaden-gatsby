import React from 'react';
import {Link} from 'gatsby';

const Header = () => {
    return (
        <header>
            <h1><Link to="/">Tantalizea</Link></h1>
            <nav>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul> 
            </nav>
        </header>
    )
}

export default Header;
import React from 'react';
import {Link} from 'gatsby';

const Header = () => {
    return (
        <header>
            <Link to="/">Tantalizea</Link>
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
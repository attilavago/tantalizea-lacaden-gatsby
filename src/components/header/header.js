import React from 'react';
import {Link} from 'gatsby';
import Styles from './header.module.scss';

const Header = () => {
    return (
        <header className={Styles.appHeader}>
            <h1><Link title="Tantalizea Creative Designs" to="/"><img role="presentation" src="tantalizea-creative-designs-logo.svg" alt=""/></Link></h1>
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
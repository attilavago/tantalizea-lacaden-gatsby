import React, {Component} from 'react';
import {Link} from 'gatsby';
import Styles from './header.module.scss';
import { FaTimes } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

class Header extends Component {
    state = {
        isMenuOpen: true,
    }

    render(){
        return (
            <header className={Styles.appHeader}>
                <h1><Link title="Tantalizea Creative Designs" to="/"><img role="presentation" src="../tantalizea-creative-designs-logo.svg" alt=""/></Link></h1>
                <button onClick={() => this.setState({isMenuOpen: !this.state.isMenuOpen})} className={Styles.mobileMenuTrigger}><IoIosClose/></button>
                <nav style={{display: this.state.isMenuOpen ? 'none' : 'block'}}>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><a href="https://medium.com/@tantalizea" aria-label="Blog opens in a new tab." target="_blank">Blog</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul> 
                </nav>
            </header>
        )
    }
}

export default Header;
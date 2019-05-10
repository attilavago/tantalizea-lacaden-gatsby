import React, {Component} from 'react';
import {Link} from 'gatsby';
import Styles from './header.module.scss';
import { FaTimes } from 'react-icons/fa';
import { IoIosClose, IoIosMenu } from 'react-icons/io';

class Header extends Component {
    state = {
        isMenuOpen: null,
    }

    toggleHandler = () => {
        if(window.innerWidth < 521) {
            this.setState({isMenuOpen: !this.state.isMenuOpen});
        }
    }

    componentDidMount() {
        if(window.innerWidth > 521) {
            this.setState({isMenuOpen: true});
        }
    }

    render(){
        return (
            <header className={Styles.appHeader}>
                <h1><Link title="Tantalizea Creative Designs" to="/"><img role="presentation" src="../tantalizea-creative-designs-logo.svg" alt=""/></Link></h1>
                <button onClick={this.toggleHandler} className={Styles.mobileMenuTrigger}><IoIosMenu/></button>
                <nav style={{display: this.state.isMenuOpen ? 'grid' : 'none'}}>
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
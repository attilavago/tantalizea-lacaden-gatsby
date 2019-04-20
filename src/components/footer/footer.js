import React from 'react';
import { Link } from 'gatsby';
import Button from '../button/button';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <nav>
                <ul>
                    <li><a href="https://www.instagram.com/sweetspero/" target="_blank"><FaInstagram/></a></li>
                    <li><a href="https://www.facebook.com/tantalizea/" target="_blank"><FaFacebook/></a></li>
                    <li><Link to="">terms of use</Link></li>
                    <li><Link to="">privacy policy</Link></li>
                </ul>
            </nav>
            <p>© 2019 Tantalizea Lacaden</p>
            <section>
                <p>don't leave without becoming a <span className="allCaps">vip</span>!</p>
                <Button buttonText="sign me up!"/>
            </section>
        </footer>
    )
}

export default Footer;
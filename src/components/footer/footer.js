import React from 'react';
import { Link } from 'gatsby';
import Button from '../button/button';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import Styles from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={Styles.footer}>
            <nav>
                <ul>
                    <li><a className={Styles.styledIcon} href="https://www.instagram.com/sweetspero/" target="_blank"><FaInstagram/></a></li>
                    <li><a className={Styles.styledIcon} href="https://www.facebook.com/tantalizea/" target="_blank"><FaFacebookF/></a></li>
                    <li className={Styles.desktopOnly}><Link to="">terms of use</Link></li>
                    <li className={Styles.desktopOnly}><Link to="">privacy policy</Link></li>
                    <li className={Styles.mobileOnly}><Link to="">terms of use</Link> | <Link to="">privacy policy</Link></li>
                    <li><p className={Styles.copyright}>© 2019 Tantalizea Lacaden</p></li>
                </ul>
            </nav>
            <section className={Styles.callToAction}>
                <p>Don't leave without becoming a <span className="allCaps">vip</span>!</p>
                <Button buttonText="sign me up!"/>
            </section>
        </footer>
    )
}

export default Footer;
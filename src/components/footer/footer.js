import React, {Component} from 'react';
import { Link } from 'gatsby';
import Button from '../button/button';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import Styles from './footer.module.scss';
import Modal from '../modal/modal';


class Footer extends Component {
    state = {
        modalOpen: false,
    }

    openModal = () => {
        window.scrollTo(0, 0);
        this.setState({modalOpen: true});
    }

    closeModal = () => {
        this.setState({modalOpen: false});
    }

    render(){
        return(
            <footer className={Styles.footer}>
                <nav>
                    <ul>
                        <li><a className={Styles.styledIcon} href="https://www.instagram.com/sweetspero/" target="_blank"><FaInstagram/></a></li>
                        <li><a className={Styles.styledIcon} href="https://www.facebook.com/tantalizea/" target="_blank"><FaFacebookF/></a></li>
                        <li className={Styles.desktopOnly}><Link to="/termsandconditions">terms of use</Link></li>
                        <li className={Styles.desktopOnly}><Link to="/termsandconditions">privacy policy</Link></li>
                        <li className={Styles.mobileOnly}><Link to="/termsandconditions">terms of use</Link> | <Link to="/termsandconditions">privacy policy</Link></li>
                        <li><p className={Styles.copyright}>© 2019 Tantalizea Lacaden</p></li>
                    </ul>
                </nav>
                <section className={Styles.callToAction}>
                    <p onClick={this.openModal}>Don't leave without becoming a <span className="allCaps">vip</span>!</p>
                    <button onClick={this.openModal}>Sign me up!</button>
                </section>
                {this.state.modalOpen &&
                        <Modal>
                            <header><button onClick={this.closeModal}>x</button></header>
                            <div>
                                <h3>Want to know how to attract new customers?</h3>
                                <p>Sign up to receive your freebie on why it's important to update your website <strong><em>today</em></strong>.</p>
                            </div>
                        </Modal>
                    }
            </footer>
        )
    }
}

export default Footer;
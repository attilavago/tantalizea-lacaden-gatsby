import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Styles from './layout.module.scss';

const Layout = (props) => {
    return (
        <div  className={Styles.main}>
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;
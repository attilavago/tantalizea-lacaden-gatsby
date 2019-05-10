import React from 'react';
import Layout from '../components/layout/layout';
import { Link } from 'gatsby';
import Styles from './404.module.scss';

const NotFound = () => {
    return (
        <Layout>
            <section className={Styles.fourOhFour}>
                <img role="presentation" src="../404.svg" alt=""/>
                <p>We can't find the page you're looking for.</p>
                <p>We could take you back to the <Link to="/">homepage</Link>.</p>
            </section>
        </Layout>
    )
}

export default NotFound;
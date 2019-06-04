import React from 'react';
import Styles from './sectionTriple.module.scss';
import {Link} from 'gatsby';

const SectionTriple = () => {
    return (
        <section className={Styles.SectionTriple}>
            <div>
                <span>
                    <a href="https://medium.com/@tantalizea"><h4>Read Blog</h4></a>
                </span>
            </div>
            <div>
                <span>
                    <Link to="contact"><h4>Download Freebie</h4></Link>
                </span>
            </div>
            <div>
                <span>
                <Link to="contact"><h4>Schedule Meeting</h4></Link>
                </span>
            </div>
        </section>
    )
}

export default SectionTriple;
import React from 'react';
import Styles from './sectionTriple.module.scss';
import Button from '../button/button';

const SectionTriple = () => {
    return (
        <section className={Styles.SectionTriple}>
            <div>
                <span>
                    <h4>Read Blog</h4>
                </span>
            </div>
            <div>
                <span>
                    <h4>Download Freebie</h4>
                </span>
            </div>
            <div>
                <span>
                    <h4>Schedule Meeting</h4>
                </span>
            </div>
        </section>
    )
}

export default SectionTriple;
import React from 'react';
import Styles from './sectionTriple.module.scss';
import Button from '../button/button';

const SectionTriple = () => {
    return (
        <section className={Styles.SectionTriple}>
            <div>
                <span>
                    <h4>item 1</h4>
                    <Button buttonText="test"/>
                </span>
            </div>
            <div>
                <span>
                    <h4>item 2</h4>
                    <Button buttonText="test"/>
                </span>
            </div>
            <div>
                <span>
                    <h4>item 3</h4>
                    <Button buttonText="test"/>
                </span>
            </div>
        </section>
    )
}

export default SectionTriple;
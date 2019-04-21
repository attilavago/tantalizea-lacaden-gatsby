import React from 'react';
import Button from '../button/button';
import Styles from './sectionFull.module.scss'

const SectionFull = (props) => {
    return (
        <section 
            className={Styles.sectionFull} 
            style={{backgroundImage: ` linear-gradient(rgba(${props.overlayColourRgba}), rgba(${props.overlayColourRgba})),url(${props.backgroundImageName})`}}>
            <div className={props.type}>
                <h2>{props.sectionTitle}</h2>
                <p>{props.sectionBlurb}</p>
                <Button buttonText={props.buttonText}/>
            </div>
        </section>
    )
}

export default SectionFull;
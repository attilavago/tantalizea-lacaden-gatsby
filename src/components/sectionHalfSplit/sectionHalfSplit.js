import React from 'react';
import Styles from './sectionHalfSplit.module.scss';

const SectionHalfSplit = (props) => {
    return (
        <section className={Styles.sectionHalfSplit}>
            {props.textImagePosition === 'left-to-right' && 
            <>
                <aside className="mobile-only">
                    <img src={props.asideImage} alt={props.asideImageAltText}/>
                </aside>
                <article>
                <h2>{props.sectionTitle}</h2>
                {props.children}
                </article>
                <aside className="desktop-only">
                    <img src={props.asideImage} alt={props.asideImageAltText}/>
                </aside>
            </>
            }
            {props.textImagePosition === 'right-to-left' && 
            <>
                <aside className="desktop-only">
                    <img src={props.asideImage} alt={props.asideImageAltText}/>
                </aside>
                <article>
                <h2>{props.sectionTitle}</h2>
                {props.children}
                </article>
                <aside className="mobile-only">
                    <img src={props.asideImage} alt={props.asideImageAltText}/>
                </aside>
            </>
            }
        </section>
    )
}

export default SectionHalfSplit;
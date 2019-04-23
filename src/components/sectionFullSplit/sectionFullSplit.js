import React from 'react';
import Styles from './sectionFullSplit.module.scss';

const SectionFullSplit = (props) => {
    return (
        <section className={Styles.sectionFullSplit} style={{backgroundColor: `rgba(${props.articleBkgColourRgba})`}}>
            {props.textImagePosition === 'left-to-right' && 
            <>
                <article className={props.type}>
                <h2>{props.sectionTitle}</h2>
                {props.children}
                </article>
                <aside className={props.imageSize} style={{alignContent: props.imagePosition}}>
                    <img src={props.asideImage} alt={props.asideImageAltText}/>
                </aside>
            </>
            }
            {props.textImagePosition === 'right-to-left' && 
            <>
                <aside className={props.imageSize} style={{alignContent: props.imagePosition}}>
                    <img src={props.asideImage} alt={props.asideImageAltText}/>
                </aside>
                <article className={props.type}>
                <h2>{props.sectionTitle}</h2>
                {props.children}
                </article>
            </>
            }
        </section>
    )
}

export default SectionFullSplit;
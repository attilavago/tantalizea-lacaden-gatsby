import React from 'react';
import Styles from './sectionFullSplit.module.scss';

const SectionFullSplit = (props) => {
    return (
        <section className={Styles.sectionFullSplit} style={{backgroundColor: `rgba(${props.articleBkgColourRgba})`}}>
            {props.textImagePosition === 'left-to-right' && 
            <>
                <article>
                <p>{props.articleText}</p>
                {props.children}
                </article>
                <aside>
                    <img src={props.asideImage} alt={props.asideImageAltText}/>
                </aside>
            </>
            }
            {props.textImagePosition === 'right-to-left' && 
            <>
                <aside>
                    <img src={props.asideImage} alt={props.asideImageAltText}/>
                </aside>
                <article>
                <p>{props.articleText}</p>
                {props.children}
                </article>
            </>
            }
        </section>
    )
}

export default SectionFullSplit;
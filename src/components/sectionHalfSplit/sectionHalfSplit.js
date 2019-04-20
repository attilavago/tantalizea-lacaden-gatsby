import React from 'react';
import Styles from './sectionHalfSplit.module.scss';

const SectionHalfSplit = (props) => {
    return (
        <section className={Styles.sectionHalfSplit}>
            {props.textImagePosition === 'left-to-right' && 
            <>
                <article>
                <h2>{props.sectionTitle}</h2>
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
                <h2>{props.sectionTitle}</h2>
                {props.children}
                </article>
            </>
            }
        </section>
    )
}

export default SectionHalfSplit;
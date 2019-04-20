import React from 'react';
import Styles from './sectionHalfSplit.module.scss';

const SectionHalfSplit = (props) => {
    return (
        <section className={Styles.sectionHalfSplit}>
            {props.textImagePosition === 'left-to-right' && 
            <>
                <article>
                <p>{props.articleText}</p>
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
                </article>
            </>
            }
        </section>
    )
}

export default SectionHalfSplit;
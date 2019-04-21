import React from 'react';
import Styles from './quote.module.scss';

const Quote = (props) => {
    return (
        <div className={Styles.quote}>
            {props.children}
        </div>
    )
}

export default Quote;
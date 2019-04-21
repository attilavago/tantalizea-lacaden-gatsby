import React from 'react';
import Styles from './button.module.scss';

const Button = (props) => {
    return (
        <button className={Styles.button}>
            {props.buttonText}
        </button>
    )
}

export default Button;
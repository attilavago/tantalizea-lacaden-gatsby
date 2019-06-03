import React, {Component} from 'react';
import {Link} from 'gatsby';
import Styles from './modal.module.scss';
import { FaTimes } from 'react-icons/fa';
import { IoIosClose, IoIosMenu } from 'react-icons/io';

const Modal = (props) => {
    return (
        <section className={Styles.Modal}>
            <article>
                {props.children}
            </article>  
        </section>
    )
}

export default Modal;
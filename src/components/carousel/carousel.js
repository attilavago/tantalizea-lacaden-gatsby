import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Quote from '../quote/quote';
import Styles from './carousel.module.scss';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        autoplay: false,
        autoplaySpeed: 4000,
        initialSlide: Math.floor( Math.random() * 3),
    };
    return (
        <section className={Styles.carousel}>
            <Slider {...settings}>
                <Quote>
                    <blockquote>
                        1 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <p>jack pierce</p>
                    <p>director of marketing</p>
                </Quote>
                <Quote>
                    <blockquote>
                        2 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <p>jack pierce</p>
                    <p>director of marketing</p>
                </Quote>
                <Quote>
                    <blockquote>
                        3 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </blockquote>
                    <p>jack pierce</p>
                    <p>director of marketing</p>
                </Quote>
            </Slider>
        </section>
    )
}

export default Carousel;
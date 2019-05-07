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
                    Great communication skills and very helpful. She was able to create a logo and provide very clean work with excellent turn around time. I highly recommend her services.
                    </blockquote>
                    <p>josue padilla</p>
                    <p>Security Systems Installer at EZ-Connect Inc.</p>
                </Quote>
                <Quote>
                    <blockquote>
                    Excellent job. Did a further design without my asking. Looks great. The time pressure was on with this job and she delivered. Highly recommended.
                    </blockquote>
                    <p>client</p>
                    <p>From Bondi Beach, Australia</p>
                </Quote>
                <Quote>
                    <blockquote>
                    Tantalizea&#39;s detailed research gives her insight into client needs and allows her to craft targeted communications that resonate with audiences.
                    </blockquote>
                    <p>jack pierce</p>
                    <p>Director of Marketing at Schuckman Realty Inc.</p>
                </Quote>
            </Slider>
        </section>
    )
}

export default Carousel;
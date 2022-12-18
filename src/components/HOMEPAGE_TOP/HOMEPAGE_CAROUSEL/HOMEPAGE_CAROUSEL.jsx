import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from './../../../assets/images/banner1.png';
import banner2 from './../../../assets/images/banner2.png';

const HOMEPAGECAROUSEL = () => {
    return (
        <div className='homepage-carousel'>
            <Carousel className="carousel-custom">
                <Carousel.Item>
                    <img src={banner1} className="d-block w-100" alt="First Banner" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={banner2} className="d-block w-100" alt="Secound Banner" />
                </Carousel.Item>
                <Carousel.Item>
                    <img src={banner1} className="d-block w-100" alt="First Banner" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HOMEPAGECAROUSEL;

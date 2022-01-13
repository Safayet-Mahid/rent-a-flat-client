import React from 'react';
import "./TraditionalApartments.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// import Swiper core and required modules
import SwiperCore, {
    Pagination,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination]);

const TraditionalApartments = () => {
    return (
        <div>
            <Swiper spaceBetween={30} pagination={{
                "clickable": true
            }} className="mySwiper">
                <SwiperSlide><img src="https://dexico.templatekit.co/wp-content/uploads/sites/26/2020/09/grey-pillows-on-wooden-bed-in-dark-bedroom-interior-with-lamps-a-768x512.jpg" alt="" style={{ width: "50%" }} /></SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide><SwiperSlide>Slide 6</SwiperSlide><SwiperSlide>Slide 7</SwiperSlide><SwiperSlide>Slide 8</SwiperSlide><SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>

        </div>
    );
};

export default TraditionalApartments;
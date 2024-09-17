'use client';

// import Image from 'next/image';
import "./Slider.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/zoom';

const Slider = () => {



  return (
    <Swiper
        modules={[Zoom]}
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
            clickable: false,
        }}
        className="mySwiper"
        zoom-max-ratio="3"
        zoom-min-ratio="1"
    >
        <SwiperSlide zoom={true}>Slide 1</SwiperSlide>
        <SwiperSlide zoom={true}>Slide 2</SwiperSlide>
        <SwiperSlide zoom={true}>Slide 3</SwiperSlide>
    </Swiper>

  )
}

export default Slider
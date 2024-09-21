'use client';

import styles from "./Slider.module.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/zoom';
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaExpandAlt } from "react-icons/fa";
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper'; // Import the Swiper type
import { Server } from "../../utils/server"

interface Slides  {
 slidesInfo: {
  id: number;
  name: string;
  description: string;
  content: string;
  image: string;
 }[]
}

const Slider: React.FC<Slides> = ({ slidesInfo }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);// State to store the swiper instance

  return (
    <section className={styles.section}>
      <Swiper
          modules={[Zoom, Autoplay]}
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={20}
          zoom={{ maxRatio: 2 }}
          autoplay={{
            delay: 3000, // Adjust the delay as per your need (3000ms = 3 seconds)
            disableOnInteraction: false, // Continue autoplay even when user interacts
          }}
          pagination={{
            clickable: false,
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper)} // Store swiper instance on init
          className={`${styles.swiperparent} mySwiper`}
      >
        {
          slidesInfo.map(itm => (
            <SwiperSlide key={itm.id} className={styles.swiperbody} style={{ backgroundImage: `url(${Server.media}${itm.image})` }} >
              <div className={styles.head}>
                <div className={styles.title}>{itm.name}</div>
                <div className={styles.info}>{itm.description}</div>
                <div className={styles.path}>
                  <div className={styles.link}>
                    <Link href={`/${itm.name}`}>SOLUTIONS</Link>
                  </div>
                  <div className={styles.icon}>
                    <MdKeyboardArrowRight />
                  </div>
                </div>
              </div>
              <div className={styles.bot}>
                <FaExpandAlt />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* Button to slide to the next slide */}
      <div className={styles.swipers}>
        <button className={styles.prev} onClick={() => swiperInstance?.slidePrev()}><MdKeyboardArrowLeft /></button>
        <button className={styles.next} onClick={() => swiperInstance?.slideNext()}><MdKeyboardArrowRight /></button>
      </div>
    </section>
  );
}

export default Slider;

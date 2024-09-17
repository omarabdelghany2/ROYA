'use client';

// import Image from 'next/image';
import "./Slider.css"
import styles from "./Slider.module.scss"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/zoom';
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaExpandAlt } from "react-icons/fa";


interface Slides  {
 slidesInfo: {
  title: string;
  description: string;
  path: string;
  link: string;
  image: string;
  id: number;
 }[]
}



const Slider: React.FC<Slides> = ({ slidesInfo }) => {



  return (
    <Swiper
        modules={[Zoom]}
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
            clickable: false,
        }}
        className={`${styles.swiperparent} mySwiper`}
        // zoom-max-ratio="3"
        // zoom-min-ratio="1"

    >
      {

        slidesInfo.map(itm => (
          <SwiperSlide key={itm.id} className={styles.swiperbody} style={{ backgroundImage: `url(${itm.image})` }} >
            <div className={styles.head}>
              <div className={styles.title}>{itm.title}</div>
              <div className={styles.info}>{itm.description}</div>
              <div className={styles.path}>
                <div className={styles.link}>
                  <Link href={itm.path}>{itm.link}</Link>
                  
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

  )
}

export default Slider
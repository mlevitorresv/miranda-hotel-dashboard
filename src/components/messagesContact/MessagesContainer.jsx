import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Message } from './Message'
import 'swiper/css'

export const MessagesContainer = (props) => {
  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
        <SwiperSlide> <Message img={'/public/levi.jpeg'} name={'Leví'} join={'4am ago'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} /> </SwiperSlide>
        <SwiperSlide> <Message img={'/public/levi.jpeg'} name={'Leví'} join={'4am ago'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} /> </SwiperSlide>
        <SwiperSlide> <Message img={'/public/levi.jpeg'} name={'Leví'} join={'4am ago'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} /> </SwiperSlide>
        <SwiperSlide> <Message img={'/public/levi.jpeg'} name={'Leví'} join={'4am ago'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} /> </SwiperSlide>
    </Swiper>
  );
}

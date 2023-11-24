import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Message } from './Message'
import 'swiper/css'
import comments from '../../../data/comment.json'

export const MessagesContainer = (props) => {
  return (
    <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
      {comments.map(comment => (
        <SwiperSlide> <Message img={comment.photo} name={comment.name} join={comment.date} comment={comment.comment} /> </SwiperSlide>
      ))}
        {/* <SwiperSlide> <Message img={'/public/levi.jpeg'} name={'Leví'} join={'4am ago'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} /> </SwiperSlide>
        <SwiperSlide> <Message img={'/public/levi.jpeg'} name={'Leví'} join={'4am ago'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} /> </SwiperSlide>
        <SwiperSlide> <Message img={'/public/levi.jpeg'} name={'Leví'} join={'4am ago'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} /> </SwiperSlide>
        <SwiperSlide> <Message img={'/public/levi.jpeg'} name={'Leví'} join={'4am ago'} comment={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'} /> </SwiperSlide> */}
    </Swiper>
  );
}

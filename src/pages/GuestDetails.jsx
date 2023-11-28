import React from 'react'
import { DetailsGuestDivStyled } from '../components/guest/details/DetailsGuestDivStyled'
import { DetailsGuestDivUserStyled } from '../components/guest/details/DetailsGuestDivUserStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { FaPhoneAlt } from "react-icons/fa";
import { PiChatCircleTextFill } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";
import { GuestDiv } from '../components/guest/GuestDiv'
import { DetailsGuestRoomStyled } from '../components/guest/details/DetailsGuestRoomStyled';
import { DetailsInfoStyled } from '../components/guest/details/DetailsInfoStyled';
import { DetailsPhotoStyled } from '../components/guest/details/DetailsPhotoStyled';
import { DetailsTitleStyled } from '../components/guest/details/DetailsTitleStyled';
import { DetailsDataStyled } from '../components/guest/details/DetailsDataStyled';
import { DetailsSpanStyled } from '../components/guest/details/DetailsSpanStyled';
import { DetailsDescStyled } from '../components/guest/details/DetailsDescStyled';
import { LuBedDouble } from 'react-icons/lu';
import { IoWifiOutline } from "react-icons/io5";
import { SiAdguard } from "react-icons/si";
import { HrStyled } from '../components/common/HrStyled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImgStyled } from '../components/common/ImgStyled';



export const GuestDetails = () => {
  return (
    <DetailsGuestDivStyled>
      <DetailsInfoStyled>
        <DetailsGuestDivUserStyled type='secondary'>
          <div className="image">
            <img src="/public/levi.jpeg" alt="levi's photo" />
            <div>
              <p className='name'>Roberto Mansini</p>
              <p className='id'>ID 1234124512551</p>
              <p className='button'>
                <ButtonStyled className='button__item' color={'#135846'} bg={'white'} border={'1px solid #E8F2EF'}><FaPhoneAlt/></ButtonStyled>
                <ButtonStyled className='button__item' color={'white'} bg={'#135846'}><PiChatCircleTextFill /> Send Message</ButtonStyled>
              </p>
            </div>
          </div>
          <GuestDiv data={<HiDotsVertical />} />
        </DetailsGuestDivUserStyled>
        <DetailsGuestRoomStyled>
          <DetailsGuestDivUserStyled type='secondary'>
            <div>
              <DetailsTitleStyled>Check In</DetailsTitleStyled>
              <DetailsDataStyled>October 30th, 2020 | 08:23 AM</DetailsDataStyled>
            </div>
            <div>
              <DetailsTitleStyled>Check Out</DetailsTitleStyled>
              <DetailsDataStyled>November 2th, 2020</DetailsDataStyled>
            </div>
          </DetailsGuestDivUserStyled>
          <HrStyled />
          <DetailsGuestDivUserStyled type='secondary'>
            <div>
              <DetailsTitleStyled>Room info</DetailsTitleStyled>
              <DetailsDataStyled>Deluxe Z-002424</DetailsDataStyled>
            </div>
            <div>
              <DetailsTitleStyled>Price</DetailsTitleStyled>
              <DetailsDataStyled>$145 <DetailsSpanStyled>/night</DetailsSpanStyled></DetailsDataStyled>
            </div>
          </DetailsGuestDivUserStyled>
          <DetailsDescStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          Duis aute irure dolor in reprehenderit in voluptate velit 
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
          occaecat cupidatat non proident, sunt in culpa qui officia 
          deserunt mollit anim id est laborum
          </DetailsDescStyled>
        </DetailsGuestRoomStyled>
        <DetailsGuestDivUserStyled type='secondary'  wrap='true'>
          <ButtonStyled><LuBedDouble/> 3 Bed Space </ButtonStyled>
          <ButtonStyled><SiAdguard  /> 24 Hours Guard </ButtonStyled>
          <ButtonStyled><IoWifiOutline />Free Wifi </ButtonStyled>
          <ButtonStyled>2 Bathroom</ButtonStyled>
          <ButtonStyled>Air Conditioner</ButtonStyled>
          <ButtonStyled>Television</ButtonStyled>
        </DetailsGuestDivUserStyled>
      </DetailsInfoStyled>
      <DetailsPhotoStyled>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><ImgStyled src="../../../../public/room.jpg" alt="room" /></SwiperSlide>
          <SwiperSlide><ImgStyled src="../../../../public/room.jpg" alt="room" /></SwiperSlide>
          <SwiperSlide><ImgStyled src="../../../../public/room.jpg" alt="room" /></SwiperSlide>
        </Swiper>
        <DetailsDescStyled type='photo'>
          <DetailsTitleStyled>Bed Room</DetailsTitleStyled>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna 
          aliqua. Ut enim ad minim veniam, quis nostrud exerci
          </DetailsDescStyled>
      </DetailsPhotoStyled>
    </DetailsGuestDivStyled>
  )
}

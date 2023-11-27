import React from 'react'
import { DetailsGuestDivStyled } from '../components/guest/details/DetailsGuestDivStyled'
import { DetailsGuestDivUserStyled } from '../components/guest/details/DetailsGuestDivUserStyled'
import { ButtonStyled } from '../components/common/ButtonStyled'
import { FaPhoneAlt } from "react-icons/fa";
import { PiChatCircleTextFill } from "react-icons/pi";
import { HiDotsVertical } from "react-icons/hi";
import { GuestDiv } from '../components/guest/GuestDiv'


export const GuestDetails = () => {
  return (
    <DetailsGuestDivStyled>
      <DetailsGuestDivUserStyled>
        <div className="image">
          <img src="/public/levi.jpeg" alt="levi's photo" />
          <div>
            <p className='name'>Roberto Mansini</p>
            <p className='id'>ID 1234124512551</p>
            <p className='button'>
              <ButtonStyled className='button__item' color={'#135846'} bg={'white'}><FaPhoneAlt/></ButtonStyled>
              <ButtonStyled className='button__item' color={'white'} bg={'#135846'} border={'1px solid #E8F2EF'}><PiChatCircleTextFill /> Send Message</ButtonStyled>
            </p>
          </div>
        </div>
        <GuestDiv data={<HiDotsVertical />} />
      </DetailsGuestDivUserStyled>
      {/* <DetailsGuestGridStyled>
        <div className="in">
          <p className="title">Check In</p>
          <p className="info">October 30th, 2020 | 08:23 AM</p>
        </div>
        <div className="out">
          <p className="title">Check Out</p>
          <p className="info">November 2th, 2020</p>
        </div>
        <hr className="sep" />
      </DetailsGuestGridStyled> */}
    </DetailsGuestDivStyled>
  )
}

import React from 'react'
import { AsideNavStyled } from './AsideNavStyled'
import { NavLinkStyled } from './NavLinkStyled'
import { MdOutlineDashboard } from 'react-icons/md';
import { TfiKey } from 'react-icons/tfi';
import { LuCalendarCheck2 } from 'react-icons/lu';
import { FaUsers } from 'react-icons/fa';
import { BsTelephoneInbound } from 'react-icons/bs';
import { DivStyled } from '../DivStyled.js'
import { ButtonStyled } from '../ButtonStyled.js';

export const AsideNav = () => {
  return (
    <AsideNavStyled>
        <img src="../../../public/logo.png" alt="hotel miranda's logo" />
        <div className='icons'>
            <NavLinkStyled to="/">
                <MdOutlineDashboard />
                Dashboard
            </NavLinkStyled>
            <NavLinkStyled to="/rooms">
                <TfiKey />
                Rooms
            </NavLinkStyled>
            <NavLinkStyled to="/bookings">
                <LuCalendarCheck2 />
                Bookings
            </NavLinkStyled>
            <NavLinkStyled to="/users">
                <FaUsers />
                Users
            </NavLinkStyled>
            <NavLinkStyled to="/contact">
                <BsTelephoneInbound />
                Contact
            </NavLinkStyled>
        </div>
        <DivStyled>
            <img src="../../public/levi.jpeg" alt="user photo" />
            <p className='name'>Manuel Leví</p>
            <p className='email'>levitorres66@gmail.com</p>
            <ButtonStyled>Edit</ButtonStyled>
        </DivStyled>
        <p className='desc'>Travl Hotel Admin Dashboard</p>
        <p className='green'>&copy; 2020 All Rights Reserved</p>
        <p className='green'>Made with ♥ by Manuel Leví</p>
    </AsideNavStyled>
  )
}

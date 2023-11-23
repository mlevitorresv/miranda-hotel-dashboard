import React, { useEffect, useState } from 'react'
import { HeaderStyled } from './headerStyled'
import { H1Styled } from '../H1Styled'
import { 
    DashboardStyledIcon, 
    HeartStyledIcon, 
    NotificationStyledIcon,
    ArrowStyledIcon
} from '../IconStyled'
import { AsideNav } from './AsideNav'
import { Outlet } from "react-router-dom"


export const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handlerMenu = () => {
    const dashboardIcon = document.getElementById('dashboardIcon');
    const arrowIcon = document.getElementById('arrowIcon');
    const asideNav = document.getElementById('asideNav');
    const header = document.getElementById('header');

    if (!isOpenMenu) {
      if (dashboardIcon) dashboardIcon.style.display = 'inline';
      if (arrowIcon) arrowIcon.style.display = 'none';
      if (asideNav) asideNav.style.display = 'none';
      setIsOpenMenu(true);
    } else {
      if (dashboardIcon) dashboardIcon.style.display = 'none';
      if (arrowIcon) arrowIcon.style.display = 'inline';
      if (asideNav) asideNav.style.display = 'flex';
      setIsOpenMenu(false);
    }
  };

  useEffect(()=>{
    handlerMenu();
  }, []);


  return (
    <>    
      {!isOpenMenu && <AsideNav id='asideNav' />}
      <HeaderStyled id='header'>
        <div>
          <DashboardStyledIcon id='dashboardIcon' onClick={handlerMenu}/>
          <ArrowStyledIcon id='arrowIcon' onClick={handlerMenu}/>
          <H1Styled>Dashboard</H1Styled>
        </div>
        <div>
          <HeartStyledIcon />
          <NotificationStyledIcon />
        </div>
      </HeaderStyled>
      <Outlet />
    </>
  )
}

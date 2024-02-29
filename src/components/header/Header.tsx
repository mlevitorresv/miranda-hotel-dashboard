import React, { useEffect, useState } from 'react'
import { HeaderStyled } from './HeaderStyled'
import { H1Styled } from '../common/H1Styled'
import { 
    DashboardStyledIcon, 
    HeartStyledIcon, 
    NotificationStyledIcon,
    ArrowStyledIcon,
    LogOutStyledIcon
} from '../common/IconStyled'
import { AsideNav } from './AsideNav'
import { Link } from "react-router-dom"
import { useAuth } from '../../context/AuthProvider'
import { HeaderPropsInterface } from '../../interfaces/componentsInterface'


export const Header = (props: HeaderPropsInterface) => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { logout } = useAuth();

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

  const handleLogOut = () => {
    logout();
  }


  return (
    <>    
      {!isOpenMenu && <AsideNav id='asideNav' />}
      <HeaderStyled id='header'>
        <div>
          <DashboardStyledIcon id='dashboardIcon' onClick={handlerMenu}/>
          <ArrowStyledIcon id='arrowIcon' onClick={handlerMenu}/>
        </div>
        <H1Styled>{props.title}</H1Styled>
        <div>
          <HeartStyledIcon />
          <NotificationStyledIcon />
          <Link to='/'>
            <LogOutStyledIcon onClick={handleLogOut}/>
          </Link>
        </div>
      </HeaderStyled>
    </>
  )
}

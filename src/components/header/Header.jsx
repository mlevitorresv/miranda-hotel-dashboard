import React, { useEffect, useState } from 'react'
import { HeaderStyled } from './headerStyled'
import { SearchBarStyled } from '../SearchBarStyled'
import { H1Styled } from '../H1Styled'
import { SelectStyled } from '../SelectStyled'
import { 
    DashboardStyledIcon, 
    HeartStyledIcon, 
    MailStyledIcon, 
    NotificationStyledIcon,
    ChatStyledIcon,
    ArrowStyledIcon
} from '../IconStyled'
import { AsideNav } from './AsideNav'


export const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const showMenu = () => {
    const dashboardIcon = document.getElementById('dashboardIcon');
    const arrowIcon = document.getElementById('arrowIcon');
    const asideNav = document.getElementById('asideNav');

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
    showMenu();
  }, []);


  return (
    <>    
      {!isOpenMenu && <AsideNav id='asideNav' />}
      <HeaderStyled>
        <div>
          <DashboardStyledIcon id='dashboardIcon' onClick={showMenu}/>
          <ArrowStyledIcon id='arrowIcon' onClick={showMenu}/>
          <H1Styled>Dashboard</H1Styled>
        </div>

        <div>
          <SearchBarStyled />
          <HeartStyledIcon />
          <MailStyledIcon />
          <NotificationStyledIcon />
          <ChatStyledIcon />
          <img src="" alt="" />
          <SelectStyled>
              <option value="EN">EN</option>
              <option value="ES">ES</option>
          </SelectStyled>
        </div>
      </HeaderStyled>
    </>
  )
}

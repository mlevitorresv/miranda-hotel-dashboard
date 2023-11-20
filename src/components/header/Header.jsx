import React from 'react'
import { HeaderStyled } from './headerStyled'
import { SearchBarStyled } from '../SearchBarStyled'
import { H1Styled } from '../H1Styled'
import { SelectStyled } from '../SelectStyled'
import { 
    DashboardStyledIcon, 
    HeartStyledIcon, 
    MailStyledIcon, 
    NotificationStyledIcon,
    ChatStyledIcon
} from '../IconStyled'


export const Header = () => {
  return (
    <HeaderStyled>
      <div>
      <DashboardStyledIcon />
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
  )
}

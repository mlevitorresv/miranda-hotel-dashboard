import styled from "styled-components";

interface GuestDivStyledPropsInterface{
  color: string
}

export const GuestDivStyled = styled.p<GuestDivStyledPropsInterface>`
  color: ${props => props.color ? props.color : '#393939'};
`

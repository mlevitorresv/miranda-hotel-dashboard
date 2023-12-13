import styled from "styled-components";

interface RoomStatusStyledPropsInterface{
  bg: string
}

export const RoomStatusStyled = styled.p<RoomStatusStyledPropsInterface>`
  color: white;
  padding: .2em .7em;
  text-align: center;
  vertical-align: center;
  background-color: ${props => props.bg ? props.bg : ''};
  border-radius: 10px;
`

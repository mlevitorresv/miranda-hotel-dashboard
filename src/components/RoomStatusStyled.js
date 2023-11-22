import styled from "styled-components";


export const RoomStatusStyled = styled.p`
  color: white;
  padding: .2em .7em;
  text-align: center;
  vertical-align: center;
  background-color: ${props => props.bg ? props.bg : ''};
  border-radius: 10px;
`

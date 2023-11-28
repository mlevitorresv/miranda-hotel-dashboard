import styled from "styled-components";



export const DetailsDescStyled = styled.p`
    font-size: .8em;
    font-family: 'Poppins';
    color: #363636;
    width: ${props => props.type === 'photo' ? '70%' : ''}
`
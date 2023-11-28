import styled from "styled-components";



export const DetailsDescStyled = styled.p`
    font-size: .8em;
    font-family: 'Poppins';
    color: #363636;
    width: ${props => props.type === 'photo' ? '70%' : ''};
    position: ${props => props.type === 'photo' ? 'relative' : ''};
    bottom: ${props => props.type === 'photo' ? '15em' : ''};
    margin: ${props => props.type === 'photo' ? '0 auto' : ''};
`
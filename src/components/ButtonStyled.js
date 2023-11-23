import styled from "styled-components"



export const ButtonStyled = styled.button`
    // width: auto;
    font: normal normal 600 14px/21px Poppins;
    color: ${props => props.color ? props.color : '#135846'};
    margin: 1em auto 0;
    padding: 1em 2em;
    background: ${props => props.bg ? props.bg : '#EBF1EF'};
    border: ${props => props.border ? props.border : 'none'};
    border-radius: 8px;
    cursor: pointer;
`
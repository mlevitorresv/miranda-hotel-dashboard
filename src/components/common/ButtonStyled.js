import styled from "styled-components"



export const ButtonStyled = styled.button`
    // width: auto;
    font: normal normal 600 14px/21px Poppins;
    color: ${props => props.color ? props.color : '#135846'};
    margin: 1em .1em 0;
    padding: 1em;
    background: ${props => props.bg ? props.bg : '#EBF1EF'};
    border: ${props => props.border ? props.border : 'none'};
    border-radius: 8px;
    cursor: pointer;
`
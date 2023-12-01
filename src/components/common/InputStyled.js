import styled from "styled-components";

export const InputStyled = styled.input`
    background-color: #FCFCFC ;
    width: ${props => props.type === 'secondary' ? '' : '60%'};
    border: 1px solid black;
    border-radius: 12px;
    padding: 1em 1em;
    margin: ${props => props.type === 'secondary' ? '1em' : '1em auto'};
    display: inline;
`
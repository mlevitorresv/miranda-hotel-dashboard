import styled from "styled-components";


export const ListElementStyled = styled.li`
    padding: 1em;
    border-bottom: 1px solid ${props => props.color ? props.color : '#6e6e6e'};
    display: inline;
    font-size: 1em;
    font-family: 'Poppins';
    color: ${props => props.color ? props.color : '#6e6e6e'};
`
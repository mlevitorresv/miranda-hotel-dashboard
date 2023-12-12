import styled from "styled-components";


export const TrStyled = styled.tr`
    width: 100%;
    height: 4em;
    vertical-align: ${props => props.align ? props.align : 'top'};
    border: 1px solid black;
`
import styled from "styled-components"



export const AsideNavStyled = styled.nav`
    padding: 2em;
    width: 15em;
    height: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    img{
        margin-left: 1.5em;
        width: 50px;
        height: 50px;
    }

    .icons{
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin-top: 3.5em
    }
`
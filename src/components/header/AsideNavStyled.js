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

    .desc{
        font: normal normal 600 1.1em Poppins;
        color: #212121;
        margin-bottom: 0;
    }

    .green{
        font: normal normal 300 .8em Poppins;
        color: #799283;
        margin-top: .5em;
        margin-bottom: 4em;
    }
`
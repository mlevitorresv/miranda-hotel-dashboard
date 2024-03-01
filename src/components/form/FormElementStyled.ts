import styled from "styled-components";


export const FormUserStyled = styled.form`
    width: 70%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1em;
    padding: 4em 4em;
    background-color: white;
    border: 1px solid #E23428;
    border-radius: 30px;
    margin: auto;

    box-shadow: 10px 10px 10px #E23428;

    &:hover{
        border: 1px solid #135846;
        box-shadow: 10px 10px 10px #135846;
    }
`
import styled from "styled-components";



export const KPIStyled = styled.div`
    background-color: white;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    display: flex;
    align-items: center;
    height: 4em;
    width: 15em;
    padding: 1em;
    font-family: 'Poppins';

    &:hover{
        .iconContainer{
            color: white;
            background-color: #E23428;
        }
    }

    .iconContainer{
        background-color: #FFEDEC;
        padding: 1.1em;
        border-radius: 5px;
        margin-right: 1em;
        color: #E23428;
    }

    .dataContainer{
        &__number{
            color: #393939;
            font-weight: 600;
            font-size: 1.9em;
            margin: 0;
        }

        &__text{
            color: #787878;
            font-weight: 300;
            font-size: .9em;
            margin: 0;
        }
    }
`
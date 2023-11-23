import styled from "styled-components";

export const DetailsGuestGridStyled = styled.div`
    display: grid;
    grid-area-templates: 'in out' 'sep' 'info price';

    div{
        font-family: 'Poppins'
        .title{
            color: #6e6e6e;
            font-size: .9em;
        }

        .info{
            color: #212121;
            font-size: 1.5em;
        }
    }

    .in{
        grid-area: in;
    }
    .out{
        grid-area: out;
    }
    .sep{
        grid-area: sep;
    }
    .in{
        grid-area: info;
    }
    .in{
        grid-area: Price;
    }
`
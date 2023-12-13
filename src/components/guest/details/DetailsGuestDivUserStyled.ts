import styled from "styled-components";

interface DetailsGuestDivUserStyledPropsInterface{
    wrap?: string,
    type?: string
}

export const DetailsGuestDivUserStyled = styled.div<DetailsGuestDivUserStyledPropsInterface>`
    display: flex;    
    justify-content: ${props => props.wrap === 'true' ? '' : 'space-between'};
    flex-wrap: ${props => props.wrap === 'true' ? 'wrap' : 'nowrap'};
    padding: 1em;
    width: ${props => props.type === 'secondary' ? '' : '45%'};

    .image{
        display: flex;
        align-items: center;
        width: 70%;

        img{
            width: 8em;
            height: 100%;
            margin-right: 3em;
            border-radius: 5px;
        }

        .name{
            color: #212121;
            font-weight: 600;
            font-size: 1.9em;
            margin: 0;
        }

        .id{
            color: #799283;
            font-size: .9em;
        }

        .button{
            margin: 0;
        }

    }
`
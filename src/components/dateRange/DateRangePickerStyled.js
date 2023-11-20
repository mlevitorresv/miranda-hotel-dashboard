import styled from "styled-components";

export const DateRangePickerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    label {
        margin-bottom: 5px;
    }

    .datePickerWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-radius: 5px;
        width: 200px;
        outline: none;
    }
`
import styled from "styled-components";

export const InputText = styled.input`    
    width: 100%;
    height: 50px;

    background: #F5F4F6;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;

    text-align: left;
    font: 20px/26px Source Sans Pro, FontAwesome ;
    letter-spacing: 0.4px;
    font-size: 20px;
    padding: 13px 22.1px 12px;
    color: #170C3A;
    margin-right : 0.5em;
    

    ::placeholder {
        color: #B1ADB9;
    }

    :focus {
        background: #EBEAED;
        border: 1px solid #DEDCE1;

        letter-spacing: 0;
    }

    :focus::placeholder {
        color: #8F8A9B;
    }
`

export const InputTextLarge = styled.textarea`
    resize : none;
    width: 100%;

    background: #F5F4F6;
    border: 1px solid #EBEAED;
    border-radius: 5px;
    opacity: 1;

    text-align: left;
    font: 20px/26px Source Sans Pro, FontAwesome ;
    letter-spacing: 0.4px;
    font-size: 20px;
    padding: 12.48px 22.1px;
    color: #170C3A;
    margin-right : 0.5em;
    

    ::placeholder {
        color: #B1ADB9;
    }

    :focus {
        background: #EBEAED;
        border: 1px solid #DEDCE1;

        letter-spacing: 0;
    }

    :focus::placeholder {
        color: #8F8A9B;
    }
`
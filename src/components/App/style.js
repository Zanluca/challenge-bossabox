import styled, {createGlobalStyle} from "styled-components";

const Container = styled.div`
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content : center;
    flex-wrap: wrap;
`

const AppContent = styled.div`
    h1 {
        font-size: 4em;
    }

    h2 {
        font-size: 3.17em;
    }

    input[type=checkbox] {
        position: absolute;
        opacity: 0;
    }

    input[type=checkbox] + label {
        position: relative;
        cursor: pointer;
        padding: 0;    
    }

    input[type=checkbox] + label::before {
        content: '';
        margin-right: 5px;
        display: inline-block;
        vertical-align: middle;
        width: 15px;
        height: 15px;
        background: #F5F4F6;
        border: 1px solid #DEDCE1;
    }

    input[type=checkbox]:checked + label::before {    
        background: #365DF0;
        border: 1px solid #365DF0;
    }

    input[type=checkbox]:checked + label::after {    
        content: '';
        position: absolute;
        background: white;
        transform: rotate(45deg);
        left: 3px;
        top: 10px;
        width: 2px;
        height: 2px;
        box-shadow: 
            2px 0 0 white,
            4px 0 0 white,
            4px -2px 0 white,
            4px -4px 0 white,
            4px -6px 0 white,
            4px -8px 0 white;
    }

`

const Grid = styled.div`
    margin-top : 60px;
    display: grid;
    grid-template-columns: 2.3fr 1fr 0fr;
    grid-gap : 10px;

    span{
        margin-top: 15px;
    }
`

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body, input, button {
        font-family: 'Source Sans Pro', Semibold;
    }
`

export {
    Container,
    AppContent,
    GlobalStyle,
    Grid
}
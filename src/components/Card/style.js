import styled from "styled-components";

const CardContainer = styled.div`
    background-color: #FFFFFF;
    border: 1px solid #EBEAED;
    padding: 16px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, .05);
    text-align: left;
    outline: 1px solid #ddd;
    width : 100%;
    max-width: 950px;
    margin-bottom: 1.5em;


    *{
        font-size : 18px;
    }

    a{
        font-size : 22px;
    }
`

const CardTitleContainer = styled.div`    
    margin-bottom : 1em;
    display: grid;
    grid-template-columns: 10fr 1fr;
`

const CardBody = styled.div`
    margin-bottom: 2.5em;
`

const CardFooter = styled.div`
    font-weight: bold;
    margin-bottom: 1em;

    mark {
        padding: 0;
        background-color: #ffd703;
    }
`

export {
    CardContainer,
    CardTitleContainer,
    CardBody,
    CardFooter
}
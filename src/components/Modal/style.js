import styled from "styled-components"

const ModaBackground = styled.div`
    position: fixed;
    top : 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: ${props => props.show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0, 0.8);
    overflow : hidden;
`

const ModalContainer = styled.div`
    width: 600px;
    /* height: 332px; */
    background: #FFFFFF;
    box-shadow: 0px 20px 25px #000000;
    border-radius: 5px;
    padding: 30px 30.5px;
`

const ModalTitle = styled.div`
    display: grid;
    grid-template-columns: 16fr 0fr;

    span {
        font-size : 1.5em;
    }

    img {
        cursor: pointer;
    }
`

const ModalBody = styled.div`
    text-align: left;
    font: 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    color: #8F8A9B;
    opacity: 1;
    margin-top: 30px
`

const ModalFooter = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-top: 30px;

    button{
        margin-left : 1em
    }
`

const LabelInput = styled.label`
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
`

export {
    ModaBackground,
    ModalContainer,
    ModalTitle,
    ModalBody,
    ModalFooter,
    LabelInput
}
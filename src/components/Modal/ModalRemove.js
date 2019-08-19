import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {ModaBackground, ModalContainer, ModalTitle, ModalBody, ModalFooter} from './style'
import {Button} from '../Button'
import close from '../../assets/Close.svg'

function ModalRemove(props) {
    const refBackground = useRef(null)
    
    function handleBackgroungClick(e){
        if (e.target === refBackground.current) {
            props.close()
        }
    }

    function handleClose() {
        props.close()
    }

    return (
        <ModaBackground ref={refBackground} onClick={(e) => handleBackgroungClick(e)} show={props.show}>
            <ModalContainer>
                <ModalTitle>
                    <span><FontAwesomeIcon icon='times'/> Remove tool</span>
                    <img src={close} alt='close' onClick={handleClose} />
                </ModalTitle>
                <ModalBody>
                    Are you sure you want to remove {props.name}?
                </ModalBody>
                <ModalFooter>
                <Button primary danger onClick={props.remove}>Yes, remove</Button>
                <Button secondary danger onClick={handleClose}>Cancel</Button>
                </ModalFooter>
            </ModalContainer>
        </ModaBackground>
    )
}

export default ModalRemove
import React, {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {ModaBackground, ModalContainer, ModalTitle, ModalBody, ModalFooter} from './style'
import {Button} from '../Button'
import BaseModal from './BaseModal'

import closeIcon from '../../assets/Close.svg'

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
        <BaseModal testeID='modal-remove'  onClose={props.close} show={props.show}>
            <ModalContainer>
                <ModalTitle>
                    <span><FontAwesomeIcon icon='times'/> Remove tool</span>
                    <img src={closeIcon} alt='close' onClick={handleClose} />
                </ModalTitle>
                <ModalBody>
                    Are you sure you want to remove {props.name}?
                </ModalBody>
                <ModalFooter>
                <Button primary danger onClick={props.remove} aria-label='button-yes-remove'>Yes, remove</Button>
                <Button secondary danger onClick={handleClose} aria-label='button-cancel-remove'>Cancel</Button>
                </ModalFooter>
            </ModalContainer>
        </BaseModal>
    )
}

export default ModalRemove
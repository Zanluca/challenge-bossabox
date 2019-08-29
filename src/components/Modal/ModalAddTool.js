import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ModalContainer, ModalTitle, ModalBody, ModalFooter, LabelInput} from './style'
import {Button} from '../Button'
import {InputText, InputTextLarge} from '../InputText'
import BaseModal from './BaseModal'
import close from '../../assets/Close.svg'

const defaultTool = {
    description : '',
    link : '',
    tags: [],
    title : '',
}

function ModalAddTool(props) {
    const [tool, setTool] = useState(defaultTool)
    const [tagsStr, setTagsStr] = useState('')
    
    useEffect(() => {        
        setTool(defaultTool)
        setTagsStr('')
    }, [props.show])

    function handleClose() {
        setTool(defaultTool)
        setTagsStr('')
        props.close()
    }

    function handleTitleType(e) {
        setTool({
            ...tool, 
            title : e.target.value
        })
    }

    function handleLinkType(e) {
        setTool({
            ...tool, 
            link : e.target.value
        })
    }

    function handleDescriptionType(e) {
        setTool({
            ...tool, 
            description : e.target.value
        })
    }

    function handleTagsType(e) {
        const tags = e.target.value.split(' ')
        setTagsStr(e.target.value)
        setTool({
            ...tool, 
            tags
        })
    }

    return (
        <BaseModal testeID='modal-add' onClose={props.close} show={props.show}>
            <ModalContainer>
                <ModalTitle>
                    <span><FontAwesomeIcon icon='plus'/> Add new tool</span>
                    <img src={close} alt='close' onClick={handleClose} />
                </ModalTitle>
                <ModalBody>
                    <LabelInput>Tool Name</LabelInput>
                    <InputText aria-label='tool-name' value={tool.title} onChange={handleTitleType}/>

                    <LabelInput>Tool Link</LabelInput>
                    <InputText aria-label='tool-link' value={tool.link} onChange={handleLinkType}/>

                    <LabelInput>Tool Description</LabelInput>
                    <InputTextLarge aria-label='tool-description' rows="6" cols="54" value={tool.description} onChange={handleDescriptionType}/>

                    <LabelInput>Tool Tags</LabelInput>
                    <InputText aria-label='tool-tags' value={tagsStr} onChange={handleTagsType}/>
                </ModalBody>
                <ModalFooter>
                <Button aria-label='button-add-tool' primary neutral onClick={() => props.addTool(tool)}>Add tool</Button>
                </ModalFooter>
            </ModalContainer>
        </BaseModal>
    )
}

export default ModalAddTool
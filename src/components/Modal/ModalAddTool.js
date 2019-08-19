import React, {useState, useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {ModaBackground, ModalContainer, ModalTitle, ModalBody, ModalFooter, LabelInput} from './style'
import {Button} from '../Button'
import {InputText, InputTextLarge} from '../InputText'
import close from '../../assets/Close.svg'

const defaultTool = {
    description : '',
    link : '',
    tags: [],
    title : '',
}

function ModalAddTool(props) {
    const refBackground = useRef(null)
    const [tool, setTool] = useState(defaultTool)
    const [tagsStr, setTagsStr] = useState('')
    
    function handleBackgroungClick(e){
        if (e.target === refBackground.current) {
            setTool(defaultTool)
            setTagsStr('')
            props.close()
        }
    }

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
        <ModaBackground ref={refBackground} onClick={(e) => handleBackgroungClick(e)} show={props.show}>
            <ModalContainer>
                <ModalTitle>
                    <span><FontAwesomeIcon icon='plus'/> Add new tool</span>
                    <img src={close} alt='close' onClick={handleClose} />
                </ModalTitle>
                <ModalBody>
                    <LabelInput>Tool Name</LabelInput>
                    <InputText value={tool.title} onChange={handleTitleType}/>

                    <LabelInput>Tool Link</LabelInput>
                    <InputText value={tool.link} onChange={handleLinkType}/>

                    <LabelInput>Tool Description</LabelInput>
                    <InputTextLarge rows="6" cols="54" value={tool.description} onChange={handleDescriptionType}/>

                    <LabelInput>Tool Tags</LabelInput>
                    <InputText value={tagsStr} onChange={handleTagsType}/>
                </ModalBody>
                <ModalFooter>
                <Button primary neutral onClick={() => props.addTool(tool)}>Add tool</Button>
                </ModalFooter>
            </ModalContainer>
        </ModaBackground>
    )
}

export default ModalAddTool
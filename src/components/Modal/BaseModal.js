import React, {useRef, useEffect } from 'react'
import { ModaBackground } from './style'

function BaseModal({
    onClose = () => { },
    show = false,
    children = undefined,
    testeID = ''
}) {
    const refBackground = useRef(null)

    useEffect(() => {
        const body = document.body
        if (show) {
            body.style.height = '100vh';
            body.style.overflowY = 'hidden';
        }
        else {            
            body.style.overflowY = 'auto';
        }

        return () => {
            const body = document.body
            body.style.overflowY = 'auto';
        };
    }, [show])

    function handleBackgroungClick(e) {
        if (e.target === refBackground.current) {
            onClose()
        }
    }

    return (
        <ModaBackground data-testid={testeID} ref={refBackground} onClick={(e) => handleBackgroungClick(e)} show={show}> 
            {children}
        </ModaBackground>
    )
}

export default BaseModal
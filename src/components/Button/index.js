import styled from "styled-components";

const Button = styled.button`
    display: inline-block;  
    border-radius: 5px;
    padding: ${props => ((props.primary) || (props.secondary)) ? '14px 26px 13px 26px' : '0'};
    height: ${
        props => {
            if ((props.primary) || (props.secondary))
                return '50px'
            else if (props.terciary)
                return '35px'
            else
                return '0'
        }
    };
    ${props => (!props.quartiary ? 'width: 174px' : '')} ;    
    font-size: 18px;
    border: 1px solid transparent;
    cursor: pointer; 
    background-color: ${
        props => {
            if (props.primary) {
                if (props.danger) 
                    return '#F95E5A'
                else if (props.success)
                    return '#0DCB7D'    
                else if (props.neutral)
                    return '#365DF0'
                else
                    return 'transparent'
            }
            else if ((props.secondary) || (props.terciary)) {
                if (props.danger) 
                    return '#FEEFEE'
                else if (props.success)
                    return '#E7FBF3'    
                else if (props.neutral)
                    return '#E1E7FD'
                else
                    return 'transparent'
            }
            else
                return 'transparent'
        }
    };    
    color: ${
        props => {
            if (props.primary) {
                return 'white'
            }
            else if ((props.secondary) || (props.terciary) || (props.quartiary)) {
                if (props.danger) 
                    return '#F95E5A'
                else if (props.success)
                    return '#12DB89'    
                else if (props.neutral)
                    return '#365DF0'
                else 
                    return 'black'  
            }
            else
                return 'black'
        }
    };

    :hover {
        background-color : ${
            props => {
                if (props.primary) {
                    if (props.danger) 
                        return '#CC4C4C'
                    else if (props.success)
                        return '#10B26C'    
                    else if (props.neutral)
                        return '#2F55CC'
                    else
                        return 'transparent'
                }
                else if ((props.secondary) || (props.terciary)) {
                    if (props.danger) 
                        return '#FCD7D6'
                    else if (props.success)
                        return '#CFF9E6'    
                    else if (props.neutral)
                        return '#CAD6FC'
                    else
                        return 'transparent'
                }
                else
                    return 'transparent'
            }
        }
    }

    :active {
        background-color : ${
            props => {
                if (props.primary) {
                    if (props.danger) 
                        return '#A53F3F'
                    else if (props.success)
                        return '#0E995D'    
                    else if (props.neutral)
                        return '#244AA8'
                    else
                        return 'transparent'
                }
                else if ((props.secondary) || (props.terciary)) {
                    if (props.danger) 
                        return '#FCC6C5'
                    else if (props.success)
                        return '#B7F7D8'    
                    else if (props.neutral)
                        return '#B9C6FA'
                    else
                        return 'transparent'
                }
                else
                    return 'transparent'
            }
        };
    }

    :disabled {
        ${
            props => {
                if (props.primary) {
                    if (props.danger) 
                        return 'background: #FCAEAC; ' +
                                'color : #FEEFEE;'
                    else if (props.success)
                        return 'background: #88EDC4; ' +
                                'color : #E7FBF3;'    
                    else if (props.neutral)
                        return 'background: #B9C6FA; ' +
                                'color : #E1E7FD;'
                    else
                        return 'transparent'
                }
                else if ((props.secondary) || (props.terciary)) {
                    if (props.danger)  
                        return (props.quartiary ? 'background: #FEEFEE; ' : '') +
                                'color : #FCAEAC;'
                    else if (props.success)
                        return (props.quartiary ? 'background: #E7FBF3; ' : '') +
                                'color : #88EDC4;'    
                    else if (props.neutral)
                        return (props.quartiary ? 'background: #E1E7FD; ' : '') +
                                'color : #B9C6FA;'
                    else
                        return 'transparent'
                }
                else
                    return 'transparent'
            }
        };
    }
`

export {
    Button    
}
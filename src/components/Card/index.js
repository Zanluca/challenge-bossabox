import React from 'react'
import { CardContainer, CardTitleContainer, CardBody, CardFooter} from './style'
import {Button} from '../Button/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Card({
  tool,
  showRemove
}) {
  return (
    <CardContainer>
      <CardTitleContainer>
        <span><a href={tool.link}>{tool.title}</a></span>        
        <span><Button quartiary danger onClick={() => showRemove(tool)}><FontAwesomeIcon icon = 'times'/> remove</Button></span>    
      </CardTitleContainer>
      <CardBody>
        {tool.description} 
      </CardBody>
      <CardFooter>
        {tool.tags.reduce(((result, tag, ) => `${result} #${tag}`), '')}
      </CardFooter>
    </CardContainer>
  )
}

export default Card
import React from 'react'
import { CardContainer, CardTitleContainer, CardBody, CardFooter} from './style'
import {Button} from '../Button/'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const defaultTool = {
  description : '',
  link : '',
  tags: [],
  title : '',
}

function Card({
  tool = defaultTool,
  showRemove = () => {},
  highlight = ''
}) {

  /**
   *Destaca a tag que corresponte exatamento com o termo que está sendo buscado.
   */
  function highlightTag(tag, key) {
    if (tag === highlight)
      return <span key={key}><mark>#{tag}</mark> </span>
    else
      return <span key={key}>#{tag} </span>
  }

  return (
    <CardContainer data-testid='card'>
      <CardTitleContainer>
        <span aria-label='tool-name'><a href={tool.link}>{tool.title}</a></span>        
        <span><Button aria-label='button-remove' quartiary danger onClick={() => showRemove(tool)}><FontAwesomeIcon icon = 'times'/> remove</Button></span>    
      </CardTitleContainer>
      <CardBody aria-label='tool-description'>
        {tool.description} 
      </CardBody>
      <CardFooter aria-label='tool-tags'>
        {tool.tags.map((tag, index) => highlightTag(tag, index))}
      </CardFooter>
    </CardContainer>
  )
}

export default Card